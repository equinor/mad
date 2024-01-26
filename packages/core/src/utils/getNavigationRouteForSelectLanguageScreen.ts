import { CoreRoutes } from "../components/navigation/coreRoutes";
import { CoreStackParamListBase } from "../types";

/**
 * Returns the route Language Select Screen should navigate to. If it returns `null`, the app should navigate to the main route
 */
export const getNavigationRouteForSelectLanguageScreen = (
    isOnboarding: boolean,
): keyof CoreStackParamListBase | null => {
    if (isOnboarding) return null;
    return CoreRoutes.SETTINGS;
};
