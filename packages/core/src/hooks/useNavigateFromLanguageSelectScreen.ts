import { useNavigateToMainRoute } from "../store/mad-config";
import { getNavigationRouteForLanguageSelectScreen } from "../utils/getNavigationRouteForSelectLanguageScreen";
import { useCoreStackNavigation, useCoreStackRoute } from "./useCoreStackNavigation";

export const useNavigateFromLanguageSelectScreen = () => {
    const coreRoute = useCoreStackRoute();
    const navigation = useCoreStackNavigation();
    const navigateToMainRoute = useNavigateToMainRoute();
    const isOnboarding = coreRoute.name === "SelectLanguageOnboarding";
    const route = getNavigationRouteForLanguageSelectScreen(isOnboarding);
    if (route) return () => navigation.navigate(route);
    return navigateToMainRoute;
};
