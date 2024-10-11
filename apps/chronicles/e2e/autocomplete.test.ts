import { expect } from "detox";
import { goThroughIntro, goToSection, scrollUntilElementIsVisible } from "./_helpers";

const AutocompleteIDs = {
    STANDARD: "autocomplete-standard",
    MULTISELECT: "autocomplete-multiselect",
};

const createTextFieldSelector = (key: keyof typeof AutocompleteIDs) => () =>
    element(by.id(AutocompleteIDs[key]));

const Autocompletes: Record<keyof typeof AutocompleteIDs, () => Detox.IndexableNativeElement> = {
    STANDARD: createTextFieldSelector("STANDARD"),
    MULTISELECT: createTextFieldSelector("MULTISELECT"),
};

describe("Textfield", () => {
    beforeAll(async () => {
        await goThroughIntro();
        await goToSection("Autocomplete");
    });

    const scrollViewID = "scroll-view-autocomplete";

    test("Check that standard autocomplete works", async () => {
        await scrollUntilElementIsVisible(scrollViewID, AutocompleteIDs.STANDARD);
        await expect(Autocompletes.STANDARD()).not.toBeFocused();
        await Autocompletes.STANDARD().tap();
        await expect(Autocompletes.STANDARD()).toBeFocused();
        await expect(element(by.text("Snow Leopard"))).toBeVisible();
        await expect(element(by.text("Red Panda"))).toBeVisible();
        await Autocompletes.STANDARD().typeText("Snow Leo");
        await expect(element(by.text("Snow Leopard"))).toBeVisible();
        await expect(element(by.text("Red Panda"))).not.toBeVisible();
        await element(by.text("Snow Leopard")).tap();
        await expect(Autocompletes.STANDARD()).toHaveText("Snow Leopard");
        await expect(Autocompletes.STANDARD()).not.toBeFocused();
    });
    test("Buttons in the right adornment of standard autocomplete", async () => {
        await expect(Autocompletes.STANDARD()).toHaveText("Snow Leopard");
        await element(by.id("autocomplete-standard-clear")).tap();
        await expect(Autocompletes.STANDARD()).toHaveText("");
        await expect(Autocompletes.STANDARD()).not.toBeFocused();
        await expect(element(by.id("autocomplete-standard-option-0"))).not.toBeVisible();
        await element(by.id("autocomplete-standard-display-options")).tap();
        await expect(element(by.id("autocomplete-standard-option-0"))).toBeVisible();
        await element(by.id("autocomplete-standard-display-options")).tap();
        await expect(element(by.id("autocomplete-standard-option-0"))).not.toBeVisible();
    });

    test("Check that multiselect autocomplete works", async () => {
        await scrollUntilElementIsVisible(scrollViewID, AutocompleteIDs.MULTISELECT);
        await expect(Autocompletes.MULTISELECT()).not.toBeFocused();
        await Autocompletes.MULTISELECT().tap();
        await expect(Autocompletes.MULTISELECT()).toBeFocused();
        await expect(element(by.text("Snow Leopard"))).toBeVisible();
        await expect(element(by.text("Red Panda"))).toBeVisible();
        await Autocompletes.MULTISELECT().typeText("Snow Leo");
        await expect(element(by.text("Snow Leopard"))).toBeVisible();
        await expect(element(by.text("Red Panda"))).not.toBeVisible();
        await element(by.text("Snow Leopard")).tap();
        await expect(Autocompletes.MULTISELECT()).toBeFocused();
        await expect(Autocompletes.MULTISELECT()).toHaveValue("Snow Leopard");
        await expect(Autocompletes.MULTISELECT()).not.toHaveValue("Red Panda");
        await Autocompletes.MULTISELECT().clearText();
        await element(by.text("Red Panda")).tap();
        await expect(Autocompletes.MULTISELECT()).toHaveValue("Snow Leopard, Red Panda");
        await expect(Autocompletes.MULTISELECT()).not.toHaveValue("Snow Leopard");
        await expect(Autocompletes.MULTISELECT()).not.toHaveValue("Red Panda");
        //await element(by.id(""))
    });
    test("Buttons in the right adornment of multiselect autocomplete", async () => {
        await expect(Autocompletes.MULTISELECT()).toHaveValue("Snow Leopard, Red Panda");
        await Autocompletes.MULTISELECT().tap();
        await element(by.id("autocomplete-multiselect-clear")).tap();
        await expect(Autocompletes.MULTISELECT()).toHaveValue("Choose an option");
        await expect(Autocompletes.MULTISELECT()).not.toBeFocused();
        await expect(element(by.id("autocomplete-multiselect-option-0"))).not.toBeVisible();
        await element(by.id("autocomplete-multiselect-display-options")).tap();
        await expect(element(by.id("autocomplete-multiselect-option-0"))).toBeVisible();
        await element(by.id("autocomplete-multiselect-display-options")).tap();
        await expect(element(by.id("autocomplete-multiselect-option-0"))).not.toBeVisible();
    });
});
