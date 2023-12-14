import React, { RefObject } from "react";
import { Button, Popover, Spacer, TextField } from "@equinor/mad-components";
import { View } from "react-native";

type TextInputBubbleProps = {
    open: boolean;
    anchorEl: RefObject<View>;
    value: string;
    onChangeText: (newValue: string) => void;
}

export const TextInputBubble = ({
    open,
    anchorEl,
    value,
    onChangeText
}: TextInputBubbleProps) => {
        return (
            <Popover anchorEl={anchorEl} open={open}>
                <View style={{flexDirection: "row"}}>
                    <TextField
                        value={value}
                        placeholder="Type text to enter here"
                        onChange={onChangeText}
                        helperText="Tap the canvas to add your text" />
                    <Spacer.Horizontal amount="small" />
                    <View>
                        <Button title="clear" iconName="close" onPress={() => onChangeText("")} variant="outlined" />
                    </View>
                </View>
            </Popover>
        );
};

TextInputBubble.displayName = "TextInputBubble";
