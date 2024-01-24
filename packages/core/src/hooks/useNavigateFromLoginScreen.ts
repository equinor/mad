import { useDemoMode, useLanguage } from "../store";
import { useAppVersion, useMadConfig, useNavigateToMainRoute } from "../store/mad-config";
import { useReleaseNotesVersion } from "../store/release-notes";
import { getNavigationRouteForLoginScreen } from "../utils/getNavigationRouteForLoginScreen";
import { useCoreStackNavigation } from "./useCoreStackNavigation";

export const useNavigateFromLoginScreen = () => {
    const appVersion = useAppVersion();
    const { lastDisplayedReleaseNotesVersion } = useReleaseNotesVersion();
    const { isEnabled: isDemoModeEnabled } = useDemoMode();
    const navigateToMainRoute = useNavigateToMainRoute();
    const navigation = useCoreStackNavigation();
    const {
        language: { supportedLanguages, skipOnboarding },
    } = useMadConfig();
    const { getIsLanguageSelected } = useLanguage();

    const isLanguageSelected = getIsLanguageSelected();

    const route = getNavigationRouteForLoginScreen({
        appVersion,
        lastDisplayedReleaseNotesVersion,
        isDemoModeEnabled,
        supportedLanguages,
        skipOnboarding,
        isLanguageSelected,
    });

    if (route) return () => navigation.navigate(route);
    return navigateToMainRoute;
};
