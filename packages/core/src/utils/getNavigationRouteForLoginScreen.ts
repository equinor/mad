export type GetNavigationRouteForLoginScreenOptions = {
    appVersion: string;
    lastDisplayedReleaseNotesVersion: string | null;
    isDemoMode?: boolean;
};
export type GetNavigationRouteForLoginScreenReturnType = "WhatsNew" | "Root";
export const getNavigationRouteForLoginScreen = ({
    appVersion,
    lastDisplayedReleaseNotesVersion,
    isDemoMode,
}: GetNavigationRouteForLoginScreenOptions): GetNavigationRouteForLoginScreenReturnType => {
    if (isDemoMode) return "WhatsNew";
    if (!lastDisplayedReleaseNotesVersion || lastDisplayedReleaseNotesVersion < appVersion)
        return "WhatsNew";
    return "Root";
};

export const _getNavigationRouteForLoginScreenPure = {};
