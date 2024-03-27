import { getIsDemoModeEnabled, enableDemoMode, useLanguage, disableDemoMode } from "../store";
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

    return (options: { demoMode: boolean }) => {
        if (options.demoMode) enableDemoMode();
        else disableDemoMode();

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
