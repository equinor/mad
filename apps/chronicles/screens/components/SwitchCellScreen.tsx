import React, { useState } from "react";
import { Cell, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const SwitchCellScreen = () => {
    const styles = useStyles(themeStyles);

    const [activeSwitch1, setActiveSwitch1] = useState(false);
    const [activeSwitch2, setActiveSwitch2] = useState(true);
    const [activeSwitch3, setActiveSwitch3] = useState(false);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <View style={styles.readableContent}>
                <Typography>{"Let's switch things up a bit, shall we?"}</Typography>
            </View>
            <Spacer />

            <Cell.Switch
                title="Who's up for a little toggle party?"
                isActive={activeSwitch1}
                onChange={setActiveSwitch1}
            />
            <Spacer />
            <Typography style={styles.explanation}>
                {
                    "Here's a standard switch. Toggle it for a fun surprise! (Just kidding, it'll just toggle.)"
                }
            </Typography>
            <Spacer />

            <Cell.Switch
                title="I'm the forbidden switch. No touchy!"
                isActive={activeSwitch2}
                onChange={setActiveSwitch2}
                disabled={true}
            />
            <Spacer />
            <Typography style={styles.explanation}>
                This switch is disabled, so no funny business here. Move along!
            </Typography>
            <Spacer />

            <Cell.Switch
                title="Caution! This switch is spicy!"
                isActive={activeSwitch3}
                onChange={setActiveSwitch3}
                color="danger"
                iconName="alert"
                switchSize="normal"
            />
            <Spacer />
            <Typography style={styles.explanation}>
                Watch out! This switch has a dash of danger and an extra icon for added flavor.
            </Typography>
            <Spacer />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    explanation: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        fontStyle: "italic",
    },
}));
