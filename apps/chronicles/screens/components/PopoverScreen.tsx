import { Button, Popover, Typography } from "@equinor/mad-components";
import { useRef, useState } from "react";
import { ScrollView, View } from "react-native";

export const PopoverScreen = () => {
    const buttonRef = useRef<View>(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState("top");
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{
                padding: 12,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography style={{ marginBottom: 40 }}>
                The popover component displays modally on top of your content
                and positions itself automatically based on constraints around
                the anchor element. Try scrolling the page to see this in
                action.
            </Typography>
            <Button
                ref={buttonRef}
                onPress={() => {
                    setOpen(!open);
                }}
                style={{ width: "50%" }}
            >
                Trigger popover
            </Button>
            <Popover
                open={open}
                anchorEl={buttonRef}
                onClose={() => setOpen(false)}
                placement={placement}
            >
                <Typography>This is a popover</Typography>
            </Popover>
        </ScrollView>
    );
};
