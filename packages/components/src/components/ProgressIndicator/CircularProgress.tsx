import React, { useEffect } from "react";
import { Circle, Svg } from "react-native-svg";
import { ProgressIndicatorProps } from "./types";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";

import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
    withRepeat,
    Easing,
} from "react-native-reanimated";
import { useToken } from "../../hooks/useToken";
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type CircularProgressProps = {
    /**
     * Diameter of the circle.
     */
    size?: number;
    /**
     * Color theme of the indicator.
     */
    color?: "neutral" | "primary";
} & ProgressIndicatorProps &
    ViewProps;

export const CircularProgress = ({
    size = 100,
    color = "primary",
    value = 0,
    style,
    ...rest
}: CircularProgressProps) => {
    const styles = useStyles(themeStyles, { color });
    const token = useToken();

    const strokeColor = styles.circle.color;
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const progress = useSharedValue(value ?? 0);
    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: circumference * (1 - progress.value),
    }));

    useEffect(() => {
        if (value === undefined) {
            // Indeterminate mode
            progress.value = withRepeat(
                withTiming(1, { duration: token.timing.animation.slow, easing: Easing.linear }),
                -1,
                false,
            );
        } else {
            // Determinate mode
            progress.value = withTiming(value, { duration: token.timing.animation.normal });
        }
    }, [progress, value]);

    return (
        <View style={[{ width: size, height: size }, style]} {...rest}>
            <Svg width={size} height={size}>
                <Circle
                    stroke="#e0e0e0"
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <AnimatedCircle
                    stroke={strokeColor}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    animatedProps={animatedProps}
                    strokeLinecap="round"
                />
            </Svg>
        </View>
    );
};
CircularProgress.displayName = "CircularProgress";

type CircularProgressStyleProps = Pick<CircularProgressProps, "color">;

const themeStyles = EDSStyleSheet.create((theme, props: CircularProgressStyleProps) => {
    const color =
        props.color === "neutral"
            ? theme.colors.container.default
            : theme.colors.interactive.primary;
    return {
        circle: {
            color,
            opacity: props.color === "neutral" ? 0.0 : 0.16,
        },
    };
});
