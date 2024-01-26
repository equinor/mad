import { CoreRoutes } from "../../src/components/navigation/coreRoutes";
import { getNavigationRouteForWhatsNewScreen } from "../../src/utils/getNavigationRouteForWhatsNewScreen";

describe("getNavigationRouteForWhatsNewScreen", () => {
    it("Should always skip language selection if language is already selected", () => {
        const val = getNavigationRouteForWhatsNewScreen(
            true,
            [
                { code: "whatever", name: "whatever" },
                { code: "whatever2", name: "whatever2" },
            ],
            false,
        );

        expect(val).toBe(null);
    });

    it("Should always skip language selection if skipOnboarding is true", () => {
        const val = getNavigationRouteForWhatsNewScreen(
            false,
            [
                { code: "whatever", name: "whatever" },
                { code: "whatever2", name: "whatever2" },
            ],
            true,
        );

        expect(val).toBe(null);
    });

    it("Should always skip language selection if there are less than 2 supported languages. Otherwise it should return the language selection route", () => {
        const val = getNavigationRouteForWhatsNewScreen(false, [], false);
        expect(val).toBe(null);

        const val2 = getNavigationRouteForWhatsNewScreen(
            false,
            [{ code: "whatever", name: "whatever" }],
            false,
        );
        expect(val2).toBe(null);

        const val3 = getNavigationRouteForWhatsNewScreen(
            false,
            [
                { code: "whatever", name: "whatever" },
                { code: "whatever2", name: "whatever2" },
            ],
            false,
        );
        expect(val3).toBe(CoreRoutes.SELECT_LANGUAGE_ONBOARDING);

        const val4 = getNavigationRouteForWhatsNewScreen(
            false,
            [
                { code: "whatever", name: "whatever" },
                { code: "whatever2", name: "whatever2" },
                { code: "whatever3", name: "whatever3" },
                { code: "whatever4", name: "whatever4" },
                { code: "whatever5", name: "whatever5" },
                { code: "whatever6", name: "whatever6" },
                { code: "whatever7", name: "whatever7" },
                { code: "whatever8", name: "whatever8" },
            ],
            false,
        );
        expect(val4).toBe(CoreRoutes.SELECT_LANGUAGE_ONBOARDING);
    });
});
