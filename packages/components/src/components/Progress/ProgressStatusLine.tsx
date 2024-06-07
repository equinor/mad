import React, { useEffect } from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Color, EDSStyleSheet } from "../../styling";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useToken } from "../../hooks/useToken";

export type ProgressStatusLineProps = {
    color: Color | undefined;
    progress: number;
};

export const ProgressStatusLine = ({ color, progress }: ProgressStatusLineProps) => {
    const token = useToken();
    const styles = useStyles(themeStyles);
    const animatedProgress = useSharedValue(0);

    useEffect(() => {
        animatedProgress.value = withTiming(progress, { duration: token.timing.animation.slow });
    }, [progress]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: `${animatedProgress.value * 100}%`,
            backgroundColor: color,
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.fill, animatedStyle]} />
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        flex: 1,
        alignSelf: "center",
        backgroundColor: theme.colors.text.disabled,
        width: theme.geometry.border.borderWidth,
    },
    fill: {
        height: "100%",
    },
}));
