import { CoreRoutes } from "../../src/components/navigation/coreRoutes";
import { getNavigationRouteForSelectLanguageScreen } from "../../src/utils/getNavigationRouteForSelectLanguageScreen";

describe("getNavigationRouteForSelectLanguageScreen", () => {
    it("Should return null if onboarding is true", () => {
        const val = getNavigationRouteForSelectLanguageScreen(true);
        expect(val).toBe(null);
    });

    it("Should return 'Settings' if onboarding is false", () => {
        const val = getNavigationRouteForSelectLanguageScreen(false);
        expect(val).toBe(CoreRoutes.SETTINGS);
    });
});
