import { useState } from "react";
import { View, TextInput } from "react-native";
import { EDSStyleSheet, useStyles } from "../..";
import { Label } from "../Label";

export type TextFieldProps = {
    label?: string;
    helperText?: string;
    onChange?: (contents: string) => void;
    color?: "primary" | "secondary" | "danger";
    multiline?: boolean;
    placeholder?: string;
    disabled?: boolean;
};

export const TextField = (props: TextFieldProps) => {
    const [contents, setContents] = useState("");
    const styles = useStyles(themedStyles);
    return <View style={styles.outerContainer}>
        {props.label && <Label label={props.label} />}
        <View style={styles.innerContainer}>
            <TextInput editable={!props.disabled} value={contents} placeholder={props.placeholder} onChangeText={(x) => {
                setContents(x);
                props.onChange?.(x);
            }} style={contents ? styles.textInput : styles.placeholder}></TextInput>
        </View>
        {props.helperText && <Label label={props.label} />}
    </View>
}

const themedStyles = EDSStyleSheet.create((theme) => {
    return {
        innerContainer: {
            backgroundColor: theme.colors.container.default,
            padding: 12,
            borderBottomWidth: 2,
            borderBottomColor: theme.colors.border.medium,
            marginTop: 4,
            marginBottom: 4,
            marginLeft: -12
        },
        outerContainer: {
            marginLeft: 12
        },
        textInput: {
            color: theme.colors.text.primary
        },
        placeholder: {
            color: theme.colors.text.tertiary
        }
    };
});

TextField.displayName = "TextField";