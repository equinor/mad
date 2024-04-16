import React from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Color, EDSStyleSheet } from "../../styling";

export type ProgressStatusLineProps = {
    color: Color | undefined;
};

export const ProgressStatusLine = ({ color }: ProgressStatusLineProps) => {
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
