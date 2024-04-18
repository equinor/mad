import { expect } from "detox";
import { goThroughIntro, goToSection } from "./_helpers";

describe("Menu", () => {
    beforeAll(async () => {
        await goThroughIntro();
        await goToSection("Menu");
    });

    it("First button should trigger a menu. Pressing an option should make the menu disappear", async () => {
        await expect(element(by.id("menu-1"))).not.toBeVisible();
        await element(by.id("open-menu-button-1")).tap();
        await expect(element(by.id("menu-1"))).toBeVisible();
        await element(by.id("menu-1-option-1")).tap();
        await expect(element(by.id("menu-1"))).not.toBeVisible();
    });

    it("Second button should trigger another menu. Option 5 should NOT make the menu disappear", async () => {
        await expect(element(by.id("menu-2"))).not.toBeVisible();
        await element(by.id("open-menu-button-2")).tap();
        await expect(element(by.id("menu-2"))).toBeVisible();
        await element(by.id("menu-2-option-1")).tap();
        await expect(element(by.id("menu-2"))).not.toBeVisible();
        await element(by.id("open-menu-button-2")).tap();
        await element(by.id("menu-2-option-dont-close-menu")).tap();
        await expect(element(by.id("menu-2"))).toBeVisible();
        await element(by.id("menu-2-option-4")).tap();
        await expect(element(by.id("menu-2"))).not.toBeVisible();
    });

    it("Pressing a disabled option should by default make the menu disappear", async () => {
        await expect(element(by.id("menu-2"))).not.toBeVisible();
        await element(by.id("open-menu-button-2")).tap();
        await expect(element(by.id("menu-2"))).toBeVisible();
        await element(by.id("menu-2-option-disabled")).tap();
        await expect(element(by.id("menu-2"))).not.toBeVisible();
    });

    afterAll(async () => device.reloadReactNative());
});
