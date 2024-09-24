import {expect} from 'detox';
import { goThroughIntro, goToSection, scrollUntilElementIsVisible } from './_helpers';

describe("Cell", () => {
    beforeAll(async () => {
        await goThroughIntro();
        await goToSection("Cell");
    });

    const scrollViewID = "scroll-view-cell"

    it("swiping the ping pong cell to the right, should display a 'PING' button on the left side", async () => {
        const cellId = "ping-pong";
        await scrollUntilElementIsVisible(scrollViewID, cellId);
        
        await element(by.id(cellId)).swipe("right", "fast", 0.5);
        await expect(await element(by.text("PING"))).toBeVisible();
    });
    it("pressing the ping button should display the pong button", async () => {
        await element(by.text("PING")).tap();
        await expect(await element(by.text("PONG"))).toBeVisible();
    });

    it("pressing the pong button should display the ping button", async () => {
        await element(by.text("PONG")).tap();
        await expect(await element(by.text("PING"))).toBeVisible();
    });

    /*if you want some fun, uncomment the lines below*/
    // it("SHOULD PLAY PING PONG ENDLESSLY", async () => {
    //     while (true) {
    //         await element(by.text("PING")).tap();
    //         await element(by.text("PONG")).tap();
    //     }
    // });

    afterAll(async () => device.reloadReactNative());
});
