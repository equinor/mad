import {
    Button,
    EDSStyleSheet,
    Popover,
    Spacer,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";

export const PopoverScreen = () => {
    const firstButtonRef = useRef<View>(null);
    const [isFirstPopoverOpen, setIsFirstPopoverOpen] = useState(false);

    const secondButtonRef = useRef<View>(null);
    const [isSecondPopoverOpen, setIsSecondPopoverOpen] = useState(false);

    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Typography>
                {"The popover component displays modally on top of your content and positions " +
                    "itself automatically based on constraints around the anchor element so you " +
                    "won't have to worry about it being positioned badly."}
            </Typography>
            <Spacer />
            <Button
                testID="trigger-popover"
                title="Trigger popover"
                ref={firstButtonRef}
                onPress={() => setIsFirstPopoverOpen(!isFirstPopoverOpen)}
            />
            <Popover
                open={isFirstPopoverOpen}
                anchorEl={firstButtonRef}
                onClose={() => setIsFirstPopoverOpen(false)}
                placement="top"
                testID="popover-1"
            >
                <Typography>This is a popover</Typography>
            </Popover>
            <Spacer amount="large" />
            <Typography>
                {"If you want to have the popover stay open while interacting " +
                    "with other elements outside of it simply don't provide " +
                    "an onClose callback. Though this might seem like convenient " +
                    "functionality, please note that nothing prevents the user " +
                    "from interacting with the rest of the app while the popover " +
                    "is open, meaning that they can potentially end up in strange UI states."}
            </Typography>
            <Spacer />
            <Button
                testID="trigger-popover-2"
                title="My popover won't stop you from interacting.."
                ref={secondButtonRef}
                onPress={() => setIsSecondPopoverOpen(!isSecondPopoverOpen)}
            />
            <Popover open={isSecondPopoverOpen} anchorEl={secondButtonRef} placement="top" testID="popover-2">
                <Typography>But remember to provide a way to close it!</Typography>
                <Spacer amount="small" />
                <Button
                    testID="close-popover-button"
                    title="click me to close the popover"
                    iconName="close"
                    iconPosition="leading"
                    variant="outlined"
                    onPress={() => setIsSecondPopoverOpen(false)}
                />
            </Popover>
            <Spacer />
            <View style={styles.interactiveButtonContainer}>
                <Button testID="useless-button-1" variant="outlined" title="...with me..." />
                <Spacer.Horizontal />
                <Button testID="useless-button-2" variant="outlined" title="...or me" />
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    interactiveButtonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
}));
