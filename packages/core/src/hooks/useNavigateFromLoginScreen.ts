import { useDemoMode } from "../store";
import { useAppVersion, useNavigateToMainRoute } from "../store/mad-config";
import { useReleaseNotesVersion } from "../store/release-notes";
import { getNavigationRouteForLoginScreen } from "../utils/getNavigationRouteForLoginScreen";
import { useCoreStackNavigation } from "./useCoreStackNavigation";

export const useNavigateFromLoginScreen = () => {
    const appVersion = useAppVersion();
    const { lastDisplayedReleaseNotesVersion } = useReleaseNotesVersion();
    const { isEnabled: isDemoModeEnabled } = useDemoMode();
    const navigateToMainRoute = useNavigateToMainRoute();
    const navigation = useCoreStackNavigation();
    const route = getNavigationRouteForLoginScreen({
        appVersion,
        lastDisplayedReleaseNotesVersion,
        isDemoModeEnabled,
    });
    if (route) return () => navigation.navigate(route);
    return navigateToMainRoute;
};
