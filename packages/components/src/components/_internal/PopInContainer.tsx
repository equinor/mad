import React, { PropsWithChildren, useEffect, useRef, forwardRef } from "react";
import { Animated, Easing, ViewProps } from "react-native";
import { useToken } from "../../hooks/useToken";

export const PopInContainer = forwardRef(({
    children,
    ...rest
}: PropsWithChildren & ViewProps, ref) => {
    const token = useToken();
    const scale = useRef<Animated.Value>(new Animated.Value(0)).current;

    const popInAnimation = Animated.timing(scale, {
        toValue: 1,
        useNativeDriver: true,
        duration: token.timing.animation.fast,
    });

    useEffect(() => {
        popInAnimation.start();
        return () => popInAnimation.reset();
    }, []);

    return (
        <Animated.View
            ref={ref}
            {...rest}
            style={[
                {
                    transform: [{ scale }]
                },
                rest.style
            ]}
        >
            {children}
        </Animated.View>
    )
});
PopInContainer.displayName = "PopInContainer"