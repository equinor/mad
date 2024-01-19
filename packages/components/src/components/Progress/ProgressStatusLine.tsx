import React from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Color, EDSStyleSheet } from "../../styling";

type StatusLineProps = {
    color: Color | undefined;
};

export const ProgressStatusLine = ({ color }: StatusLineProps) => {
    const styles = useStyles(themeStyles);
    return <View style={[styles.verticalLine, { backgroundColor: color }]} />;
};

const themeStyles = EDSStyleSheet.create(theme => ({
    verticalLine: {
        flex: 1,
        alignSelf: "center",
        width: theme.geometry.border.borderWidth,
    },
}));
