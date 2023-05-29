import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { useToken } from "../../hooks/useToken";

const DEFAULT_PROGRESS = 0.618033; // Golden angle / ratio, if anyone is interested...

export const useAnimatedProgress = (value?: number) => {
    const token = useToken();
    const progressValue = useRef(new Animated.Value(value ?? DEFAULT_PROGRESS)).current;

    const setProgressAnimation = (val: number) => Animated.timing(progressValue, {
        toValue: val,
        duration: token.timing.animation.normal,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease)
    });

    useEffect(() => {
        if (value === undefined) {
            setProgressAnimation(DEFAULT_PROGRESS).start(() =>
                setProgressAnimation(DEFAULT_PROGRESS).stop()
            );
        }
        else {
            setProgressAnimation(value).start();
        }
    }, [value]);

    return progressValue;
}