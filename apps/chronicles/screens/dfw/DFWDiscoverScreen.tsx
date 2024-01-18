import React from "react";
import { View, ScrollView } from "react-native";

import { Spacer, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";

export default function DFWDiscoverScreen() {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.readableContent}>
                <Spacer />
                <Typography>There is nothing here yet!</Typography>
            </View>
        </ScrollView>
    );
}

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        flex: 1,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    readableContent: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
    },
}));
