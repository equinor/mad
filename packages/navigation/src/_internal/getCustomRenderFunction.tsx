import React, { ReactNode } from "react";
import { HeightSender } from "../header-height-context";
import { View } from "react-native";
/**
 * Custom render function that displays a custom sub-header
 * @param originalRender the original render function, found in the descriptor
 * @returns new render function
 */
export const getCustomRenderFunction = (
    originalRender: () => ReactNode,
    CustomSubHeader?: () => ReactNode,
) => {
    const customRender = () => (
        <>
            {CustomSubHeader && <CustomSubHeader />}
            <HeightSender />
            <View style={{ flex: 1 }}>{originalRender()}</View>
        </>
    );
    return customRender;
};
