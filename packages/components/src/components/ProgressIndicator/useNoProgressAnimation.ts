import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useToken } from "../../hooks/useToken";

export const useNoProgressAnimation = (value?: number) => {
    const loopValue = useRef(new Animated.Value(value ?? 0)).current;
    const token = useToken();

    const endlessAnimation = Animated.loop(Animated.timing(loopValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
    }));

    const resetAnimation = Animated.timing(loopValue, {
        toValue: 0,
        duration: token.timing.animation.normal,
        useNativeDriver: true,
    });

    useEffect(() => {
        if (value !== undefined) {
            resetAnimation.start(() =>
                endlessAnimation.stop()
            );
        }
        else {
            endlessAnimation.start();
        }
    }, [value]);

    return loopValue;
}