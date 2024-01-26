import { CoreRoutes } from "../components/navigation/coreRoutes";
import { Language } from "../store/types";
import { CoreStackParamListBase } from "../types";
import { getNavigationRouteForWhatsNewScreen } from "./getNavigationRouteForWhatsNewScreen";

type GetNavigationRouteForLoginScreenOptions = {
    appVersion: string;
    lastDisplayedReleaseNotesVersion: string | null;
    isDemoModeEnabled: boolean;
    isLanguageSelected: boolean;
    supportedLanguages: Language[];
    skipOnboarding: boolean | undefined;
};
/**
 * Returns the route Login Screen should navigate to. If it returns `null`, the app should navigate to the main route
 */
export const getNavigationRouteForLoginScreen = ({
    appVersion,
    lastDisplayedReleaseNotesVersion,
    isDemoModeEnabled,
    isLanguageSelected,
    supportedLanguages,
    skipOnboarding,
}: GetNavigationRouteForLoginScreenOptions): keyof CoreStackParamListBase | null => {
    if (isDemoModeEnabled) return CoreRoutes.WHATS_NEW;
    if (!lastDisplayedReleaseNotesVersion || lastDisplayedReleaseNotesVersion < appVersion)
        return CoreRoutes.WHATS_NEW;
    return getNavigationRouteForWhatsNewScreen(
        isLanguageSelected,
        supportedLanguages,
        skipOnboarding,
    );
};
