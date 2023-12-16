import React from "react";
import {
    Chip,
    EDSStyleSheet,
    Spacer,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const ChipScreen = () => {


    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <View style={styles.textContainer}>
                <Typography>The chip component is configurable</Typography>
            </View>
            <View style={styles.chipContainer}>
                <View style={styles.chipRow}>
                    <Chip title="Normal"/>
                    <Chip title="Active" variant="active" />
                    <Chip title="Error" variant="error" />
                    <Chip title="Disabled" disabled/>
                </View>
                <Spacer />
                <View style={styles.chipRow}>
                    <Chip title="Tapable" onPress={() => null}/>
                    <Chip title="Tapable" onPress={() => null} variant="active" />
                    <Chip title="Tapable" onPress={() => null} variant="error" />
                    <Chip title="Tapable" onPress={() => null} disabled/>
                </View>
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    textContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    chipContainer: {  
        backgroundColor: theme.colors.container.default,
        paddingVertical: theme.spacing.container.paddingVertical,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
    chipRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        gap: 8,
    }
}));
