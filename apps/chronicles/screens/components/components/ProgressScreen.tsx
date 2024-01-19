import React from "react";
import { EDSStyleSheet, Progress, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export const ProgressScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Progress title="Progress" />
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
