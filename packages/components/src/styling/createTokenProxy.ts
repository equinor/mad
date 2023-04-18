import type { ColorScheme, ColorSchemeValues, Density, DensityValues, MasterToken, Theme } from "./types";
import { masterToken } from "./masterToken";

function keyEquality(obj1: object, obj2: object) {
    const obj1Keys = Object.keys(obj1).sort();
    const obj2Keys = Object.keys(obj2).sort();
    return JSON.stringify(obj1Keys) === JSON.stringify(obj2Keys);
}

function isColorSchemeValuesObject(obj: object): obj is ColorSchemeValues<unknown> {
    const template: ColorSchemeValues<unknown> = {
        light: undefined as unknown,
        dark: undefined as unknown,
    };
    return keyEquality(obj, template);
}

function isDensityValuesObject(obj: object): obj is DensityValues<unknown> {
    const template: DensityValues<unknown> = {
        comfortable: undefined as unknown,
        tight: undefined as unknown,
    };
    return keyEquality(obj, template);
}

export function createTokenProxy(scheme: ColorScheme, density: Density): Theme {
    const handler: ProxyHandler<any> = {
        get: function (target, property, receiver) {
            const value = Reflect.get(target, property, receiver)

            if (typeof value === "object" && !Array.isArray(value)) {
                if (isColorSchemeValuesObject(value) || isDensityValuesObject(value)) {
                    return (value as ColorSchemeValues<unknown>)[scheme] ?? (value as DensityValues<unknown>)[density];
                }
                return new Proxy(value, handler)
            }
            return value;
        }
    }
    return new Proxy<MasterToken>(masterToken, handler) as unknown as Theme;
}


