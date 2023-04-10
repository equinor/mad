import { tokens } from "@equinor/eds-tokens";
import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import { convertToUnitlessNumber } from "../../translations/units";
import { Typography } from "../Typography";
import { forwardRef, Children } from "react";

export type ButtonProps = {
    onPress?: () => void;
};

export const Button = forwardRef<View, ButtonProps & ViewProps>(
    (props: ButtonProps & ViewProps, ref) => {
        const children = Children.toArray(props.children);
        return (
            <View style={props.style} ref={ref} collapsable={false}>
                <Pressable
                    style={({ pressed }) => {
                        return pressed
                            ? styles.containerPressed
                            : styles.containerResting;
                    }}
                    onPress={props.onPress}
                >
                    {children.map((child) => {
                        if (typeof child === "string")
                            return (
                                <Typography
                                    group="navigation"
                                    variant="button"
                                    color="white"
                                >
                                    {child}
                                </Typography>
                            );
                        return child;
                    })}
                </Pressable>
            </View>
        );
    }
);

Button.displayName = "Button";

const styles = StyleSheet.create({
    containerResting: {
        backgroundColor: tokens.colors.interactive.primary__resting.rgba,
        borderRadius: convertToUnitlessNumber(tokens.shape.button.borderRadius),
        padding: convertToUnitlessNumber(
            tokens.spacings.comfortable.medium_small
        ),
        alignItems: "center",
    },
    containerPressed: {
        backgroundColor: tokens.colors.interactive.pressed_overlay_dark.rgba,
        borderRadius: convertToUnitlessNumber(tokens.shape.button.borderRadius),
        padding: convertToUnitlessNumber(
            tokens.spacings.comfortable.medium_small
        ),
        alignItems: "center",
    },
});
