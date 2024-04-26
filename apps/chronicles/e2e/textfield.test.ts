import { expect } from "detox";
import { goThroughIntro, goToSection, scrollUntilElementIsVisible } from "./_helpers";

const TextFieldIDs = {
    STANDARD: "text-field-standard",
    WITH_UNITS: "text-field-with-units",
    MULTILINE: "text-field-multiline",
    ICONS: "text-field-icons",
    VALIDATION: "text-field-validation",
};

const createTextFieldSelector = (key: keyof typeof TextFieldIDs) => () =>
    element(by.id(TextFieldIDs[key]));

const TextFields: Record<keyof typeof TextFieldIDs, () => Detox.IndexableNativeElement> = {
    STANDARD: createTextFieldSelector("STANDARD"),
    WITH_UNITS: createTextFieldSelector("WITH_UNITS"),
    MULTILINE: createTextFieldSelector("MULTILINE"),
    ICONS: createTextFieldSelector("ICONS"),
    VALIDATION: createTextFieldSelector("VALIDATION"),
};

describe("Textfield", () => {
    beforeAll(async () => {
        await goThroughIntro();
        await goToSection("Text Field");
    });

    const scrollViewID = "scroll-view-text-field";

    test("Check that standard input works", async () => {
        await scrollUntilElementIsVisible(scrollViewID, TextFieldIDs.STANDARD);
        await expect(TextFields.STANDARD()).not.toBeFocused();
        await TextFields.STANDARD().tap();
        await expect(TextFields.STANDARD()).toBeFocused();
        await TextFields.STANDARD().typeText("Testing standard text field\n");
        await expect(TextFields.STANDARD()).toHaveText("Testing standard text field");
        await expect(TextFields.STANDARD()).not.toBeFocused();
    });

    test("Check that unit input works", async () => {
        await scrollUntilElementIsVisible(scrollViewID, TextFieldIDs.WITH_UNITS);
        await expect(TextFields.WITH_UNITS()).not.toBeFocused();
        await TextFields.WITH_UNITS().tap();
        await expect(TextFields.WITH_UNITS()).toBeFocused();
        await TextFields.WITH_UNITS().typeText("Testing unit text field\n");
        await expect(TextFields.WITH_UNITS()).toHaveText("Testing unit text field");
        await expect(TextFields.WITH_UNITS()).not.toBeFocused();
    });

    test("Check that multiline input works", async () => {
        await scrollUntilElementIsVisible(scrollViewID, TextFieldIDs.MULTILINE);
        await expect(TextFields.MULTILINE()).not.toBeFocused();
        await TextFields.MULTILINE().tap();
        await expect(TextFields.MULTILINE()).toBeFocused();
        await TextFields.MULTILINE().typeText("Testing\nmultiline\nfield\n");
        await expect(TextFields.MULTILINE()).toHaveText("Testing\nmultiline\nfield\n");
        await expect(TextFields.MULTILINE()).toBeFocused();
        await element(by.text("It can also add icons")).tap();
        await expect(TextFields.MULTILINE()).toBeFocused();
    });

    test("Check that icon input works", async () => {
        await scrollUntilElementIsVisible(scrollViewID, TextFieldIDs.ICONS);
        await expect(TextFields.ICONS()).not.toBeFocused();
        await TextFields.ICONS().tap();
        await expect(TextFields.ICONS()).toBeFocused();
        await TextFields.ICONS().typeText("Testing icons field\n");
        await expect(TextFields.ICONS()).toHaveText("Testing icons field");
        await expect(TextFields.ICONS()).not.toBeFocused();
    });

    test("Check that validation input works", async () => {
        await scrollUntilElementIsVisible(scrollViewID, TextFieldIDs.VALIDATION);
        await expect(TextFields.VALIDATION()).not.toBeFocused();
        await TextFields.VALIDATION().tap();
        await expect(TextFields.VALIDATION()).toBeFocused();
        await TextFields.VALIDATION().typeText("Testing validation field\n");
        await expect(TextFields.VALIDATION()).toHaveText("Testing validation field");
        await expect(TextFields.VALIDATION()).not.toBeFocused();
        await expect(element(by.text("This is not a number"))).toBeVisible();
        await TextFields.VALIDATION().replaceText("12345\n");
        await expect(element(by.text("This is not a number"))).not.toBeVisible();
        await expect(element(by.text("This is a valid number"))).toBeVisible();
    });
});
