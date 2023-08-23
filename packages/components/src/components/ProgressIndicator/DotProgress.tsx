import React, { useEffect, useRef } from "react";
import { Animated, Easing, View, ViewProps } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Circle, Svg } from "react-native-svg";
import { useToken } from "../../hooks/useToken";

export type DotProgressProps = {
    /**
     * Height of the indicator. The width is calculated automatically based on this value.
     */
    size?: number;
    /**
     * Color theme of the indicator.
     */
    color?: "neutral" | "primary";
} & ViewProps;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const DotProgress = ({ color, size: optionalSize, ...rest }: DotProgressProps) => {
    const styles = useStyles(themeStyles, { color });
    const token = useToken();

    const height = optionalSize ?? token.geometry.dimension.icon.size;
    const width = height * 4;

    const bumpValue1 = useRef(new Animated.Value(0)).current;
    const bumpValue2 = useRef(new Animated.Value(0)).current;
    const bumpValue3 = useRef(new Animated.Value(0)).current;

    const bumpAnimation = (val: Animated.Value) =>
        Animated.timing(val, {
            toValue: 1,
            duration: 300,
            easing: Easing.elastic(1),
            useNativeDriver: true,
        });

    const swipeAnimation = Animated.loop(
        Animated.sequence([
            bumpAnimation(bumpValue1),
            bumpAnimation(bumpValue2),
            bumpAnimation(bumpValue3),
        ]),
    );

    const opacity = (val: Animated.Value) =>
        val.interpolate({
            inputRange: [0, 0.25, 0.5, 0.75, 1],
            outputRange: [0.16, 1, 1, 1, 0.16],
            extrapolateRight: "clamp",
        });
    const radius = (val: Animated.Value) =>
        val.interpolate({
            inputRange: [0, 0.25, 0.5, 0.75, 1],
            outputRange: [
                (height / 2) * 0.8,
                (height / 2) * 1.0,
                (height / 2) * 1.0,
                (height / 2) * 1.0,
                (height / 2) * 0.8,
            ],
        });

    useEffect(() => {
        swipeAnimation.start();
    }, [swipeAnimation]);
    return (
        <View {...rest} style={[{ width, height }, rest.style]}>
            <Svg height={height} width={width}>
                <AnimatedCircle
                    cx={height / 2}
                    cy="50%"
                    r={radius(bumpValue1)}
                    opacity={opacity(bumpValue1)}
                    fill={styles.circle.color}
                />
                <AnimatedCircle
                    cx="50%"
                    cy="50%"
                    r={radius(bumpValue2)}
                    opacity={opacity(bumpValue2)}
                    fill={styles.circle.color}
                />
                <AnimatedCircle
                    cx={width - height / 2}
                    cy="50%"
                    r={radius(bumpValue3)}
                    opacity={opacity(bumpValue3)}
                    fill={styles.circle.color}
                    stroke="none"
                />
            </Svg>
        </View>
    );
};

DotProgress.displayName = "DotProgress";

type CircularProgressStyleProps = Pick<DotProgressProps, "color">;

const themeStyles = EDSStyleSheet.create((theme, props: CircularProgressStyleProps) => {
    const color =
        props.color === "neutral"
            ? theme.colors.container.default
            : theme.colors.interactive.primary;
    return {
        circle: {
            color,
        },
    };
});
