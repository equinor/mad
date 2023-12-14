import { StyleSheet, View } from "react-native";
import { PressableHighlight, PressableHightlightProps } from "@equinor/mad-components";
import React, { ReactNode, forwardRef } from "react";

type EDSControlPanelButtonProps = { children?: ReactNode } & PressableHightlightProps;

export const EDSControlPanelButton = forwardRef<View, EDSControlPanelButtonProps>(
    ({ children, ...rest }, ref) => {
        return (
            <PressableHighlight ref={ref} {...rest} style={styles.container}>
                {children}
            </PressableHighlight>
        );
    },
);

EDSControlPanelButton.displayName = "EDSControlPanelButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
