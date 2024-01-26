import { CoreRoutes } from "../../src/components/navigation/coreRoutes";

/**
 * These tests are added to let you know when you introduce breaking changes
 */

describe("CoreRoutes", () => {
    it("Should contain the following strings", () => {
        expect(CoreRoutes.ABOUT).toBe("About");
        expect(CoreRoutes.FEEDBACK).toBe("Feedback");
        expect(CoreRoutes.LOGIN).toBe("Login");
        expect(CoreRoutes.NOT_FOUND).toBe("NotFound");
        expect(CoreRoutes.RELEASE_NOTES).toBe("ReleaseNotes");
        expect(CoreRoutes.SELECT_LANGUAGE).toBe("SelectLanguage");
        expect(CoreRoutes.SELECT_LANGUAGE_ONBOARDING).toBe("SelectLanguageOnboarding");
        expect(CoreRoutes.SETTINGS).toBe("Settings");
        expect(CoreRoutes.WHATS_NEW).toBe("WhatsNew");
    });
});
