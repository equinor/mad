import { IndexableNativeElement } from "detox/detox";

export const goThroughIntro = async () => {
    await device.launchApp();

    await element(by.id("enable-demo-button")).tap();
    await element(by.id("enable-demo-button")).tap();
    await element(by.id("enable-demo-button")).tap();
    await element(by.id("enable-demo-button")).tap();
    await element(by.id("enable-demo-button")).tap();

    await element(by.text("Demo")).tap();
    await element(by.text("OK")).tap();
    await element(by.text("Save")).tap();
};

export const goToSection = async (sectionName: string) => {
    await waitFor(element(by.id(sectionName)))
        .toBeVisible()
        .whileElement(by.id("scroll-view-components"))
        .scroll(500, "down");
    await element(by.id(sectionName)).tap();
};

export const scrollUntilElementIsVisible = async (
    scrollViewID: string,
    elementID: string,
    pixelsToScroll: number = 500,
) => {
    await waitFor(element(by.id(elementID)))
        .toBeVisible()
        .whileElement(by.id(scrollViewID))
        .scroll(pixelsToScroll, "down");
};
