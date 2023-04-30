import { useState } from "react";
import { View, TextInput, ViewProps } from "react-native";
import { EDSStyleSheet, useStyles } from "../..";
import { Label } from "../Label";
import React from "react";

export type TextFieldProps = {
    label?: string;
    helperText?: string;
    onChange?: (contents: string) => void;
    multiline?: boolean;
    placeholder?: string;
    disabled?: boolean;
} & ViewProps;

export const TextField = React.forwardRef<View, TextFieldProps>(
    (
        {
            label,
            helperText,
            onChange,
            multiline,
            placeholder,
            disabled,
            ...rest
        },
        ref
    ) => {
        const [contents, setContents] = useState("");
        const styles = useStyles(themedStyles);
        return (
            <View style={[styles.outerContainer, rest.style]} ref={ref}>
                {label && <Label label={label} />}
                <View style={styles.innerContainer}>
                    <TextInput
                        multiline={multiline}
                        editable={!disabled}
                        value={contents}
                        placeholder={placeholder}
                        onChangeText={(x) => {
                            setContents(x);
                            onChange?.(x);
                        }}
                        textAlignVertical="top"
                        placeholderTextColor={styles.placeholder.color}
                        style={[
                            multiline
                                ? {
                                    minHeight: 80,
                                    maxHeight: 80,
                                    paddingTop: styles.textInput.padding,
                                }
                                : {},
                            contents ? styles.text : styles.placeholder,
                            styles.textInput,
                        ]}
                    ></TextInput>
                </View>
                {helperText && <Label label={helperText} />}
            </View>
        );
    }
);

const themedStyles = EDSStyleSheet.create((theme) => {
    return {
        innerContainer: {
            backgroundColor: theme.colors.container.background,
            borderBottomWidth: theme.geometry.border.borderWidth,
            borderBottomColor: theme.colors.border.medium,
            marginTop: 4,
            marginBottom: 8,
            marginLeft: -theme.spacing.container.paddingHorizontal,
        },
        outerContainer: {
            marginLeft: theme.spacing.container.paddingHorizontal,
        },
        textInput: {
            padding: theme.spacing.container.paddingHorizontal,
            ...theme.typography.basic.p
        },
        text: {
            color: theme.colors.text.primary,
        },
        placeholder: {
            color: theme.colors.text.tertiary,
        }
    };
});

TextField.displayName = "TextField";
