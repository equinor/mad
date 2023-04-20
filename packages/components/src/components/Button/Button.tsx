import { View, ViewProps, StyleSheet } from "react-native";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { PressableHighlight } from "../PressableHighlight";
import React, { useContext } from "react";
import { ButtonGroupContext } from "../ButtonGroup";
import { ToggleButtonContext } from "../ToggleButton";

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
        let isToggleButton = false;
        if (toggleData && toggleData.valid) {
            isToggleButton = true;
            variant = toggleData.isSelected ? "contained" : "outlined";
        }
        const styles = useStyles(themeStyles, { color, variant });
        const style: any[] = [styles.colorContainer];

        const groupData = useContext(ButtonGroupContext);
        if (groupData && groupData.valid) {
            if (groupData.index === 0) {
                style.push(buttonGroupStyles.first);
            } else if (groupData.index === groupData.length - 1) {
                style.push(buttonGroupStyles.last);
            } else {
                style.push(buttonGroupStyles.middle);
            }
        }
        style.push(rest.style);

        return (
            <View ref={ref} style={style}>
                {isToggleButton ? <View style={styles.pressableContainer}>
                    <Typography
                        group="navigation"
                        variant="button"
                        style={styles.textStyle}
                    >
                        {title}
                    </Typography>
                </View> :
                    <PressableHighlight
                        onPress={onPress}
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
                }
            </View>
        );
    }
);

Button.displayName = "Button";

const buttonGroupStyles = StyleSheet.create({
    first: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    last: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    middle: {
        borderRadius: 0
    }
});

const themeStyles = EDSStyleSheet.create(
    (theme, props: Pick<ButtonProps, "variant" | "color">) => {
        const { color: color = "primary", variant: variant = "contained" } =
            props;

        const backgroundColor =
            variant === "contained"
                ? theme.colors.interactive[color]
                : "transparent";
        const textColor =
            variant === "contained"
                ? theme.colors.text.primaryInverted
                : theme.colors.interactive[color];

        return {
            colorContainer: {
                backgroundColor,
                borderRadius: theme.geometry.border.elementBorderRadius,
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
