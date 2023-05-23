import React, { useContext } from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Color, EDSStyleSheet } from "../../styling";
import { PressableHighlight } from "../PressableHighlight";
import { Typography } from "../Typography";
import { ButtonGroupContext } from "./ButtonGroup";
import { ToggleButtonContext } from "./ToggleButton";
import { Icon, IconName } from "../Icon";

export type ButtonProps = {
    title: string;
    onPress?: () => void;
    color?: "primary" | "secondary" | "danger";
    variant?: "contained" | "outlined" | "ghost";
    disabled?: boolean;
    iconName?: IconName;
    iconPosition?: "leading" | "trailing";
};

export const Button = React.forwardRef<View, ButtonProps & ViewProps>(
    (
        {
            title,
            color = "primary",
            variant = "contained",
            onPress = () => null,
            disabled = false,
            iconName,
            iconPosition = "leading",
            ...rest
        },
        ref
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

        return (
            <View>
                <View ref={ref} style={[styles.colorContainer, rest.style]}>
                    <PressableHighlight
                        disabled={disabled}
                        onPress={isToggleButton ? toggleData.toggle : onPress}
                        style={styles.pressableContainer}
                    >
                        {iconName && (iconPosition === "leading") &&
                            <Icon name={iconName} color={styles.textStyle.color as Color} />
                        }
                        <Typography
                            group="interactive"
                            variant="button"
                            style={styles.textStyle}
                        >
                            {title}
                        </Typography>
                        {iconName && (iconPosition === "trailing") &&
                            <Icon name={iconName} color={styles.textStyle.color as Color} />
                        }
                    </PressableHighlight>
                </View>
            </View>
        );
    }
);

Button.displayName = "Button";

type ButtonStyleSheetProps = {
    groupData: { isFirstItem: boolean, isLastItem: boolean }
    isToggleButton: boolean,
    toggleStatus: boolean,
    color: "primary" | "secondary" | "danger",
    variant: "contained" | "outlined" | "ghost",
    disabled: boolean,
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: ButtonStyleSheetProps) => {
        const {
            color,
            isToggleButton,
            toggleStatus,
            groupData,
            disabled
        } = props;
        let { variant } = props;

        variant = isToggleButton ? toggleStatus ? "contained" : "outlined" : variant;

        let backgroundColor = theme.colors.interactive[color];
        let textColor =
            variant === "contained"
                ? theme.colors.text.primaryInverted
                : theme.colors.interactive[color];

        backgroundColor = disabled ? theme.colors.interactive.disabled : backgroundColor;
        backgroundColor = variant !== "contained" ? "transparent" : backgroundColor;
        textColor = disabled ? theme.colors.text.disabled : textColor;

        const leftRadius = !groupData.isFirstItem ? 0 : theme.geometry.border.elementBorderRadius;
        const rightRadius = !groupData.isLastItem ? 0 : theme.geometry.border.elementBorderRadius;

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
                flexDirection: "row",
                alignItems: "center",
                minHeight: theme.geometry.dimension.button.minHeight,
                gap: theme.spacing.button.iconGap,
                paddingHorizontal: theme.spacing.button.paddingHorizontal,
                paddingVertical: theme.spacing.button.paddingVertical,
            },
            textStyle: {
                color: textColor,
            },
        };
    }
);
