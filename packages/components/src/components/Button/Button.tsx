import React, { useContext } from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { PressableHighlight } from "../PressableHighlight";
import { Typography } from "../Typography";
import { ButtonGroupContext } from "./ButtonGroup";
import { ToggleButtonContext } from "./ToggleButton";

export type ButtonProps = {
    title: string;
    onPress?: () => void;
    color?: "primary" | "secondary" | "danger";
    variant?: "contained" | "outlined" | "ghost";
};

export const Button = React.forwardRef<View, ButtonProps & ViewProps>(
    (
        {
            title,
            color = "primary",
            variant = "contained",
            onPress = () => null,
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
            groupData
        });

        return (
            <View ref={ref} style={[styles.colorContainer, rest.style]}>
                <PressableHighlight
                    onPress={isToggleButton ? toggleData.toggle : onPress}
                    style={styles.pressableContainer}
                >
                    <Typography
                        group="interactive"
                        variant="button"
                        style={styles.textStyle}
                    >
                        {title}
                    </Typography>
                </PressableHighlight>
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
    variant: "contained" | "outlined" | "ghost"
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: ButtonStyleSheetProps) => {
        const { color, isToggleButton, toggleStatus, groupData } = props;
        let { variant } = props;

        variant = isToggleButton ? toggleStatus ? "contained" : "outlined" : variant;

        const backgroundColor =
            variant === "contained"
                ? theme.colors.interactive[color]
                : "transparent";
        const textColor =
            variant === "contained"
                ? theme.colors.text.primaryInverted
                : theme.colors.interactive[color];

        const leftRadius = !groupData.isFirstItem ? 0 : theme.geometry.border.elementBorderRadius;
        const rightRadius = !groupData.isLastItem ? 0 : theme.geometry.border.elementBorderRadius;

        return {
            colorContainer: {
                backgroundColor,
                borderTopLeftRadius: leftRadius,
                borderBottomLeftRadius: leftRadius,
                borderTopRightRadius: rightRadius,
                borderBottomRightRadius: rightRadius,
                borderColor: theme.colors.interactive[color],
                borderWidth: theme.geometry.border.borderWidth,
                overflow: "hidden",
            },
            pressableContainer: {
                paddingHorizontal: theme.spacing.container.paddingHorizontal,
                minWidth: theme.geometry.dimension[isToggleButton ? "toggleButton" : "button"].minWidth,
                minHeight: theme.geometry.dimension[isToggleButton ? "toggleButton" : "button"].minHeight,
                justifyContent: "center",
                alignItems: "center",
            },
            textStyle: {
                color: textColor,
            },
        };
    }
);
