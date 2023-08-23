import React from "react";
import {
    Button,
    EDSStyleSheet,
    Spacer,
    Typography,
    alert,
    useStyles,
} from "@equinor/mad-components";
import { ScrollView } from "react-native";

export const DialogScreen = () => {
    const styles = useStyles(themeStyles);
    const triggerAlert = () =>
        alert(
            "Alert",
            "Your answer was saved, but we could not submit this quiz due to some technical issues. Please try again.",
            [
                {
                    text: "Dismiss",
                    style: "destructive",
                    onPress: () => undefined,
                },
                {
                    text: "Retry",
                    onPress: () => undefined,
                    icon: "refresh",
                    isPreferred: true,
                },
            ],
        );

    const triggerAnotherAlert = () =>
        alert(
            "Another alert Another alert Another alert Another alert Another alert Another alert Another alert Another alert Another alert",
            "A very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long message",
            [
                {
                    text: "OK",
                    onPress: () => undefined,
                    icon: "close",
                },
            ],
        );
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Button title="Trigger dialog" onPress={triggerAlert} />
            <Spacer />
            <Button title="Trigger another dialog" onPress={triggerAnotherAlert} />
            <Typography variant="h5" style={{ paddingTop: 16 }}>
                How to use:
            </Typography>
            <Typography>{"- first make sure you have implemented EDSProvider"}</Typography>
            <Typography>{"- second, import alert from @equinor/mad-components"}</Typography>
            <Typography>
                {
                    "- use alert as a function. It's arguments are very similar to React Native's Alert.alert, with minor changes:"
                }
            </Typography>
            <Typography>
                {"  * alert only takes 3 arguments instead of 4 (options has been removed)"}
            </Typography>
            <Typography>
                {"  * when adding buttons, you now have the ability to add an icon to the button"}
            </Typography>
            <Spacer />
            <Typography>
                {
                    "If the above API is not suitable for your needs, you can also implement the Dialog component manually. In that case, the api is similar to eds-core-react."
                }
            </Typography>
            <Typography variant="h5" style={{ paddingTop: 16 }}>
                Differences from eds-core-react:
            </Typography>
            <Typography>{"- 'open' prop is now named 'isOpen'"}</Typography>
            <Typography>
                {"- 'dialogRef' prop does not exist. Could be implemented if needed"}
            </Typography>
            <Typography>{"- if 'isDismissable' is true, 'onClose' is required"}</Typography>
            <Typography>
                {"- Dialog.Actions has a 'align' prop, to help you align buttons left or right"}
            </Typography>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
