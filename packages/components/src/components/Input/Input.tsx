import { TextInput, TextInputProps, View, ViewStyle } from "react-native";
import React, { ReactNode, forwardRef, useState } from "react";
import { EDSStyleSheet } from "../../styling";
import { Label, useStyles } from "../..";

export type InputProps = {
    /**
     * A small label text to add to the input field.
     */
    label?: string;
    /**
     * Secondary small label text to add to the input field.
     */
    meta?: string;
    /**
     * A description to add to the input field. Use this when more information around the input field is required.
     */
    helperText?: string;
    /**
     * A callback method invoked when the input component registeres a change of text content.
     * @param contents A string representing the new text in the input field.
     */
    onChange?: (contents: string) => void;
    /**
     * A boolean value indicating whether or not the input component should span across multiple lines of text or wrapped to one line.
     */
    multiline?: boolean;
    /**
     * The text to display when the input component is empty.
     */
    placeholder?: string;
    /**
     * A boolean value indicating whether or not the input component is disabled or not.
     * Disabling the input causes it to not allow for any changes.
     */
    disabled?: boolean;
    /**
     * A component that will be added to the left of the input field.
     */
    leftAdornments?: ReactNode;
    /**
     * A component that will be added to the right of the input field.
     */
    rightAdornments?: ReactNode;
} & TextInputProps;

export const Input = forwardRef<TextInput, InputProps>(
    (
        {
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
        },
        ref,
    ) => {
        const [isSelected, setIsSelected] = useState<boolean>(false);
        const styles = useStyles(themedStyles, { multiline, isSelected });
        return (
            <>
                {label && <Label style={styles.label} label={label} meta={meta} />}
                <View style={styles.contentContainer}>
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
                            style={[styles.textInput, rest.style]}
                        />
                    </View>
                    {rightAdornments}
                </View>
                {helperText && <Label style={styles.label} label={helperText} />}
            </>
        );
    },
);

Input.displayName = "Input";

const themedStyles = EDSStyleSheet.create(
    (theme, props: { multiline: boolean; isSelected: boolean }) => {
        const { multiline, isSelected } = props;

        let borderStyle: ViewStyle;
        if (isSelected)
            borderStyle = {
                borderColor: theme.colors.interactive.primary,
                borderWidth: theme.geometry.border.focusedBorderWidth,
            };
        else
            borderStyle = {
                borderBottomColor: theme.colors.text.tertiary,
                borderBottomWidth: theme.geometry.border.focusedBorderWidth,
                borderColor: 'transparent',
                borderWidth: theme.geometry.border.focusedBorderWidth,
            };
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
                minHeight: multiline ? 80 : undefined,
            },
            placeholder: {
                color: theme.colors.text.tertiary,
            },
        };
    },
);
