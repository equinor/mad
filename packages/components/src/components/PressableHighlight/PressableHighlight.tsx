import React, { forwardRef } from "react";
import { Pressable, PressableProps, StyleSheet, View, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { useFadeAnimation } from "../../styling/animations";

export type PressableHightlightProps = {
    /**
     * Whether or not the pressable surface should be disabled or not.
     */
    disabled?: boolean;
    /**
     * The style to apply to this component.
     * Any stylings based on the state of the press is applied on top of this.
     */
    style?: ViewStyle;
    /**
     * Callback function to handle press event.
     */
} & Omit<PressableProps, "children">;

export const PressableHighlight = forwardRef<
    View,
    React.PropsWithChildren<PressableHightlightProps>
>(({ style, children, disabled, onPress, ...rest }, ref) => {
    const { handlePressIn, handlePressOut, animatedStyle } = useFadeAnimation();

    return (
        <Pressable
            {...rest}
            style={style}
            onPressIn={disabled ? undefined : handlePressIn}
            onPressOut={disabled ? undefined : handlePressOut}
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
            ref={ref}
        >
            <Animated.View style={[animatedStyle, styles.overlay]} />
            {children}
        </Pressable>
    );
});

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
});

PressableHighlight.displayName = "PressableHighlight";
