import {
    Button,
    EDSStyleSheet,
    Paper,
    Spacer,
    TextField,
    useStyles,
} from "@equinor/mad-components";
import React, { useEffect, useRef } from "react";
import { TextInput, View } from "react-native";

type TextInputBubbleProps = {
    open: boolean;
    value: string;
    onChangeText: (newValue: string) => void;
};

export const TextInputBubble = ({ open, value, onChangeText }: TextInputBubbleProps) => {
    const styles = useStyles(themeStyles);
    const textFieldRef = useRef<TextInput>(null);

    useEffect(() => {
        if (open) {
            textFieldRef.current?.focus();
        } else {
            textFieldRef.current?.blur();
        }
    }, [open]);
    return (
        <>
            {open && (
                <Paper elevation="overlay" style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TextField
                            ref={textFieldRef}
                            value={value}
                            placeholder="Type text to enter here"
                            onChange={onChangeText}
                            helperText="Tap the canvas to add your text"
                        />
                        <Spacer.Horizontal amount="small" />
                        <View>
                            <Button
                                title="clear"
                                iconName="close"
                                onPress={() => onChangeText("")}
                                variant="outlined"
                            />
                        </View>
                    </View>
                </Paper>
            )}
        </>
    );
};

TextInputBubble.displayName = "TextInputBubble";

const themeStyles = EDSStyleSheet.create(token => ({
    container: {
        borderRadius: 15,
        paddingHorizontal: token.spacing.container.paddingHorizontal,
        paddingVertical: token.spacing.element.paddingVertical,
    },
}));
