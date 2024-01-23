import { EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { PropertyRow } from "@equinor/mad-dfw";

export const PropertyRowScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
        >
            <View style={styles.readableContent}>
                <Typography>
                    This is the propertyRow component! It takes a label, value and optional icon
                    property. You can use them alone in a component like this:
                </Typography>
            </View>
            <Spacer />
            <View style={styles.propertyRowContainer}>
                <PropertyRow label="Label" value="Value" />
            </View>
            <Spacer />
            <View style={styles.readableContent}>
                <Typography>
                    or you can use multiple property rows to display whatever data you'd like:
                </Typography>
            </View>
            <Spacer />
            <View style={styles.propertyRowContainer}>
                <PropertyRow label="System Code" value="SYS-908763" />
                <PropertyRow label="Project Start" value="04.07.2024" iconName="water" />
                <PropertyRow label="Expected Completion" value="15.09.2024" iconName="oil" />
                <PropertyRow label="Resource Group" value="TECH-OPS" iconName="oil-temperature" />
                <PropertyRow
                    label="Location ID"
                    value="LOC-10234 - Zone 3 - Central Facility"
                    iconName="barrel"
                />
            </View>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    propertyRowContainer: {
        backgroundColor: theme.colors.container.default,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
