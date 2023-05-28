import Svg, { Circle } from "react-native-svg";
import { ProgressIndicatorProps } from "./types";
import { Animated, Easing, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { useEffect, useMemo, useRef } from "react";
import { useToken } from "../../hooks/useToken";

export type CircularProgressProps = {
    size?: number;
    color?: "neutral" | "primary"
} & ProgressIndicatorProps;

const RELATIVE_SIZE_VALUE = 12;
const DEFAULT_PROGRESS = 0.618033; // Golden angle / ratio, if anyone is interested...
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const STROKE_WIDTH = 1.0;
const RADIUS = (RELATIVE_SIZE_VALUE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = Math.PI * 2 * RADIUS;

export const CircularProgress = ({
    color,
    value,
    size = 100,
}: CircularProgressProps) => {
    const progressValue = useRef(new Animated.Value(value ?? DEFAULT_PROGRESS)).current;
    const rotationValue = useRef(new Animated.Value(0)).current;


    const token = useToken();
    const styles = useStyles(themeStyles, { color });

    const setProgressAnimation = (val: number) => Animated.timing(progressValue, {
        toValue: val,
        duration: token.timing.animation.normal,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease)
    });

    const rotationAnimation = Animated.loop(
        Animated.timing(rotationValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        })
    );

    const theta = progressValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2 * Math.PI, 0],
        extrapolate: "clamp",
    });

    const phi = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [`${3 / 2 * Math.PI}rad`, `${7 / 2 * Math.PI}rad`]
    });

    const dashOffset = Animated.multiply(theta, RADIUS);

    useEffect(() => {
        if (value === undefined) {
            rotationAnimation.start();
        } else {
            rotationAnimation.stop();
            setProgressAnimation(value ?? DEFAULT_PROGRESS).start();
        }
    }, [value]);

    return (
        <View style={{ width: size, height: size }}>
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
                    viewBox={`${RELATIVE_SIZE_VALUE / 2} ${RELATIVE_SIZE_VALUE / 2} ${RELATIVE_SIZE_VALUE} ${RELATIVE_SIZE_VALUE}`}
                >
                    <Circle
                        cx={RELATIVE_SIZE_VALUE}
                        cy={RELATIVE_SIZE_VALUE}
                        fill="none"
                        r={RADIUS}
                        stroke={styles.circle.color}
                        strokeWidth={STROKE_WIDTH}
                        opacity={styles.circle.opacity}
                    />
                    <AnimatedCircle
                        cx={RELATIVE_SIZE_VALUE}
                        cy={RELATIVE_SIZE_VALUE}
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