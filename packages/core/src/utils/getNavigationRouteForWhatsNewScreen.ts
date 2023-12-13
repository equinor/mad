import { getIsLanguageSelected } from "../store/language"
import { getConfig } from "../store/mad-config";
import { CoreStackParamListBase } from "../types";

export const getNavigationRouteForWhatsNewScreen = (): keyof CoreStackParamListBase => {
    const isLanguageSelected = getIsLanguageSelected();
    const config = getConfig();
    if (config.language.supportedLanguages.length < 2) return "Root";
    if (config.language.skipOnboarding) return "Root";
    if (isLanguageSelected) return "Root";
    return "SelectLanguageOnboarding"
}