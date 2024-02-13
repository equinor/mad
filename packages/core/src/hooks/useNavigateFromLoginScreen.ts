import { getIsDemoModeEnabled, enableDemoMode, useLanguage } from "../store";
import { useAppVersion, useMadConfig, useNavigateToMainRoute } from "../store/mad-config";
import { useReleaseNotesVersion } from "../store/release-notes";
import { getNavigationRouteForLoginScreen } from "../utils/getNavigationRouteForLoginScreen";
import { useCoreStackNavigation } from "./useCoreStackNavigation";

export const useNavigateFromLoginScreen = () => {
    const appVersion = useAppVersion();
    const { lastDisplayedReleaseNotesVersion } = useReleaseNotesVersion();
    const navigateToMainRoute = useNavigateToMainRoute();
    const navigation = useCoreStackNavigation();
    const {
        language: { supportedLanguages, skipOnboarding },
    } = useMadConfig();
    const { isLanguageSelected } = useLanguage();

    return (options?: { enableDemoMode?: boolean }) => {
        if (options?.enableDemoMode) enableDemoMode();

        const route = getNavigationRouteForLoginScreen({
            appVersion,
            lastDisplayedReleaseNotesVersion,
            isDemoModeEnabled: !!getIsDemoModeEnabled(),
            supportedLanguages,
            skipOnboarding,
            isLanguageSelected,
        });

        if (route) navigation.navigate(route);
        else navigateToMainRoute();
    };
};
