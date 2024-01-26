import { CoreRoutes } from "../components/navigation/coreRoutes";
import { useNavigateToMainRoute } from "../store/mad-config";
import { getNavigationRouteForSelectLanguageScreen } from "../utils/getNavigationRouteForSelectLanguageScreen";
import { useCoreStackNavigation, useCoreStackRoute } from "./useCoreStackNavigation";

export const useNavigateFromLanguageSelectScreen = () => {
    const coreRoute = useCoreStackRoute();
    const navigation = useCoreStackNavigation();
    const navigateToMainRoute = useNavigateToMainRoute();
    const isOnboarding = coreRoute.name === CoreRoutes.SELECT_LANGUAGE_ONBOARDING;
    const route = getNavigationRouteForSelectLanguageScreen(isOnboarding);
    if (route) return () => navigation.navigate(route);
    return navigateToMainRoute;
};
