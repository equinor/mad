import React from "react";
import { EnvironmentBanner } from "@equinor/mad-components";
import { MadDescriptorBase } from "./types";
/**
 * Custom render function that displays environment banner
 * @param descriptor
 * @returns new render function
 */
export const getCustomRenderFunction = (descriptor: MadDescriptorBase) => {
    const originalRender = descriptor.render;
    const customRender = () => (
        <>
            <EnvironmentBanner />
            {originalRender()}
        </>
    );
    return customRender;
};
