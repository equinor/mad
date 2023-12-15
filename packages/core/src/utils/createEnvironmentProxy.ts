import {Environment, EnvironmentContext, EnvironmentValues, MadConfig} from "../types";
import { getPureConfig} from "../store/mad-config";
import {EnvironmentContextProps} from "@equinor/mad-components";

function isEnvironmentValuesObject(object: unknown): object is EnvironmentValues<unknown> {
    if (!object) return false;
    const template: Environment[] = ["dev", "test", "qa", "prod"];
    const objectKeys = Object.keys(object);
    return objectKeys.every(key => template.includes(key as Environment));
}

export function createEnvironmentProxy(scheme: EnvironmentContextProps["environment"]) {
    const handler: ProxyHandler<object> = {
        get: function (target, property, receiver) {
            const value: unknown = Reflect.get(target, property, receiver);
            if (typeof value === "object" && !Array.isArray(value) && !!value) {
                if (isEnvironmentValuesObject(value)) {
                    return (value as Partial<Record<Environment, unknown>>)[scheme];
                }
                return new Proxy(value, handler);
            }
            return value;
        },
    };
    return new Proxy<MadConfig>(getPureConfig(), handler) as unknown as EnvironmentContext;
}
