import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { useToken } from "../../hooks/useToken";

const DEFAULT_PROGRESS = 0.618033; // Golden angle / ratio, if anyone is interested...

export const useAnimatedProgress = (value?: number, invertedDefaltProgress = false,) => {
    const defaultProgress = invertedDefaltProgress ? (1 - DEFAULT_PROGRESS) : DEFAULT_PROGRESS;
    const token = useToken();
    const progressValue = useRef(new Animated.Value(value ?? defaultProgress)).current;

    const setProgressAnimation = (val: number) => Animated.timing(progressValue, {
        toValue: val,
        duration: token.timing.animation.normal,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease)
    });

    useEffect(() => {
        if (value === undefined) {
            setProgressAnimation(defaultProgress).start(() =>
                setProgressAnimation(defaultProgress).stop()
            );
        }
        else {
            setProgressAnimation(value).start();
        }
    }, [value]);

    return progressValue;
}