import {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    interpolateColor,
} from "react-native-reanimated";
import { useToken } from "../hooks/useToken";

export const useFadeAnimation = () => {
    const token = useToken();
    const fadeAnimation = useSharedValue(0);

    const handlePressIn = () => {
        fadeAnimation.value = withTiming(1, {
            duration: token.timing.animation.fast,
        });
    };

    const handlePressOut = () => {
        fadeAnimation.value = withTiming(0, {
            duration: token.timing.animation.normal,
        });
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                fadeAnimation.value,
                [0, 1],
                ["transparent", token.colors.interactive.pressedOverlay],
            ),
        };
    });

    return {
        handlePressIn,
        handlePressOut,
        animatedStyle,
    };
};
