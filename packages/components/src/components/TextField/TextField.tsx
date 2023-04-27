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
};

export const TextField = React.forwardRef<View, TextFieldProps & ViewProps>(({
    label, helperText, onChange, multiline, placeholder, disabled, ...rest
}, ref) => {
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
                    placeholderTextColor={styles.placeholder.color}
                    style={[multiline ? { minHeight: 60, maxHeight: 60 } : {}, contents ? styles.textInput : styles.placeholder]}
                ></TextInput>
            </View>
            {helperText && <Label label={label} />}
        </View>
    );
});

const themedStyles = EDSStyleSheet.create((theme) => {
    return {
        innerContainer: {
            backgroundColor: theme.colors.container.default,
            padding: 12,
            borderBottomWidth: theme.geometry.border.borderWidth,
            borderBottomColor: theme.colors.border.medium,
            marginTop: 4,
            marginBottom: 4,
            marginLeft: -12,
        },
        outerContainer: {
            marginLeft: 12,
        },
        textInput: {
            color: theme.colors.text.primary,
        },
        placeholder: {
            color: theme.colors.text.tertiary,
        },
    };
});

TextField.displayName = "TextField";
