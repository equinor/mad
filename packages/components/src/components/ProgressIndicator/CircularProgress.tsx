import Svg, { Circle } from "react-native-svg";
import { ProgressIndicatorProps } from "./types";
import { Animated, Easing } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { useEffect, useRef } from "react";
import { useToken } from "../../hooks/useToken";

type CircularProgressProps = {
    size?: number;
    color?: "neutral" | "primary"
} & ProgressIndicatorProps;

const RELATIVE_SIZE_VALUE = 12;
const DEFAULT_PROGRESS = 0.618033; // Golden angle / ratio, if anyone is interested...
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircularProgress = ({
    color,
    value,
    size = 100,
}: CircularProgressProps) => {
    const strokeWidth = 1.0;
    const radius = (RELATIVE_SIZE_VALUE - strokeWidth) / 2;
    const circumference = Math.PI * 2 * radius;
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
            duration: 2000,
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

    const dashOffset = Animated.multiply(theta, radius);

    useEffect(() => {
        if (value === undefined) {
            rotationAnimation.start();
        } else {
            rotationAnimation.stop();
            setProgressAnimation(value ?? DEFAULT_PROGRESS).start();
        }
    }, [value]);

    return (
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
                    r={radius}
                    stroke={styles.circle.color}
                    strokeWidth={strokeWidth}
                    opacity={styles.circle.opacity}
                />
                <AnimatedCircle
                    cx={RELATIVE_SIZE_VALUE}
                    cy={RELATIVE_SIZE_VALUE}
                    fill="none"
                    r={radius}
                    stroke={styles.circle.color}
                    strokeWidth={strokeWidth}
                    strokeDashoffset={dashOffset}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeLinecap="round"
                />
            </Svg>
        </Animated.View>
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