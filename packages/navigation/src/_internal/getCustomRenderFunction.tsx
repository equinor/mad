import React, { ReactNode } from "react";
import { HeightSender } from "../header-height-context";
/**
 * Custom render function that displays an environment banner
 * @param originalRender the original render function, found in the descriptor
 * @returns new render function
 */
export const getCustomRenderFunction = (
    originalRender: () => ReactNode,
    customSubHeader?: () => ReactNode,
) => {
    const CustomSubHeader = customSubHeader;
    const customRender = () => (
        <>
            {CustomSubHeader && <CustomSubHeader />}
            <HeightSender />
            {originalRender()}
        </>
    );
    return customRender;
};
