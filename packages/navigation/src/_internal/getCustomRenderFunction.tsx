import React, { ReactNode } from "react";
import { EnvironmentBanner } from "@equinor/mad-components";
import { HeightSender } from "../header-height-context";
/**
 * Custom render function that displays an environment banner
 * @param originalRender the original render function, found in the descriptor
 * @returns new render function
 */
export const getCustomRenderFunction = (originalRender: () => ReactNode) => {
    const customRender = () => (
        <>
            <EnvironmentBanner />
            <HeightSender />
            {originalRender()}
        </>
    );
    return customRender;
};
