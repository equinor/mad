import React, { forwardRef, useRef } from "react";
import {
    Animated,
    Pressable,
    PressableProps,
    View,
    ViewStyle,
    StyleSheet,
    GestureResponderEvent,
} from "react-native";
import { useToken } from "../../hooks/useToken";
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
} & PressableProps;

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
        const theme = useToken();
        const fadeAnim = useRef(new Animated.Value(0)).current;

        const handlePressIn = (event: GestureResponderEvent) => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 0,
                useNativeDriver: true,
            }).start();
            rest.onPressIn?.(event);
        };

        const handlePressOut = (event: GestureResponderEvent) => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: theme.timing.animation.normal,
                useNativeDriver: true,
            }).start();
            rest.onPressOut?.(event);
        };

        const PressableComponent = disabled ? DisabledPressable : Pressable;

        return (
            <PressableComponent
                {...rest}
                ref={ref}
                style={style}
                onPressIn={event => !disabled && handlePressIn(event)}
                onPressOut={event => !disabled && handlePressOut(event)}
                onPress={event => !disabled && !!onPress && onPress(event)}
            >
                <Animated.View
                    style={[
                        styles.overlay,
                        {
                            backgroundColor: theme.colors.interactive.pressedOverlay,
                            opacity: fadeAnim,
                        },
                    ]}
                />
                {children}
            </PressableComponent>
        );
    },
);

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
});

PressableHighlight.displayName = "PressableHighlight";
