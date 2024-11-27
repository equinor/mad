import { EDSColor, EDSStyleSheet, Icon, IconName, PressableHighlight, Typography, useStyles } from "@equinor/mad-components";
import React from "react";

type SwipeItemProps = {
    title: string,
    iconName: IconName,
    color: EDSColor,
    onPress: () => void
}

export const SwipeItem = ({
    title,
    iconName,
    color,
    onPress,
}: SwipeItemProps) => {
    const styles = useStyles(themeStyles, { color });

    return (
        <PressableHighlight
            style={styles.container}
            onPress={onPress}
        >
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
