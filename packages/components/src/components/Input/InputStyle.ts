import { ViewStyle } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { InputProps } from "./Input";

type InputStyleProps = Pick<InputProps, "readOnly" | "variant"> & {
    isSelected: boolean;
};

export const themeStyles = EDSStyleSheet.create((theme, props: InputStyleProps) => {
    const { isSelected, variant, readOnly } = props;

    const backgroundColor = readOnly ? undefined : theme.colors.container.background;

    const variantBorderStyle: ViewStyle = {
        borderWidth: isSelected
            ? theme.geometry.border.focusedBorderWidth
            : theme.geometry.border.borderWidth,
        borderColor: theme.colors.interactive[variant!],
    };

    const normalBorderStyle: ViewStyle = {
        borderColor: isSelected ? theme.colors.interactive.primary : "transparent",
        borderBottomWidth: theme.geometry.border.focusedBorderWidth,
        borderBottomColor: isSelected
            ? theme.colors.interactive.primary
            : theme.colors.text.tertiary,
    };

    const readOnlyBorderStyle: ViewStyle = {
        borderColor: "transparent",
    };

    let borderStyle: ViewStyle;
    if (readOnly) {
        borderStyle = readOnlyBorderStyle;
    } else if (variant) {
        borderStyle = variantBorderStyle;
    } else {
        borderStyle = normalBorderStyle;
    }

    return {
        contentContainer: {
            backgroundColor,
            flexDirection: "row",
            margin: variant && !isSelected ? 1 : 0,
            borderWidth: theme.geometry.border.focusedBorderWidth,
            ...borderStyle,
        },
        textInput: {
            flex: 1,
            paddingTop: theme.spacing.textField.paddingVertical,
            paddingBottom: theme.spacing.textField.paddingVertical,
            paddingHorizontal: theme.spacing.textField.paddingHorizontal,
            color: theme.colors.text.primary,
            ...theme.typography.basic.input,
        },
        placeholder: {
            color: theme.colors.text.tertiary,
        },
    };
});
