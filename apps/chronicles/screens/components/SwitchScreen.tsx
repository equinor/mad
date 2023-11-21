import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { EDSStyleSheet, Spacer, Typography, useStyles, Switch } from "@equinor/mad-components";

export const SwitchScreen = () => {
    const styles = useStyles(themeStyles);
    const [isActiveSwitch1, setIsActiveSwitch1] = useState(false);
    const [isActiveSwitch2, setIsActiveSwitch2] = useState(true);
    const [isActiveSwitchSmall, setIsActiveSwitchSmall] = useState(false);
    const [isDisabledSwitchSmall, setIsDisabledSwitchSmall] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledActiveSwitch, setDisabledActiveSwitch] = useState(true);

    const handleSwitchChange1 = (newState: boolean) => {
        setIsActiveSwitch1(newState);
    };

    const handleSwitchChange2 = (newState: boolean) => {
        setIsActiveSwitch2(newState);
    };

    const handleSmallSwitchChange = (newState: boolean) => {
        setIsActiveSwitchSmall(newState);
    };

    const handleSmallSwitchDisabled = (newState: boolean) => {
        setIsDisabledSwitchSmall(newState);
    };

    const handleDisabledActiveState = (newState: boolean) => {
        setIsDisabled(newState);
        setDisabledActiveSwitch(newState);
    };

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <Typography variant="h2">Variations</Typography>
            <Typography>Select between different states:</Typography>
            <View style={styles.switchRow}>
                <View style={styles.switchDescription}>
                    <Switch active={isActiveSwitch1} onChange={handleSwitchChange1} />
                    <Typography>Default Off</Typography>
                </View>
                <View style={styles.switchDescription}>
                    <Switch active={isActiveSwitch2} onChange={handleSwitchChange2} />
                    <Typography>Default On</Typography>
                </View>
            </View>
            <Spacer />

            <Typography variant="h2">Disabled</Typography>
            <Typography>A switch can have multiple states:</Typography>
            <View style={styles.switchRow}>
                <View style={styles.switchDescription}>
                    <Switch disabled={isDisabled} />
                    <Typography>{"You can't turn me on"}</Typography>
                </View>
                <View style={styles.switchDescription}>
                    <Switch
                        active={isDisabledActiveSwitch}
                        disabled={isDisabled}
                        onChange={handleDisabledActiveState}
                    />
                    <Typography>{"You can't turn me off"}</Typography>
                </View>
            </View>
            <Spacer />
            <Typography variant="h2">Small</Typography>
            <Typography>{"This is a small switch, with all the same functionality"}</Typography>
            <View style={styles.switchRow}>
                <View style={styles.switchDescription}>
                    <Switch.Small active={isActiveSwitchSmall} onChange={handleSmallSwitchChange} />
                    <Typography>Active</Typography>
                </View>
                <View style={styles.switchDescription}>
                    <Switch.Small
                        active={isDisabledSwitchSmall}
                        onChange={handleSmallSwitchDisabled}
                        disabled={isDisabled}
                    />
                    <Typography>Disabled</Typography>
                </View>
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    switchRow: {
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    switchDescription: {
        flexDirection: "column",
        alignItems: "center",
    },
}));

export default SwitchScreen;
