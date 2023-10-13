import { EDSStyleSheet, useStyles } from "@equinor/mad-components";
import React from "react";
import { View } from "react-native";

type CircleProps = {
    diameter?: number;
    color?: string;
    showBorder?: boolean;
};

export const Circle = ({ diameter, color, showBorder }: CircleProps) => {
    const styles = useStyles(themeStyles, { diameter, color, showBorder });
    return <View style={styles.circle} />;
};

const themeStyles = EDSStyleSheet.create((theme, props: CircleProps) => {
    const diameter = props.diameter ?? 20;
    const color = props.color ?? theme.colors.interactive.primary;
    return {
        circle: {
            backgroundColor: color,
            width: diameter,
            height: diameter,
            borderRadius: diameter / 2,
            borderColor: theme.colors.border.medium,
            borderWidth: props.showBorder ? theme.geometry.border.borderWidth : undefined,
        },
    };
});
