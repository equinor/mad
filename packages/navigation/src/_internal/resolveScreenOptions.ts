import { NavigationRouteProp, MadNavigationOptions, UnresolvedScreenOptions } from "./types";

/**
 * Screen options can be an object, a function, or undefined. This function calls it with the right properties if it is a function, resulting in an object or undefined
 * @param unresolvedScreenOptions unresolved screen options provided by React Navigation
 * @param route route provided by React Navigation
 * @param navigation navigation provided by React Navigation.
 * @returns resolved screen options
 */
export const resolveScreenOptions = <T extends MadNavigationOptions>(
    unresolvedScreenOptions: UnresolvedScreenOptions<T>,
    route: NavigationRouteProp,
    navigation: unknown,
) => {
    if (!unresolvedScreenOptions) return undefined;
    if (typeof unresolvedScreenOptions === "function")
        return unresolvedScreenOptions({ route, navigation });
    return unresolvedScreenOptions;
};
