import {expect} from 'detox';
import { goThroughIntro, goToSection } from './_helpers';

describe("Popover", () => {
    beforeAll(async () => {
        await goThroughIntro();
        await goToSection("Popover");
    });

    it("Test 1: First button should trigger a popover", async() => {
        await expect(element(by.id("popover-1"))).not.toBeVisible()
        await element(by.id("trigger-popover")).tap();
        await expect(element(by.id("popover-1"))).toBeVisible()
        //just closing the popover before the 2nd test
        await element(by.id("useless-button-1")).tap(); 
    })

    it("Test 2: Interacting with other elements should not close the popover", async() => {
        await expect(element(by.id("popover-2"))).not.toBeVisible();
        await element(by.id("trigger-popover-2")).tap();
        await expect(element(by.id("popover-2"))).toBeVisible();
        await element(by.id("useless-button-1")).tap();
        await expect(element(by.id("popover-2"))).toBeVisible();
        await element(by.id("useless-button-2")).tap();
        await expect(element(by.id("popover-2"))).toBeVisible();
        await element(by.id("close-popover-button")).tap();
        await expect(element(by.id("popover-2"))).not.toBeVisible();


    })

    afterAll(async () => device.reloadReactNative());
})