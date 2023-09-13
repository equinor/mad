import React, { ReactNode } from "react";
import { EnvironmentBanner } from "@equinor/mad-components";
/**
 * Custom render function that displays an environment banner
 * @param originalRender the original render function, found in the descriptor
 * @returns new render function
 */
export const getCustomRenderFunction = (originalRender: () => ReactNode) => {
    const customRender = () => (
        <>
            <EnvironmentBanner />
            {originalRender()}
        </>
    );
    return customRender;
};
