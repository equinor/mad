import { getIsLanguageSelected } from "../store/language"
import { getConfig } from "../store/mad-config";
import { CoreStackParamListBase } from "../types";

export const getNavigationRouteForWhatsNewScreen = (): keyof CoreStackParamListBase => {
    const isLanguageSelected = getIsLanguageSelected();
    const config = getConfig();
    if (isLanguageSelected || config.language.skipOnboarding || config.language.supportedLanguages.length < 2) return "Root";
    return "SelectLanguageOnboarding"
}