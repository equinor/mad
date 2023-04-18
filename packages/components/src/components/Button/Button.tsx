import { View, ViewProps } from "react-native";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { PressableHighlight } from "../PressableHighlight";
import React from "react";

export type ButtonProps = {
    title: string;
    onPress?: () => void,
    color?: "primary" | "secondary" | "danger";
    variant?: "contained" | "outlined" | "icon"
};

export const Button = React.forwardRef<View, ButtonProps & ViewProps>(({
    title,
    color = "primary",
    variant = "contained",
    onPress = () => null,
    ...rest
}, ref) => {
    const styles = useStyles(themeStyles, { color, variant });

    return (
        <View ref={ref} style={[styles.colorContainer, rest.style]}>
            <PressableHighlight
                onPress={onPress}
                style={styles.pressableContainer}
            >
                <Typography group="navigation" variant="button" style={styles.textStyle}>{title}</Typography>
            </PressableHighlight>
        </View>
    );
});

Button.displayName = "Button";

const themeStyles = EDSStyleSheet.create((theme, props: Pick<ButtonProps, "variant" | "color">) => {
    const {
        color: color = "primary",
        variant: variant = "contained"
    } = props;

    const backgroundColor = variant === "contained" ? theme.colors.interactive[color] : "transparent";
    const textColor = variant === "contained" ? theme.colors.text.primaryInverted : theme.colors.interactive[color];

    return {
        colorContainer: {
            backgroundColor,
            borderRadius: theme.geometry.border.elementBorderRadius,
            borderColor: theme.colors.interactive[color],
            borderWidth: theme.geometry.border.borderWidth,
            overflow: "hidden"
        },
        pressableContainer: {
            paddingHorizontal: theme.spacing.paddingHorizontal,
            minWidth: theme.geometry.dimension.button.minWidth,
            minHeight: theme.geometry.dimension.button.minHeight,
            justifyContent: "center",
            alignItems: "center",
        },
        textStyle: {
            color: textColor,
        }
    };
});
