import React, { PropsWithChildren, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { MadBaseOptions } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
            headerShown={options.headerShown !== false}

        >
            <View style={{ flex: 1 }}>{originalRender()}</View>
        </WithCustomSubHeader>
    );
    return customRender;
};

type WithCustomSubHeaderProps = PropsWithChildren<{
    CustomSubHeader?: () => ReactNode;
    shouldFloat?: boolean;
    headerShown: boolean
}>;
const WithCustomSubHeader = ({
    CustomSubHeader,
    shouldFloat,
    headerShown,
    children,
}: WithCustomSubHeaderProps) => {

    const { top } = useSafeAreaInsets();
    const paddingTop = headerShown ? 0 : top;

    return (
        <>
            {CustomSubHeader && !shouldFloat && (
                <View style={{ paddingTop }}>
                    <CustomSubHeader />
                </View>
            )}
            {children}
            {CustomSubHeader && shouldFloat && (
                <View style={[styles.floatContainer, { paddingTop }]}>
                    <CustomSubHeader />
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    floatContainer: {
        position: "absolute",
        top: 0,
        width: "100%",
    },
});
