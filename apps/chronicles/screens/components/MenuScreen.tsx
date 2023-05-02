import { Button, EDSStyleSheet, Menu, Popover, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { useRef, useState } from "react";
import { ScrollView, View } from "react-native";

export const MenuScreen = () => {
    const [open, setOpen] = useState<boolean>(false);
    const buttonRef = useRef<View>(null);
    const style = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={style.contentContainer}
        >
            <Spacer amount="large" />
            <Button
                title="Open menu"
                ref={buttonRef}
                onPress={() => {
                    setOpen(!open);
                }}
            />
            <Menu
                anchorEl={buttonRef}
                open={open}
                onClose={() => setOpen(false)}>
                <Typography>test</Typography>
            </Menu>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create((theme) => ({
    contentContainer: {
        paddingVertical: theme.spacing.container.paddingVertical
    }
}));