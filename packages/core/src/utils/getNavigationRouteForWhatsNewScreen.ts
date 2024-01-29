import { CoreRoutes } from "../components/navigation/coreRoutes";
import { Language } from "../store/types";
import { CoreStackParamListBase } from "../types";

/**
 * Returns the route Whats New Screen should navigate to. If it returns `null`, the app should navigate to the main route
 */
export const getNavigationRouteForWhatsNewScreen = (
    isLanguageSelected: boolean,
    supportedLanguages: Language[],
    skipOnboarding: boolean | undefined,
): keyof CoreStackParamListBase | null => {
    if (supportedLanguages.length < 2) return null;
    if (skipOnboarding) return null;
    if (isLanguageSelected) return null;
    return CoreRoutes.SELECT_LANGUAGE_ONBOARDING;
};
