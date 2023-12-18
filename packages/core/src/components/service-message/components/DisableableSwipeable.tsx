import React from "react";
import { View, ViewProps } from "react-native";
import { Swipeable, SwipeableProps } from "react-native-gesture-handler";

type DisableableSwipeableProps = SwipeableProps & { disabled?: boolean };
export const DisableableSwipeable = ({ disabled, ...rest }: DisableableSwipeableProps) => {
    if (disabled) {
        return <View {...(rest as ViewProps)} />;
    }
    return <Swipeable {...rest} />;
};
