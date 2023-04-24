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
    variant?: "contained" | "outlined" | "icon";
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
        const isGroupButton = groupData && groupData.valid;
        let groupPosition = GroupPosition.None;
        if (isGroupButton) {
            groupPosition = GroupPosition.Middle;
            if (groupData.index === 0) {
                groupPosition = GroupPosition.First;
            }
            if (groupData.index === groupData.length - 1) {
                groupPosition = GroupPosition.Last;
            }
        }

        const styles = useStyles(themeStyles, {
            color,
            variant,
            isToggleButton,
            isGroupButton,
            toggleStatus: isToggleButton ? toggleData.isSelected : false,
            groupPosition
        });
        const style: any[] = [styles.colorContainer, rest.style];

        return (
            <View ref={ref} style={style}>
                <PressableHighlight
                    onPress={isToggleButton ? toggleData.toggle : onPress}
                    style={styles.pressableContainer}
                >
                    <Typography
                        group="navigation"
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

enum GroupPosition {
    First,
    Last,
    Middle,
    None
}

type ButtonStyleSheetProps = {
    groupPosition: GroupPosition,
    isGroupButton: boolean,
    isToggleButton: boolean,
    toggleStatus: boolean,
    color: "primary" | "secondary" | "danger",
    variant: "contained" | "outlined" | "icon"
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: ButtonStyleSheetProps) => {
        const { color, isToggleButton, toggleStatus, isGroupButton, groupPosition } = props;
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

        let borderTopLeftRadius = isGroupButton ? 0 : theme.geometry.border.elementBorderRadius;
        let borderTopRightRadius = isGroupButton ? 0 : theme.geometry.border.elementBorderRadius;
        let borderBottomLeftRadius = isGroupButton ? 0 : theme.geometry.border.elementBorderRadius;
        let borderBottomRightRadius = isGroupButton ? 0 : theme.geometry.border.elementBorderRadius;

        if (groupPosition == GroupPosition.First) {
            borderTopLeftRadius = theme.geometry.border.elementBorderRadius;
            borderBottomLeftRadius = theme.geometry.border.elementBorderRadius;
        }
        if (groupPosition == GroupPosition.Last) {
            borderTopRightRadius = theme.geometry.border.elementBorderRadius;
            borderBottomRightRadius = theme.geometry.border.elementBorderRadius;
        }

        return {
            colorContainer: {
                backgroundColor,
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomLeftRadius,
                borderBottomRightRadius,
                borderColor: theme.colors.interactive[color],
                borderWidth: theme.geometry.border.borderWidth,
                overflow: "hidden",
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
            },
        };
    }
);
