import { getLastDisplayedReleaseNotesVersion } from "../store/release-notes/release-notes";

export type GetNavigationRouteForLoginScreenOptions = {
    appVersion: string;
    isDemoMode?: boolean;
};
export type GetNavigationRouteForLoginScreenReturnType = "ReleaseNotes" | "Root";
export const getNavigationRouteForLoginScreen = ({
    appVersion,
    isDemoMode,
}: GetNavigationRouteForLoginScreenOptions): GetNavigationRouteForLoginScreenReturnType => {
    if (isDemoMode) return "ReleaseNotes";
    const lastDisplayedReleaseNotesVersion = getLastDisplayedReleaseNotesVersion();
    if (lastDisplayedReleaseNotesVersion < appVersion) return "ReleaseNotes";
    return "Root";
};
