export type GetNavigationRouteForLoginScreenOptions = {
    appVersion: string;
    lastDisplayedReleaseNotesVersion: string;
    isDemoMode?: boolean;
};
export type GetNavigationRouteForLoginScreenReturnType = "ReleaseNotes" | "Root";
export const getNavigationRouteForLoginScreen = ({
    appVersion,
    lastDisplayedReleaseNotesVersion,
    isDemoMode,
}: GetNavigationRouteForLoginScreenOptions): GetNavigationRouteForLoginScreenReturnType => {
    if (isDemoMode) return "ReleaseNotes";
    if (lastDisplayedReleaseNotesVersion < appVersion) return "ReleaseNotes";
    return "Root";
};

export const _getNavigationRouteForLoginScreenPure = {};
