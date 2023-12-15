import { CoreStackParamListBase } from "../types";
import { getNavigationRouteForWhatsNewScreen } from "./getNavigationRouteForWhatsNewScreen";

export type GetNavigationRouteForLoginScreenOptions = {
    appVersion: string;
    lastDisplayedReleaseNotesVersion: string | null;
    isDemoMode?: boolean;
};
export type GetNavigationRouteForLoginScreenReturnType = keyof CoreStackParamListBase;
export const getNavigationRouteForLoginScreen = ({
    appVersion,
    lastDisplayedReleaseNotesVersion,
    isDemoMode,
}: GetNavigationRouteForLoginScreenOptions): GetNavigationRouteForLoginScreenReturnType => {
    if (isDemoMode) return "WhatsNew";
    if (!lastDisplayedReleaseNotesVersion || lastDisplayedReleaseNotesVersion < appVersion)
        return "WhatsNew";
    return getNavigationRouteForWhatsNewScreen();
};

export const _getNavigationRouteForLoginScreenPure = {};
