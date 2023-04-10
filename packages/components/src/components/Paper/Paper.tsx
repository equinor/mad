import { View, ViewProps } from "react-native";
import { ElevationType, paperToken } from "./Paper.tokens";

import { useDynamicStyle } from "../../hooks/useDynamicStyle";
import { elevationShadowStyleMap } from "../../translations/boxShadow";
import React from "react";

export type PaperProps = {
    elevation: ElevationType;
};

export const Paper = React.forwardRef<
    View,
    React.PropsWithChildren<PaperProps & ViewProps>
>(({ elevation = "none", children, ...rest }, ref) => {
    const shadowStyle = useDynamicStyle(() => {
        return elevationShadowStyleMap[elevation];
    }, [elevation]);
    return (
        <View
            ref={ref}
            {...rest}
            style={[
                shadowStyle,
                { backgroundColor: paperToken.background },
                rest.style,
            ]}
        >
            {children}
        </View>
    );
});

Paper.displayName = "Paper";
