import { View } from "react-native";
import { Typography } from "../Typography";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { PressableHighlight } from "../PressableHighlight";

export type ButtonProps = {
    title: string;
    color?: "primary" | "secondary" | "danger";
    variant?: "contained" | "outlined" | "icon"
    onPress?: () => void;
};

export const Button = ({
    title,
    onPress = () => null,
    color = "primary",
    variant = "contained",
}: ButtonProps) => {
    const styles = useStyles(themeStyles, { color, variant });

    return (
        <View style={styles.colorContainer}>
            <PressableHighlight
                onPress={onPress}
                style={styles.pressableContainer}
            >
                <Typography group="navigation" variant="button" style={styles.textStyle}>{title}</Typography>
            </PressableHighlight>
        </View>
    );
};
Button.displayName = "Button";

const themeStyles = EDSStyleSheet.create((theme, props) => {
    const {
        color: color = "primary",
        variant: variant = "contained"
    } = props as ButtonProps;

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