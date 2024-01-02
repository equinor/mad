import React, { useState } from "react";
import { EDSStyleSheet, Spacer, TextField, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const TextFieldScreen = () => {
    const styles = useStyles(themedStyles);
    const [inputValue, setInputValue] = useState("");
    const [inputVariant, setInputVariant] = useState<undefined | "danger" | "success">();
    const [helperText, setHelperText] = useState<
        "I only accept numbers" | "This is not a number" | "This is a valid number"
    >();
    const [validationIcon, setValidationIcon] = useState<"alert-circle" | "check" | "counter">();

    const handleChange = (text: string) => {
        setInputValue(text);
        if (text !== "" && !isNaN(Number(text))) {
            setHelperText("This is a valid number");
            setInputVariant("success");
            setValidationIcon("check");
        } else if (text !== "" && isNaN(Number(text))) {
            setHelperText("This is not a number");
            setInputVariant("danger");
            setValidationIcon("alert-circle");
        } else {
            setHelperText("I only accept numbers");
            setInputVariant(undefined);
            setValidationIcon("counter");
        }
    };
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.container}>
                <Typography>
                    TextField acts as a convenience wrapper for the Input component.
                </Typography>
                <Spacer />
                <TextField
                    label="You can add labels.."
                    placeholder="This is a placeholder"
                    helperText="..and helper text."
                />
                <Spacer />
                <Typography>You may add units and meta to it</Typography>
                <Spacer />
                <TextField label="Measurement" placeholder="Length" unit="(mm)" meta="(optional)" />
                <Spacer />
                <Typography>It can accept multiple lines of text too</Typography>
                <Spacer />
                <TextField
                    multiline
                    label="Say something"
                    placeholder="Anything goes here"
                    helperText="Hello everyone hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello"
                />
                <Spacer />
                <Typography>It can also add icons</Typography>
                <Spacer />
                <TextField
                    label="This textfield showcases icons.."
                    placeholder="..it has an icon in the inputfield.."
                    helperText="..and an icon next to the helpertext."
                    unit="(mm)"
                    helperIcon={"face-agent"}
                    inputIcon={"star-face"}
                />
                <Spacer />
                <Typography>You can use a TextField to handle validation.</Typography>
                <Spacer />
                <TextField
                    inputIcon={validationIcon}
                    helperIcon={validationIcon}
                    helperText={helperText}
                    placeholder="Only Numbers go here"
                    variant={inputVariant}
                    value={inputValue}
                    onChange={handleChange}
                />
                <Spacer />
            </View>
        </ScrollView>
    );
};

const themedStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
        backgroundColor: theme.colors.container.default,
    },
}));
