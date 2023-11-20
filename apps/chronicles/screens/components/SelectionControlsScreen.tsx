import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import {
    EDSStyleSheet,
    Spacer,
    Typography,
    useStyles,
    Switch,
    Radio,
} from "@equinor/mad-components";

export const SelectionControlsScreen = () => {
    const styles = useStyles(themeStyles);
    const [isActiveSwitch1, setIsActiveSwitch1] = useState(false);
    const [isActiveSwitch2, setIsActiveSwitch2] = useState(true);
    const [isActiveSwitchSmall, setIsActiveSwitchSmall] = useState(false);
    const [isDisabledSwitchSmall, setIsDisabledSwitchSmall] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isDisabledActiveSwitch, setDisabledActiveSwitch] = useState(true);
    const [isCheckedRadio1, setIsCheckedRadio1] = useState(false);
    const [isCheckedRadio2, setIsCheckedRadio2] = useState(true);
    const [isCheckedRadio3, setIsCheckedRadio3] = useState(false);
    const [isCheckedRadio4, setIsCheckedRadio4] = useState(false);
    const [isCheckedRadio5, setIsCheckedRadio5] = useState(false);
    const [isCheckedRadio6, setIsCheckedRadio6] = useState(false);
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

    const handleRadioChange = (newState: boolean) => {
        setIsCheckedRadio2(newState);
        setIsCheckedRadio1(!newState);
    };

    const handleColoredRadioPress = (radioIndex: number) => {
        const checkboxes = [isCheckedRadio3, isCheckedRadio4, isCheckedRadio5, isCheckedRadio6];

        const newState = checkboxes.map((c, index) => index === radioIndex);

        setIsCheckedRadio3(newState[0]);
        setIsCheckedRadio4(newState[1]);
        setIsCheckedRadio5(newState[2]);
        setIsCheckedRadio6(newState[3]);
    };

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <Typography bold variant="h2">
                Radio
            </Typography>
            <Spacer />

            <Typography variant="h2">Variations</Typography>
            <Typography>Select between different states:</Typography>
            <View>
                <View style={styles.switchRow}>
                    <View style={styles.switchDescription}>
                        <Radio
                            checked={isCheckedRadio1}
                            onPress={() => handleRadioChange(!isCheckedRadio2)}
                        />
                        <Typography>Use the Radio buttons</Typography>
                        <Typography> as you see fit.</Typography>
                    </View>
                    <View style={styles.switchDescription}>
                        <Radio
                            checked={isCheckedRadio2}
                            onPress={() => handleRadioChange(!isCheckedRadio2)}
                        />
                        <Typography>Only a single Radio in</Typography>
                        <Typography>a group should be active.</Typography>
                    </View>
                </View>
                <Spacer />
                <Typography>Select between different colors:</Typography>
                <View style={styles.switchRow}>
                    <View style={styles.switchDescription}>
                        <Radio
                            checked={isCheckedRadio3}
                            onPress={() => handleColoredRadioPress(0)}
                            color={"secondary"}
                        />
                        <Typography>{"I'm boring"}</Typography>
                    </View>
                    <View style={styles.switchDescription}>
                        <Radio
                            checked={isCheckedRadio4}
                            onPress={() => handleColoredRadioPress(1)}
                            color={"warning"}
                        />
                        <Typography>{"I'm cautious"}</Typography>
                    </View>
                    <View style={styles.switchDescription}>
                        <Radio
                            checked={isCheckedRadio5}
                            onPress={() => handleColoredRadioPress(2)}
                            color={"danger"}
                        />
                        <Typography>{"I'm dangerous"}</Typography>
                    </View>
                    <View style={styles.switchDescription}>
                        <Radio
                            checked={isCheckedRadio6}
                            onPress={() => handleColoredRadioPress(3)}
                            color={"success"}
                        />
                        <Typography>{"I'm successful"}</Typography>
                    </View>
                </View>
                <Spacer />

                <Typography variant="h2">Disabled</Typography>
                <Typography>A radio can have multiple states:</Typography>
                <View style={styles.switchRow}>
                    <View style={styles.switchDescription}>
                        <Radio disabled />
                        <Typography>{"You can't check me"}</Typography>
                    </View>
                    <View style={styles.switchDescription}>
                        <Radio disabled checked />
                        <Typography>{"You can't uncheck me"}</Typography>
                    </View>
                </View>
            </View>
            <Spacer />

            <Typography bold variant="h2">
                Switch
            </Typography>
            <Spacer />
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

export default SelectionControlsScreen;
