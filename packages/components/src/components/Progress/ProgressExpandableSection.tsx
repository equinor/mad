import React, { ReactNode, useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import Animated, {
    Easing,
    ReduceMotion,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { useToken } from "../../hooks/useToken";

type ProgressExpandableSectionProps = {
    children: ReactNode;
    expanded: boolean;
};

export const ProgressExpandableSection = ({
    children,
    expanded,
}: ProgressExpandableSectionProps) => {
    const [height, setHeight] = useState(0);
    const animatedHeight = useSharedValue(0);
    const token = useToken();

    const onLayout = (event: LayoutChangeEvent) => {
        const onLayoutHeight = event.nativeEvent.layout.height;

        if (onLayoutHeight > 0 && height !== onLayoutHeight) {
            setHeight(onLayoutHeight);
        }
    };

    const animatedStyle = useAnimatedStyle(() => {
        const opacity = withTiming(expanded ? 1 : 0, {
            duration: token.timing.animation.slow,
        });
        animatedHeight.value = expanded
            ? withTiming(height, {
                  duration: token.timing.animation.slow,
                  easing: Easing.inOut(Easing.quad),
                  reduceMotion: ReduceMotion.System,
              })
            : withTiming(0, {
                  duration: token.timing.animation.slow,
                  easing: Easing.inOut(Easing.quad),
                  reduceMotion: ReduceMotion.System,
              });

        return {
            height: animatedHeight.value,
            opacity,
        };
    }, [expanded, height]);

    return (
        <Animated.View style={[animatedStyle, { overflow: "hidden" }]}>
            <View style={{ position: "absolute" }} onLayout={onLayout}>
                {children}
            </View>
        </Animated.View>
    );
};
