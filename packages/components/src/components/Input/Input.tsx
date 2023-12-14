import React, { ReactNode, forwardRef, useState } from "react";
import {
    NativeSyntheticEvent,
    Platform,
    TextInput,
    TextInputFocusEventData,
    TextInputProps,
    View,
    ViewStyle,
} from "react-native";
import { useStyles } from "../..";
import { EDSStyleSheet } from "../../styling";

export type InputProps = {
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
    /**
     * A variant to use for the validation of the input field.
     */
    variant?: "danger" | "warning" | "success";
} & Omit<TextInputProps, "onChange" | "onChangeText">;

export const Input = forwardRef<TextInput, InputProps>(
    (
        {
            leftAdornments,
            rightAdornments,
            value,
            placeholder,
            onChange,
            multiline = false,
            disabled = false,
            variant,
            ...rest
        },
        ref,
    ) => {
        const [isSelected, setIsSelected] = useState<boolean>(false);
        const styles = useStyles(themedStyles, { multiline, isSelected, variant });

        const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsSelected(true);
            rest.onFocus && rest.onFocus(e);
        };

        const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsSelected(false);
            rest.onBlur && rest.onBlur(e);
        };

        return (
            <View style={styles.contentContainer}>
                {leftAdornments}
                <TextInput
                    {...rest}
                    ref={ref}
                    multiline={multiline}
                    editable={!disabled}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    textAlignVertical="top"
                    placeholderTextColor={styles.placeholder.color}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={[styles.textInput, rest.style]}
                />
                {rightAdornments}
            </View>
        );
    },
);

Input.displayName = "Input";

const themedStyles = EDSStyleSheet.create(
    (
        theme,
        props: {
            multiline: boolean;
            isSelected: boolean;
            variant?: "danger" | "warning" | "success";
        },
    ) => {
        const { multiline, isSelected, variant } = props;
        let borderStyle: ViewStyle;

        const baseTextInputStyle = {
            flex: 1,
            paddingTop: theme.spacing.textField.paddingVertical,
            paddingBottom: theme.spacing.textField.paddingVertical,
            paddingHorizontal: theme.spacing.textField.paddingHorizontal,
            color: theme.colors.text.primary,
            ...theme.typography.basic.input,
            minHeight: multiline ? 80 : undefined,
        };

        // TextInput have a default outlineStyle on web that causes a red border to
        // appear when focused. This is not the case for native. We therefore need to check
        // the platform first before appling the style in order to prevent console warnings.
        const webTextInputStyle =
            Platform.OS === "web"
                ? {
                      outlineStyle: "none",
                  }
                : {};

        switch (variant) {
            case "danger":
                borderStyle = {
                    borderColor: theme.colors.interactive.danger,
                    borderWidth: theme.geometry.border.focusedBorderWidth,
                };
                break;
            case "warning":
                borderStyle = {
                    borderColor: theme.colors.interactive.warning,
                    borderWidth: theme.geometry.border.focusedBorderWidth,
                };
                break;
            case "success":
                borderStyle = {
                    borderColor: theme.colors.interactive.success,
                    borderWidth: theme.geometry.border.focusedBorderWidth,
                };
                break;
            default:
                if (isSelected) {
                    borderStyle = {
                        borderColor: theme.colors.interactive.primary,
                        borderWidth: theme.geometry.border.focusedBorderWidth,
                    };
                } else {
                    borderStyle = {
                        borderBottomColor: theme.colors.text.tertiary,
                        borderBottomWidth: theme.geometry.border.focusedBorderWidth,
                        borderColor: "transparent",
                        borderWidth: theme.geometry.border.focusedBorderWidth,
                    };
                }
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
                ...baseTextInputStyle,
                ...webTextInputStyle,
            },
            placeholder: {
                color: theme.colors.text.tertiary,
            },
        };
    },
);
