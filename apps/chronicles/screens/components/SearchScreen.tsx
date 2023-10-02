import React from "react";
import { ScrollView } from "react-native";
import { EDSStyleSheet, useStyles, Typography, Spacer, Search } from "@equinor/mad-components";

export const SearchScreen = () => {
    const styles = useStyles(themedStyles);
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.container}>
            <Typography>You can use an Input to add left adornments</Typography>
            <Typography>Standard search bar</Typography>
            <Spacer amount="small" />
            <Search placeholder="Search" label="Search for something"></Search>
            <Spacer amount="large" />

            <Typography>Search bar with cancel button</Typography>
            <Spacer amount="small" />
            <Search placeholder="Search" label="Search for something" cancellable />
        </ScrollView>
    );
};

const themedStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
        backgroundColor: theme.colors.container.default,
    },
}));
