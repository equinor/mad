import React, { forwardRef } from "react";
import { Pressable, PressableProps, StyleSheet, View, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { useFadeAnimation } from "../../styling/animations";
import { DisabledPressable } from "./DisabledPressable";

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
} & Omit<PressableProps, "children">;

export const PressableHighlight = forwardRef<
    View,
    React.PropsWithChildren<PressableHightlightProps>
>(
    (
        {
            style,
            children,
            disabled,
            onPress,

            ...rest
        }: React.PropsWithChildren<PressableHightlightProps>,
        ref,
    ) => {
        const { handlePressIn, handlePressOut, animatedStyle } = useFadeAnimation();
        const tap = Gesture.Tap();

        const PressableComponent = disabled ? DisabledPressable : Pressable;

        return (
            <GestureDetector gesture={tap}>
                <PressableComponent
                    {...rest}
                    ref={ref}
                    style={style}
                    onPressIn={event => !disabled && (handlePressIn(), rest.onPressIn?.(event))}
                    onPressOut={event => !disabled && (handlePressOut(), rest.onPressOut?.(event))}
                    onPress={event => !disabled && !!onPress && onPress(event)}
                    disabled={disabled}
                >
                    <Animated.View style={[animatedStyle, styles.overlay]} />
                    {children}
                </PressableComponent>
            </GestureDetector>
        );
    },
);

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
});

PressableHighlight.displayName = "PressableHighlight";
