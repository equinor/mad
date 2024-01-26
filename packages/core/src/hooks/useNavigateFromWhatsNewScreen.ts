import { useLanguage, useMadConfig } from "../store";
import { useNavigateToMainRoute } from "../store/mad-config";
import { getNavigationRouteForWhatsNewScreen } from "../utils/getNavigationRouteForWhatsNewScreen";
import { useCoreStackNavigation } from "./useCoreStackNavigation";

export const useNavigateFromWhatsNewScreen = () => {
    const navigation = useCoreStackNavigation();
    const navigateToMainRoute = useNavigateToMainRoute();
    const { isLanguageSelected, supportedLanguages } = useLanguage();
    const {
        language: { skipOnboarding },
    } = useMadConfig();

    const route = getNavigationRouteForWhatsNewScreen(
        isLanguageSelected,
        supportedLanguages,
        skipOnboarding,
    );
    if (route) return () => navigation.navigate(route);
    return navigateToMainRoute;
};
