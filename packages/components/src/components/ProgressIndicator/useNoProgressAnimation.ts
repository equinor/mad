import { useEffect } from "react";
import {
    useSharedValue,
    withTiming,
    withRepeat,
    Easing,
    EasingFunction,
} from "react-native-reanimated";
import { useToken } from "../../hooks/useToken";

/**
 * Easing function that accelerates until halfway, then decelerates.
 * This function provides a smooth transition that starts slowly,
 * accelerates in the middle, and then slows down towards the end.
 *
 * @param t - The current time (usually between 0 and 1).
 * @returns The interpolated value at the given time `t`.
 */
const easeInOutCubic: EasingFunction = t => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

/**
 * Creates a smooth looping animated value.
 * @param value An initial value to start the loop around.
 * @returns An animated value between 0 and 1 representing the current loop progress.
 */
export const useNoProgressAnimation = (value?: number) => {
    const loopValue = useSharedValue<number>(value ?? 0);
    const token = useToken();

    useEffect(() => {
        const animationConfig = {
            duration: 1500,
            easing: easeInOutCubic,
        };
        if (value !== undefined) {
            ("worklet");
            loopValue.value = withTiming(
                0,
                {
                    duration: token.timing.animation.normal,
                    easing: Easing.inOut(Easing.ease),
                },
                () => {
                    loopValue.value = withRepeat(withTiming(1, animationConfig), -1, false);
                },
            );
        } else {
            ("worklet");
            loopValue.value = withRepeat(withTiming(1, animationConfig), -1, false);
        }
    }, [value, token.timing.animation.normal, loopValue]);
    return loopValue;
};
