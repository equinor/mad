global.goThroughIntro = async () => {
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

global.goToSection = async sectionName => {
    await waitFor(element(by.id(sectionName)))
        .toBeVisible()
        .whileElement(by.id("scroll-view-components"))
        .scroll(500, "down");
    await element(by.id(sectionName)).tap();
};
