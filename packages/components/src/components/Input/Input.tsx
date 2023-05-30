import { TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { ReactNode, useState } from "react";
import { EDSStyleSheet } from "../../styling";
import { Label, useStyles } from "../..";
import React from "react";

export type InputProps = {
    label?: string;
    meta?: string;
    helperText?: string;
    onChange?: (contents: string) => void;
    multiline?: boolean;
    placeholder?: string;
    disabled?: boolean;
    leftAdornments?: ReactNode;
    rightAdornments?: ReactNode;
} & TextInputProps;


export const Input = React.forwardRef<TextInput, InputProps>(({
    leftAdornments,
    rightAdornments,
    label,
    meta,
    helperText,
    value,
    placeholder,
    onChange,
    multiline = false,
    disabled = false,
    ...rest
}, ref) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const styles = useStyles(themedStyles, { multiline, isSelected });
    return (
        <>
            {label && <Label style={styles.label} label={label} meta={meta} />}
            <View style={styles.contentContainer}
            >
                {leftAdornments}
                <View style={{ flex: 1 }}>
                    <TextInput
                        ref={ref}
                        multiline={multiline}
                        editable={!disabled}
                        value={value}
                        placeholder={placeholder}
                        onChangeText={onChange}
                        textAlignVertical="top"
                        placeholderTextColor={styles.placeholder.color}
                        onFocus={() => setIsSelected(true)}
                        onBlur={() => setIsSelected(false)}
                        style={[
                            styles.textInput,
                            rest.style
                        ]}
                    />
                </View>
                {rightAdornments}
            </View>
            {helperText && <Label style={styles.label} label={helperText} />}
        </>
    );
});

Input.displayName = "Input";

const themedStyles = EDSStyleSheet.create((theme, props: { multiline: boolean, isSelected: boolean }) => {
    const { multiline, isSelected } = props;

    let borderStyle: ViewStyle;
    if (isSelected) borderStyle = {
        borderColor: theme.colors.interactive.primary,
        borderWidth: theme.geometry.border.focusedBorderWidth,
    }
    else borderStyle = {
        borderColor: theme.colors.text.tertiary,
        borderBottomWidth: theme.geometry.border.borderWidth,
    }
    return {
        contentContainer: {
            flexDirection: "row",
            backgroundColor: theme.colors.container.background,
            ...borderStyle,
        },
        label: {
            paddingHorizontal: theme.spacing.textField.paddingHorizontal,
        },
        textInput: {
            paddingTop: theme.spacing.textField.paddingVertical,
            paddingBottom: theme.spacing.textField.paddingVertical,
            paddingHorizontal: theme.spacing.textField.paddingHorizontal,
            color: theme.colors.text.primary,
            ...theme.typography.basic.input,
            minHeight: multiline ? 80 : undefined
        },
        placeholder: {
            color: theme.colors.text.tertiary,
        },
    };
});
