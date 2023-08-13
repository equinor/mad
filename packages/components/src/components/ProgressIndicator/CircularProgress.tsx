import React from "react";
import Svg, { Circle } from "react-native-svg";
import { ProgressIndicatorProps } from "./types";
import { Animated, View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { useAnimatedProgress } from "./useAnimatedProgress";
import { useNoProgressAnimation } from "./useNoProgressAnimation";

export type CircularProgressProps = {
    /**
     * Diameter of the circle.
     */
    size?: number;
    /**
     * Color theme of the indicator.
     */
    color?: "neutral" | "primary"
} & ProgressIndicatorProps & ViewProps;

const RELATIVE_SIZE_VALUE = 12;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const STROKE_WIDTH = 1.0;
const RADIUS = (RELATIVE_SIZE_VALUE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = Math.PI * 2 * RADIUS;

export const CircularProgress = ({
    color,
    value,
    size = 48,
    ...rest
}: CircularProgressProps) => {

    const styles = useStyles(themeStyles, { color });

    const progressValue = useAnimatedProgress(value);
    const rotationValue = useNoProgressAnimation(value);

    const dashOffset = progressValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2 * Math.PI * RADIUS, 0],
        extrapolate: "clamp",
    });

    const phi = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [`${3 / 2 * Math.PI}rad`, `${7 / 2 * Math.PI}rad`]
    });

    return (
        <View {...rest} style={[{ width: size, height: size }, rest.style]}>
            <Animated.View
                style={{
                    transform: [
                        { rotate: phi }
                    ]
                }}
            >
                <Svg
                    width={size}
                    height={size}
                    role="progressbar"
                    viewBox={`0 0 ${RELATIVE_SIZE_VALUE} ${RELATIVE_SIZE_VALUE}`}
                >
                    <Circle
                        cx={RELATIVE_SIZE_VALUE / 2}
                        cy={RELATIVE_SIZE_VALUE / 2}
                        fill="none"
                        r={RADIUS}
                        stroke={styles.circle.color}
                        strokeWidth={STROKE_WIDTH}
                        opacity={styles.circle.opacity}
                    />
                    <AnimatedCircle
                        cx={RELATIVE_SIZE_VALUE / 2}
                        cy={RELATIVE_SIZE_VALUE / 2}
                        fill="none"
                        r={RADIUS}
                        stroke={styles.circle.color}
                        strokeWidth={STROKE_WIDTH}
                        strokeDashoffset={dashOffset}
                        strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
                        strokeLinecap="round"
                    />
                </Svg>
            </Animated.View>
        </View>
    );
}

CircularProgress.displayName = "CircularProgress";

type CircularProgressStyleProps = Pick<CircularProgressProps,
    "color"
>

const themeStyles = EDSStyleSheet.create((theme, props: CircularProgressStyleProps) => {
    const color = props.color === "neutral" ? theme.colors.container.default : theme.colors.interactive.primary;
    return {
        circle: {
            color,
            opacity: props.color === "neutral" ? 0.0 : 0.16,
        }
    }
});