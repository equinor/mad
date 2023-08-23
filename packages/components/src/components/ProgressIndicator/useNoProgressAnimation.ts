import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useToken } from "../../hooks/useToken";

/**
 * Creates a smooth looping animated value.
 * @param value An initial value to start the loop around.
 * @returns An animated value between 0 and 1 representing the current loop progress.
 */
export const useNoProgressAnimation = (value?: number) => {
    const loopValue = useRef(new Animated.Value(value ?? 0)).current;
    const token = useToken();

    const endlessAnimation = Animated.loop(
        Animated.timing(loopValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }),
    );

    const resetAnimation = Animated.timing(loopValue, {
        toValue: 0,
        duration: token.timing.animation.normal,
        useNativeDriver: true,
    });

    useEffect(() => {
        if (value !== undefined) {
            resetAnimation.start(() => endlessAnimation.stop());
        } else {
            endlessAnimation.start();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return loopValue;
};
