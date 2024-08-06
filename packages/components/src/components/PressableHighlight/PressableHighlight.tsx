import React, { forwardRef, useRef } from "react";
import { Platform, Pressable, StyleSheet, View, ViewStyle } from "react-native";
import {
    Gesture,
    GestureDetector,
    TouchableWithoutFeedbackProps,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { useFadeAnimation } from "../../styling/animations";
import { DisabledPressable } from "./DisabledPressable";

export type PressableHighlightProps = {
    /**
     * Whether or not the pressable surface should be disabled or not.
     */
    disabled?: boolean;
    /**
     * The style to apply to this component.
     * Any stylings based on the state of the press is applied on top of this.
     */
    style?: ViewStyle;
} & Omit<TouchableWithoutFeedbackProps, "children">;

export const PressableHighlight = forwardRef<
    View,
    React.PropsWithChildren<PressableHighlightProps>
>(
    (
        {
            style,
            children,
            disabled,
            onPress,
            ...rest
        }: React.PropsWithChildren<PressableHighlightProps>,
        ref,
    ) => {
        const { handlePressIn, handlePressOut, animatedStyle } = useFadeAnimation();
        const isPanning = useRef(false);

        const tap = Gesture.Tap()
            .onBegin(() => {
                isPanning.current = false;
            })
            .onEnd(success => {
                if (success && !isPanning.current) onPress?.();
            });

        const longPress = Gesture.LongPress()
            .onBegin(() => {
                isPanning.current = false;
            })
            .onEnd(success => {
                if (success && !isPanning.current) onPress?.();
            });

        const pan = Gesture.Pan()
            .onBegin(() => {
                isPanning.current = true;
            })
            .onFinalize(() => {
                isPanning.current = false;
            });

        const gesture =
            Platform.OS === "web"
                ? Gesture.Simultaneous(pan, Gesture.Exclusive(tap, longPress))
                : Gesture.Tap();

        const PressableComponent = disabled ? DisabledPressable : Pressable;

        return (
            <GestureDetector gesture={gesture}>
                {Platform.OS === "web" ? (
                    <PressableComponent
                        {...rest}
                        ref={ref}
                        style={style}
                        onPressIn={() => !disabled && (handlePressIn(), rest.onPressIn?.())}
                        onPressOut={() => !disabled && (handlePressOut(), rest.onPressOut?.())}
                        disabled={disabled}
                    >
                        <Animated.View style={[animatedStyle, styles.overlay]} />
                        {children}
                    </PressableComponent>
                ) : (
                    <PressableComponent
                        {...rest}
                        ref={ref}
                        style={style}
                        onPressIn={() => !disabled && (handlePressIn(), rest.onPressIn?.())}
                        onPressOut={() => !disabled && (handlePressOut(), rest.onPressOut?.())}
                        onPress={() => !disabled && !!onPress && onPress()}
                        disabled={disabled}
                    >
                        <Animated.View style={[animatedStyle, styles.overlay]} />
                        {children}
                    </PressableComponent>
                )}
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
