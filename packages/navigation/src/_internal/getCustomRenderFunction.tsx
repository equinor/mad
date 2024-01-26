import React, { ReactNode } from "react";
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
            <View style={{ flex: 1 }}>{originalRender()}</View>
        </>
    );
    return customRender;
};
