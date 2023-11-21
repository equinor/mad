import React, { forwardRef, useContext } from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Color, EDSStyleSheet } from "../../styling";
import { PressableHighlight } from "../PressableHighlight";
import { Typography } from "../Typography";
import { ButtonGroupContext } from "./ButtonGroup";
import { ToggleButtonContext } from "./ToggleButton";
import { Icon, IconName } from "../Icon";
import { DotProgress } from "../ProgressIndicator";
import { getBackgroundColorForButton } from "../../utils/getBackgroundColorForButton";

export type ButtonSpecificProps = {
    /**
     * Label text of the button.
     */
    title: string;
    /**
     * Callback method invoked when the user presses the button.
     */
    onPress?: () => void;
    /**
     * Color theme of the button.
     */
    color?: "primary" | "secondary" | "danger";
    /**
     * Button variant. This value works with the `color` prop to set the theming of the button.
     */
    variant?: "contained" | "outlined" | "ghost";
    /**
     * Boolean value indicating whether or not the button is in its disabled state.
     */
    disabled?: boolean;
    /**
     * Boolean value indicating whether or not the button should be in its loading state.
     */
    loading?: boolean;
    /**
     * Name of the icon to use with the title.
     */
    iconName?: IconName;
    /**
     * Options for positioning the icon either to the left or to the right of the label text.
     */
    iconPosition?: "leading" | "trailing";
};

export type ButtonProps = ButtonSpecificProps & ViewProps;

export const Button = forwardRef<View, ButtonProps>(
    (
        {
            title,
            color = "primary",
            variant = "contained",
            onPress = () => null,
            disabled = false,
            loading = false,
            iconName,
            iconPosition = "leading",
            ...rest
        },
        ref,
    ) => {
        const toggleData = useContext(ToggleButtonContext);
        const isToggleButton = toggleData && toggleData.valid;
        const groupData = useContext(ButtonGroupContext);

        const styles = useStyles(themeStyles, {
            color,
            variant,
            isToggleButton,
            toggleStatus: isToggleButton ? toggleData.isSelected : false,
            groupData,
            disabled,
        });

        const ButtonContent = () => (
            <>
                {iconName && iconPosition === "leading" && (
                    <Icon name={iconName} color={styles.textStyle.color as Color} />
                )}
                <Typography group="interactive" variant="button" style={styles.textStyle}>
                    {title}
                </Typography>
                {iconName && iconPosition === "trailing" && (
                    <Icon name={iconName} color={styles.textStyle.color as Color} />
                )}
            </>
        );

        return (
            <View ref={ref} style={[styles.colorContainer, rest.style]}>
                <PressableHighlight
                    disabled={disabled}
                    onPress={isToggleButton ? toggleData.toggle : onPress}
                    style={styles.pressableContainer}
                >
                    <View style={styles.labelContainer}>
                        {loading ? (
                            <DotProgress
                                color={
                                    disabled || variant !== "contained" ? "primary" : "neutral"
                                }
                                size={12}
                            />
                        ) : (
                            ButtonContent()
                        )}
                    </View>
                </PressableHighlight>
            </View>
        );
    },
);

Button.displayName = "Button";

type ButtonStyleSheetProps = {
    groupData: { isFirstItem: boolean; isLastItem: boolean };
    isToggleButton: boolean;
    toggleStatus: boolean;
    color: "primary" | "secondary" | "danger";
    variant: "contained" | "outlined" | "ghost";
    disabled: boolean;
};

const themeStyles = EDSStyleSheet.create((theme, props: ButtonStyleSheetProps) => {
    const { color, isToggleButton, toggleStatus, groupData, disabled } = props;
    let { variant } = props;

    variant = isToggleButton ? (toggleStatus ? "contained" : "outlined") : variant;

    const backgroundColor = getBackgroundColorForButton(theme, variant, color, disabled);
    let textColor =
        variant === "contained"
            ? theme.colors.text.primaryInverted
            : theme.colors.interactive[color];
    textColor = disabled ? theme.colors.text.disabled : textColor;

    const leftRadius = !groupData.isFirstItem ? 0 : theme.geometry.border.elementBorderRadius;
    const rightRadius = !groupData.isLastItem ? 0 : theme.geometry.border.elementBorderRadius;
    const outlinedPaddingReduction = variant === "outlined" ? theme.geometry.border.borderWidth : 0;
    const outlinedHeightReduction = outlinedPaddingReduction * 2;
    return {
        colorContainer: {
            backgroundColor,
            borderTopLeftRadius: leftRadius,
            borderBottomLeftRadius: leftRadius,
            borderTopRightRadius: rightRadius,
            borderBottomRightRadius: rightRadius,
            borderColor: disabled ? theme.colors.text.disabled : theme.colors.interactive[color],
            borderWidth: variant === "outlined" ? theme.geometry.border.borderWidth : undefined,
            overflow: "hidden",
        },
        pressableContainer: {
            minHeight: theme.geometry.dimension.button.minHeight - outlinedHeightReduction,
            paddingHorizontal: theme.spacing.button.paddingHorizontal - outlinedPaddingReduction,
            paddingVertical: theme.spacing.button.paddingVertical - outlinedPaddingReduction,
        },
        labelContainer: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: theme.spacing.button.iconGap,
        },
        textStyle: {
            color: textColor,
        },
    };
});
