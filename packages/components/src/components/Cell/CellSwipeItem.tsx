import React from "react";
import { useStyles } from "../../hooks/useStyles";
import { EDSColor, EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { PressableHighlight } from "../PressableHighlight";
import { Typography } from "../Typography";
import { useSwipeableMethods } from "../_internal/SwipeableWithContext";
import { CellSwipeItemProps } from "./types";

export const CellSwipeItem = ({ title, iconName, color, onPress }: CellSwipeItemProps) => {
    const styles = useStyles(themeStyles, { color });
    const swipeableMethods = useSwipeableMethods();

    return (
        <PressableHighlight style={styles.container} onPress={() => onPress?.(swipeableMethods)}>
            {iconName && (
                <Icon name={iconName} style={styles.textStyle} size={title ? undefined : 28} />
            )}
            {title && (
                <Typography group="interactive" variant="button" style={styles.textStyle}>
                    {title}
                </Typography>
            )}
        </PressableHighlight>
    );
};

const themeStyles = EDSStyleSheet.create((theme, props: { color?: EDSColor }) => ({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.button.iconGap,
        backgroundColor: props.color
            ? theme.colors.interactive[props.color]
            : theme.colors.interactive.primary,
        paddingHorizontal: theme.spacing.element.paddingHorizontal,
        paddingVertical: theme.spacing.element.paddingVertical,
    },
    textStyle: {
        color: theme.colors.text.primaryInverted,
    },
}));
