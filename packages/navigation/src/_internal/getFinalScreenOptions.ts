import { FinalRouteProp, MadNavigationOptions, ScreenOptions } from "./types";

/**
 * Screen options can be an object, a function, or undefined. This function calls it with the right properties if it is a function, resulting in an object or undefined
 * @param screenOptions
 * @param route
 * @param navigation
 * @returns screenOptions
 */
export const getFinalScreenOptions = <T extends MadNavigationOptions>(
    screenOptions: ScreenOptions<T>,
    route: FinalRouteProp,
    navigation: unknown,
) => {
    if (!screenOptions) return undefined;
    if (typeof screenOptions === "function") return screenOptions({ route, navigation });
    return screenOptions;
};
