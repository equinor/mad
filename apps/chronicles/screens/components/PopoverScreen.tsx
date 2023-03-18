import { Button, Popover, Typography } from "@equinor/mad-components";
import { useRef, useState } from "react";
import { ScrollView } from "react-native";

export const PopoverScreen = () => {
    const buttonRef = useRef(null);
    const [open, setOpen] = useState(false);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ flex: 1, justifyContent: "center" }}
        >
            <Button ref={buttonRef} onPress={() => {
                setOpen(!open);
            }}>
                Press me!
            </Button>
            <Popover open={open} anchorEl={buttonRef.current}>
                <Typography>This is a popover</Typography>
            </Popover>
        </ScrollView>
    );
};