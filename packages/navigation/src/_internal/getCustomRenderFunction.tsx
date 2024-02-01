import React, { PropsWithChildren, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { MadBaseOptions } from "./types";
/**
 * Custom render function that displays a custom sub-header
 * @param originalRender the original render function, found in the descriptor
 * @param options the resolved options for the descriptor
 * @param CustomSubHeader the custom sub header
 * @returns new render function
 */
export const getCustomRenderFunction = <T extends MadBaseOptions>(
    originalRender: () => ReactNode,
    options: T,
    CustomSubHeader?: () => ReactNode,
) => {
    const customRender = () => (
        <WithCustomSubHeader
            CustomSubHeader={CustomSubHeader}
            shouldFloat={options.customSubHeaderFloat}
        >
            <View style={{ flex: 1 }}>{originalRender()}</View>
        </WithCustomSubHeader>
    );
    return customRender;
};

type WithCustomSubHeaderProps = PropsWithChildren<{
    CustomSubHeader?: () => ReactNode;
    shouldFloat?: boolean;
}>;
const WithCustomSubHeader = ({
    CustomSubHeader,
    shouldFloat,
    children,
}: WithCustomSubHeaderProps) => (
    <>
        {CustomSubHeader && !shouldFloat && <CustomSubHeader />}
        {children}
        {CustomSubHeader && shouldFloat && (
            <View style={styles.floatContainer}>
                <CustomSubHeader />
            </View>
        )}
    </>
);

const styles = StyleSheet.create({
    floatContainer: {
        position: "absolute",
        top: 0,
        width: "100%",
    },
});
