import { expect } from "detox";
import { goThroughIntro, goToSection } from "./_helpers";

describe("Select", () => {
    beforeAll(async () => {
        await goThroughIntro();
        await goToSection("Select");
    });

    test("standard select component", async () => {
        const selectId = "standard-select";
        await waitFor(element(by.id(selectId)))
            .toBeVisible()
            .whileElement(by.id("scroll-view-cell"))
            .scroll(500, "down");
        await expect(
            await element(by.text("Fingers to Toes Transformation Elixir")),
        ).not.toBeVisible();
        await element(by.id(selectId)).tap();
        await expect(await element(by.text("Fingers to Toes Transformation Elixir"))).toBeVisible();
        await element(by.text("Fingers to Toes Transformation Elixir")).tap();
        await expect(
            await element(by.text("Fingers to Toes Transformation Elixir")),
        ).not.toBeVisible();
    });

    test("standard select component", async () => {
        const selectId = "multi-select";
        await waitFor(element(by.id(selectId)))
            .toBeVisible()
            .whileElement(by.id("scroll-view-cell"))
            .scroll(500, "down");
        await expect(await element(by.text("Lion's Whiskers"))).not.toBeVisible();
        await element(by.id(selectId)).tap();
        await expect(await element(by.text("Lion's Whiskers"))).toBeVisible();
        await element(by.text("Frog's Tears")).tap();
        await expect(await element(by.text("Lion's Whiskers"))).toBeVisible();
        await element(by.text("Lion's Whiskers")).tap();
        await expect(await element(by.text("Frog's Tears, Lion's Whiskers"))).toBeVisible();
        await element(by.text("Frog's Tears")).tap();
        await element(by.text("Lion's Whiskers")).tap();
        await element(by.text("Lion's Whiskers")).tap();
        await element(by.text("Frog's Tears")).tap();
        await expect(await element(by.text("Lion's Whiskers, Frog's Tears"))).toBeVisible();
    });
});
