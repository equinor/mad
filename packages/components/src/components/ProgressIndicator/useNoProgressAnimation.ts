import { useEffect, useRef } from "react";
import { Platform, Animated } from "react-native";

export const useNoProgressAnimation = (value = 0) => {
    const loopValue = useRef(new Animated.Value(value)).current;

    const animate = Animated.timing(loopValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
    });

    const startAnimation = () => {
        animate.start(() => {
            loopValue.setValue(0);
            startAnimation();
        });
    };

    useEffect(() => {
        if (Platform.OS === 'web') {
            startAnimation(); 
        } else {
            Animated.loop(animate).start();
        }
        return () => loopValue.stopAnimation();

    }, [value]);

    return loopValue;
};
