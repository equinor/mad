import { expect } from "detox";
import { goThroughIntro, goToSection, scrollUntilElementIsVisible } from "./_helpers";

describe("Select", () => {
    beforeAll(async () => {
        await goThroughIntro();
        await goToSection("Select");
    });

    const scrollViewID = "scroll-view-select";

    test("standard select component", async () => {
        const selectId = "standard-select";
        await scrollUntilElementIsVisible(scrollViewID, selectId);
        await expect(await element(by.id("standard-select-option-0"))).not.toBeVisible();
        await element(by.id(selectId)).tap();
        await expect(await element(by.id("standard-select-option-0"))).toBeVisible();
        await element(by.id("standard-select-option-0")).tap();
        await expect(await element(by.id("standard-select-option-0"))).not.toBeVisible();
    });

    test("multi-select component", async () => {
        const selectId = "multi-select";
        await scrollUntilElementIsVisible(scrollViewID, selectId);
        await expect(await element(by.id("multi-select-option-1"))).not.toBeVisible();
        await element(by.id(selectId)).tap();
        await expect(await element(by.id("multi-select-option-1"))).toBeVisible();
        await element(by.id("multi-select-option-0")).tap();
        await expect(await element(by.id("multi-select-option-1"))).toBeVisible();
        await element(by.id("multi-select-option-1")).tap();
        await expect(await element(by.text("Frog's Tears, Lion's Whiskers"))).toBeVisible();
        await element(by.id("multi-select-option-0")).tap();
        await element(by.id("multi-select-option-1")).tap();
        await element(by.id("multi-select-option-1")).tap();
        await element(by.id("multi-select-option-0")).tap();
        await expect(await element(by.text("Lion's Whiskers, Frog's Tears"))).toBeVisible();
        await element(by.id(selectId)).tap();
        await expect(await element(by.id("multi-select-option-1"))).not.toBeVisible();
    });

    test("disabled select", async () => {
        const selectId = "disabled-select";
        await scrollUntilElementIsVisible(scrollViewID, selectId);
        await expect(await element(by.id("disabled-select-option-1"))).not.toBeVisible();
        await element(by.id(selectId)).tap();
        await expect(await element(by.id("disabled-select-option-1"))).not.toBeVisible();
    });
});
