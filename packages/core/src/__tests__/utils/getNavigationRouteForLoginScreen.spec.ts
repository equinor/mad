import { getNavigationRouteForLoginScreen } from "../../utils/getNavigationRouteForLoginScreen";

describe("getNavigationRouteForLoginScreen", () => {
    it("should always return 'ReleaseNotes' when demo mode is set to true", () => {
        const route1 = getNavigationRouteForLoginScreen({
            appVersion: "1.0.0",
            lastDisplayedReleaseNotesVersion: "1.0.0",
            isDemoMode: true,
        });
        const route2 = getNavigationRouteForLoginScreen({
            appVersion: "1.0.0",
            lastDisplayedReleaseNotesVersion: "1.1.0",
            isDemoMode: true,
        });
        const route3 = getNavigationRouteForLoginScreen({
            appVersion: "1.1.0",
            lastDisplayedReleaseNotesVersion: "1.0.0",
            isDemoMode: true,
        });

        expect(route1).toBe("ReleaseNotes");
        expect(route2).toBe("ReleaseNotes");
        expect(route3).toBe("ReleaseNotes");
    });

    it("Should return 'Root' if lastDisplayedReleaseNotesVersion is equal or greater than appVersion. Otherwise is should return 'ReleaseNotes'", () => {
        // Protip: Do not create nested for-loops to test all single-digit versions from '0.0.0' to '9.9.9'.
        // Doing so will result in a test that takes approx 71 seconds to run on an intel Mac.
        // Here is a simplified version

        const val1 = getNavigationRouteForLoginScreen({
            appVersion: "0.0.0",
            lastDisplayedReleaseNotesVersion: "0.0.0",
        });
        expect(val1).toBe("Root");

        const val2 = getNavigationRouteForLoginScreen({
            appVersion: "0.0.0",
            lastDisplayedReleaseNotesVersion: "0.0.10",
        });
        expect(val2).toBe("Root");

        const val3 = getNavigationRouteForLoginScreen({
            appVersion: "0.0.10",
            lastDisplayedReleaseNotesVersion: "0.0.0",
        });
        expect(val3).toBe("ReleaseNotes");

        const val4 = getNavigationRouteForLoginScreen({
            appVersion: "0.0.10",
            lastDisplayedReleaseNotesVersion: "0.10.0",
        });
        expect(val4).toBe("Root");

        const val5 = getNavigationRouteForLoginScreen({
            appVersion: "0.10.0",
            lastDisplayedReleaseNotesVersion: "0.0.10",
        });
        expect(val5).toBe("ReleaseNotes");

        const val6 = getNavigationRouteForLoginScreen({
            appVersion: "0.10.10",
            lastDisplayedReleaseNotesVersion: "10.0.0",
        });
        expect(val6).toBe("Root");

        const val7 = getNavigationRouteForLoginScreen({
            appVersion: "10.0.0",
            lastDisplayedReleaseNotesVersion: "0.10.10",
        });
        expect(val7).toBe("ReleaseNotes");

        const val8 = getNavigationRouteForLoginScreen({
            appVersion: "0.0.0",
            lastDisplayedReleaseNotesVersion: "-1",
        });
        expect(val8).toBe("ReleaseNotes");
    });
});
