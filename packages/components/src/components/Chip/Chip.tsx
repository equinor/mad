import React from "react";
import { useStyles } from "../../hooks/useStyles";
import { Color, EDSStyleSheet } from "../../styling";
import { View } from "react-native";
import { Typography } from "../Typography";
import { PressableHighlight } from "../PressableHighlight";

export type ChipProps = {
    title: string;
    variant?: "default" | "error" | "active"
    disabled?: boolean;
    onPress?: () => void;
    onDelete?: () => void;
}

export const Chip = ({
    title,
    variant = "default",
    disabled = false,
    onPress,
    onDelete,
}: ChipProps) => {
    const styles = useStyles(themeStyles, {variant, disabled})

    return (
        <View style={styles.chipContainer}>
            <PressableHighlight style={styles.pressableContainer} onPress={onPress} disabled={disabled || !onPress}>
                <Typography style={styles.text} group="ui" variant="chipAndBadge">{title}</Typography>
            </PressableHighlight>
        </View>
    );
}

Chip.displayName = "Chip";

type ChipTokenProps = Required<Pick<ChipProps, "variant" | "disabled">>;

const themeStyles = EDSStyleSheet.create((theme, props: ChipTokenProps) => {
    const { variant, disabled } = props;
   
    const variantToBackgroundColor: Record<typeof variant, Color> = {
        default: theme.colors.container.background,
        active: theme.colors.interactive.selectedHighlight,
        error: "rgba(0,0,0,0)"
    };

    const variantToTextColor: Record<typeof variant, Color> = {
        default: theme.colors.interactive.primary,
        active: theme.colors.interactive.primary,
        error: theme.colors.interactive.danger,
    };
    const basePaddingVertical = theme.spacing.chip.paddingVertical;
    const paddingVertical = variant === "error" ? basePaddingVertical -  theme.geometry.border.borderWidth : basePaddingVertical;

    return {
        chipContainer: {
            alignSelf: "flex-start",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: disabled ? theme.colors.interactive.disabled : variantToBackgroundColor[variant],
            borderRadius: 9999,
            borderColor: theme.colors.interactive.danger,
            borderWidth: variant === "error" ? theme.geometry.border.borderWidth : undefined,
            overflow: "hidden",
        },
        pressableContainer: {
            paddingVertical,
            paddingHorizontal: theme.spacing.chip.paddingHorizontal,            
        },
        text: {
            color: disabled ? theme.colors.text.disabled : variantToTextColor[variant],
        },
    }
});