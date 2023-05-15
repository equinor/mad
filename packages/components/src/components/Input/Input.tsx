import { TextInput, TextInputProps, View } from "react-native";
import { ReactNode } from "react";
import { EDSStyleSheet } from "../../styling";
import { Label, useStyles } from "../..";
import React from "react";

export type InputProps = {
    label?: string;
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
    helperText,
    value,
    placeholder,
    onChange,
    multiline = false,
    disabled = false,
    ...rest
}, ref) => {
    const styles = useStyles(themedStyles, { multiline });
    return (
        <>
            {label && <Label label={label} />}
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
                        style={[
                            styles.textInput,
                            rest.style
                        ]}
                    />
                </View>
                {rightAdornments}
            </View>
            {helperText && <Label label={helperText} />}
        </>
    );
});

Input.displayName = "Input";

const themedStyles = EDSStyleSheet.create((theme, props: { multiline: boolean }) => {
    return {
        contentContainer: {
            flexDirection: "row",
            backgroundColor: theme.colors.container.background,
            borderBottomWidth: theme.geometry.border.borderWidth,
            borderBottomColor: theme.colors.border.medium,
        },
        textInput: {
            paddingTop: theme.spacing.textField.paddingVertical,
            paddingBottom: theme.spacing.textField.paddingVertical,
            paddingHorizontal: theme.spacing.textField.paddingHorizontal,
            color: theme.colors.text.primary,
            ...theme.typography.basic.input,
            minHeight: props.multiline ? 80 : undefined
        },
        placeholder: {
            color: theme.colors.text.tertiary,
        },
    };
});
