import { View, ViewProps } from "react-native";
import React from "react";
import { EDSStyleSheet, Elevation } from "../../styling";
import { useStyles } from "../../hooks/useStyles";

export type PaperProps = {
    elevation: Elevation;
};

export const Paper = React.forwardRef<
    View,
    React.PropsWithChildren<PaperProps & ViewProps>
>(({ elevation = "none", children, ...rest }, ref) => {
    const style = useStyles(themeStyles, elevation);
    return (
        <View ref={ref} {...rest} style={[style.container, rest.style]}>
            {children}
        </View>
    );
});

Paper.displayName = "Paper";

const themeStyles = EDSStyleSheet.create((theme, elevation: Elevation) => ({
    container: {
        backgroundColor: theme.colors.container.elevation[elevation],
        ...theme.geometry.shadow[elevation],
    },
}));
