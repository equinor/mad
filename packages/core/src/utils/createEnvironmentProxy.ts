import {Environment, EnvironmentContextualConfig, EnvironmentValues, MadConfig} from "../types";
import { getPureConfig} from "../store/mad-config";

function isEnvironmentValuesObject(obj: unknown): obj is EnvironmentValues<unknown>{
    if (!obj) return false;
    const template = ["dev", "test", "qa", "prod"];
    const objectKeys = Object.keys(obj);
    return objectKeys.every(key => template.includes(key));
}

/**
 * Given the currently selected environment (dev, test, qa, prod),
 * this method creates proxies for the "mad config" so that it resolves to the correct environment values.
 * This handles all configuration possibilities, from 0 to 4 different environments.
 * @param scheme The environment scheme of the application.
 * @returns A proxied config with all values resolved to the provided schemes.
 */
export function createEnvironmentProxy(scheme: Environment) {
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
    return new Proxy<MadConfig>(getPureConfig(), handler) as unknown as EnvironmentContextualConfig;
}
