import React, { ReactNode } from "react";
import { EnvironmentBanner } from "@equinor/mad-components";
import { HeightSender } from "../header-height-context";
import { View } from "react-native";
/**
 * Custom render function that displays an environment banner
 * @param originalRender the original render function, found in the descriptor
 * @returns new render function
 */
export const getCustomRenderFunction = (originalRender: () => ReactNode) => (
    <>
        <EnvironmentBanner />
        <HeightSender />
        <View style={{ flex: 1 }}>{originalRender()}</View>
    </>
);
