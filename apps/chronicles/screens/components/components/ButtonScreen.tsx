import React, { useState } from "react";
import { Button, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const ButtonScreen = () => {
    const styles = useStyles(themeStyles);
    const [activeToggleIndex, setActiveToggleIndex] = useState<number>(0);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <Typography variant="h2">Variations</Typography>
            <Typography>Select between multiple colors:</Typography>
            <View style={styles.buttonRow}>
                <Button title="Primary" color="primary" />
                <Button title="Secondary" color="secondary" />
                <Button title="Danger" color="danger" />
            </View>
            <Spacer />
            <Typography>Different variants:</Typography>
            <View style={styles.buttonRow}>
                <Button title="Contained" variant="contained" />
                <Button title="Outlined" variant="outlined" />
                <Button title="Ghost" variant="ghost" />
            </View>
            <Spacer />
            <Typography>Icon positions:</Typography>
            <View style={styles.buttonRow}>
                <Button title="Leading" iconPosition="leading" iconName="home-outline" />
                <Button title="Trailing" iconPosition="trailing" iconName="send-outline" />
            </View>
            <Spacer />
            <Typography>Or just icons:</Typography>
            <View style={styles.buttonRow}>
                <Button.Icon name="airballoon-outline" />
                <Button.Icon name="bug-outline" variant="outlined" />
                <Button.Icon name="cake" variant="ghost" />
                <Button.Icon name="cloud-outline" color="danger" />
                <Button.Icon name="fingerprint" color="danger" variant="outlined" />
                <Button.Icon name="fire" color="danger" variant="ghost" />
            </View>
            <Spacer amount="large" />

            <Typography variant="h2">States</Typography>
            <Typography>A button can have multiple states:</Typography>
            <View style={styles.buttonRow}>
                <Button title="Disabled" variant="contained" disabled />
                <Button title="Disabled" variant="outlined" disabled />
                <Button title="Disabled" variant="ghost" disabled />
            </View>
            <Spacer />
            <View style={styles.buttonRow}>
                <Button title="Loading" loading />
                <Button title="Loading" loading disabled />
            </View>
            <Spacer amount="large" />

            <Typography variant="h2">Toggles and groups</Typography>
            <Typography>They can also be grouped</Typography>
            <View style={{ alignItems: "center" }}>
                <Button.Group>
                    <Button title="One" />
                    <Button title="Two" />
                    <Button title="Three" />
                </Button.Group>
            </View>
            <Spacer />
            <Typography>Or used as toggles</Typography>
            <View style={{ alignItems: "center" }}>
                <Button.Toggle activeIndex={activeToggleIndex}>
                    <Button title="One" onPress={() => setActiveToggleIndex(0)} />
                    <Button title="Two" onPress={() => setActiveToggleIndex(1)} />
                    <Button title="Three" onPress={() => setActiveToggleIndex(2)} />
                </Button.Toggle>
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    buttonRow: {
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-around",
    },
}));
