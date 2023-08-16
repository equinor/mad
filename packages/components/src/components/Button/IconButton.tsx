import React from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Color, EDSStyleSheet } from "../../styling";
import { PressableHighlight } from "../PressableHighlight";
import { Icon, IconName } from "../Icon";

export type IconButtonProps = {
    /**
     * Name of the icon.
     */
    name: IconName
    /**
     * Callback method invoked when the user presses outside the child content.
     */
    onPress?: () => void;
    /**
     * Color theme of the icon button.
     */
    color?: "primary" | "secondary" | "danger";
    /**
     * Button variant. This value works with the `color` prop to set the theming of the button.
     */
    variant?: "contained" | "outlined" | "ghost";
    /**
     * Boolean value indicating whether or not the button should be in its disabled state.
     */
    disabled?: boolean;
};

export const IconButton = React.forwardRef<View, IconButtonProps & ViewProps>(
    (
        {
            name,
            color = "primary",
            variant = "contained",
            onPress = () => null,
            disabled = false,
            ...rest
        },
        ref
    ) => {

        const styles = useStyles(themeStyles, {
            color,
            variant,
            disabled,
        });

        return (
            <View>
                <View ref={ref} style={[styles.colorContainer, rest.style]}>
                    <PressableHighlight
                        disabled={disabled}
                        onPress={onPress}
                        style={styles.pressableContainer}
                    >
                        <Icon name={name} color={styles.textStyle.color as Color} />
                    </PressableHighlight>
                </View>
            </View>
        );
    }
);

IconButton.displayName = "Button.Icon";

type IconButtonStyleSheetProps = {
    color: "primary" | "secondary" | "danger",
    variant: "contained" | "outlined" | "ghost",
    disabled: boolean,
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: IconButtonStyleSheetProps) => {
        const {
            color,
            disabled,
            variant
        } = props;

        let backgroundColor = theme.colors.interactive[color];
        let textColor =
            variant === "contained"
                ? theme.colors.text.primaryInverted
                : theme.colors.interactive[color];

        backgroundColor = disabled ? theme.colors.interactive.disabled : backgroundColor;
        backgroundColor = variant !== "contained" ? "transparent" : backgroundColor;
        textColor = disabled ? theme.colors.text.disabled : textColor;

        return {
            colorContainer: {
                backgroundColor,
                borderRadius: theme.geometry.dimension.button.minHeight / 2,
                borderColor: disabled ? theme.colors.text.disabled : theme.colors.interactive[color],
                borderWidth: variant === "outlined" ? theme.geometry.border.borderWidth : undefined,
                overflow: "hidden",
            },
            pressableContainer: {
                justifyContent: "center",
                alignItems: "center",
                width: theme.geometry.dimension.button.minHeight,
                height: theme.geometry.dimension.button.minHeight,
            },
            textStyle: {
                color: textColor,
            },
        };
    }
);
