import type { ColorScheme, Density, MasterToken, Theme } from "./types";
import { masterToken } from "./masterToken";

export function createTokenProxy(scheme: ColorScheme, density: Density): Theme {
    const handler: ProxyHandler<any> = {
        get: function (target, prop, receiver) {
            const value = Reflect.get(target, prop, receiver)

            if (typeof value === "object" && !Array.isArray(value)) {
                if (scheme in value || density in value) {
                    return value[scheme] ?? value[density];
                }
                return new Proxy(value, handler)
            }
            return value;
        }
    }
    return new Proxy<MasterToken>(masterToken, handler) as unknown as Theme;
}