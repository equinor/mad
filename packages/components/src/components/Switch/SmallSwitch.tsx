import React, { forwardRef, useEffect, useRef } from "react";
import { View, ViewProps, Animated, Easing } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { PressableHighlight } from "../PressableHighlight";
import { useToken } from "../../hooks/useToken";

export type SmallSwitchProps = {
    onChange?: (isActive: boolean) => void;
    color?: "primary" | "secondary" | "danger";
    active?: boolean;
    disabled?: boolean;
};

const KNOB_SIZE = 10;
const WIDTH = 25;
const HEIGHT = 10;

export const SmallSwitch = forwardRef<View, SmallSwitchProps & ViewProps>(
    (
        { color = "primary", onChange = () => null, active = false, disabled = false, ...rest },
        ref,
    ) => {
        const styles = useStyles(themeStyles, {
            color,
            disabled,
            isActive: active,
        });

        const token = useToken();

        const knobProgressValue = useRef(
            new Animated.Value(active ? WIDTH - KNOB_SIZE : 0),
        ).current;

        const activeKnobAnimation = Animated.timing(knobProgressValue, {
            toValue: 1,
            duration: token.timing.animation.slow,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
        });

        const inactiveKnobAnimation = Animated.timing(knobProgressValue, {
            toValue: 0,
            duration: token.timing.animation.slow,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
        });

        const displacement = knobProgressValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, WIDTH - KNOB_SIZE],
            extrapolate: "clamp",
        });

        useEffect(() => {
            if (active) {
                activeKnobAnimation.start();
            } else {
                inactiveKnobAnimation.start();
            }
        }, [active]);

        const handlePress = () => {
            const newState = !active;
            onChange(newState);
        };

        return (
            <PressableHighlight
                disabled={disabled}
                onPress={handlePress}
                style={styles.pressableContainer}
            >
                <View ref={ref} style={[styles.toggleContainer, rest.style]}>
                    <View style={styles.statusBackground}></View>
                    <Animated.View
                        style={{ position: "absolute", transform: [{ translateX: displacement }] }}
                    >
                        <View style={styles.knob} />
                    </Animated.View>
                </View>
            </PressableHighlight>
        );
    },
);

SmallSwitch.displayName = "Switch.Small";

type SmallSwitchStyleSheetProps = {
    isActive: boolean;
    color: "primary" | "secondary" | "danger";
    disabled: boolean;
};

const themeStyles = EDSStyleSheet.create((theme, props: SmallSwitchStyleSheetProps) => {
    const { color, disabled, isActive } = props;

    const activeBackgroundColor = theme.colors.interactive[color];
    const inactiveBackgroundColor = theme.colors.interactive.disabled;

    const knobColor = theme.colors.text.tertiary;
    const disabledKnobColor = theme.colors.text.disabled;

    return {
        toggleContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        pressableContainer: {
            height: HEIGHT + (WIDTH - HEIGHT),
            width: WIDTH,
            padding: 20,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        },
        statusBackground: {
            width: WIDTH,
            height: HEIGHT,
            borderRadius: HEIGHT / 2,
            backgroundColor: disabled
                ? theme.colors.interactive.disabled
                : theme.colors.interactive.pressedOverlay,
        },
        knob: {
            width: KNOB_SIZE,
            height: KNOB_SIZE,
            borderRadius: KNOB_SIZE / 2,
            backgroundColor: disabled
                ? disabledKnobColor
                : isActive
                ? activeBackgroundColor
                : knobColor,
        },
    };
});
