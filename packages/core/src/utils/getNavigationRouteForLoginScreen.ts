import { getConfig, getIsLanguageSelected } from "../store";
import { CoreStackParamListBase } from "../types";
import { getNavigationRouteForWhatsNewScreen } from "./getNavigationRouteForWhatsNewScreen";

export type GetNavigationRouteForLoginScreenOptions = {
    appVersion: string;
    lastDisplayedReleaseNotesVersion: string | null;
    isDemoModeEnabled?: boolean;
};
/**
 * Returns the route Login Screen should navigate to. If it returns `null`, the app should navigate to the main route
 */
export const getNavigationRouteForLoginScreen = ({
    appVersion,
    lastDisplayedReleaseNotesVersion,
    isDemoModeEnabled,
}: GetNavigationRouteForLoginScreenOptions): keyof CoreStackParamListBase | null => {
    if (isDemoModeEnabled) return "WhatsNew";
    if (!lastDisplayedReleaseNotesVersion || lastDisplayedReleaseNotesVersion < appVersion)
        return "WhatsNew";

    const {
        language: { supportedLanguages, skipOnboarding },
    } = getConfig();
    const isLanguageSelected = getIsLanguageSelected();
    return getNavigationRouteForWhatsNewScreen(
        isLanguageSelected,
        supportedLanguages,
        skipOnboarding,
    );
};
