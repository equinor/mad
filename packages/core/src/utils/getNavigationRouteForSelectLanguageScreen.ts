import { CoreStackParamListBase } from "../types";

export const getNavigationRouteForLanguageSelectScreen = (isOnboarding: boolean): keyof CoreStackParamListBase => {
    if (isOnboarding) return "Root";
    return "Settings"
}