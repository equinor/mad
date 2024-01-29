import React from "react";
import { Button, ScrollView } from "react-native";
import { EDSStyleSheet, useStyles, Typography, Spacer, Search } from "@equinor/mad-components";

export const SearchScreen = () => {
    const styles = useStyles(themedStyles);
    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        >
            <Typography>You can use an Input to add left adornments</Typography>
            <Typography>Standard search bar</Typography>
            <Spacer amount="small" />
            <Search placeholder="Search"></Search>
            <Spacer amount="large" />

            <Typography>Search bar with cancel button</Typography>
            <Spacer amount="small" />
            <Search placeholder="Search" cancellable />
            <Search placeholder="Search"></Search>
            <Search placeholder="Search"></Search>
            <Button title="Test" />
            
        </ScrollView>
    );
};

const themedStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
        backgroundColor: theme.colors.container.default,
        heigth: 1000,
    },
}));
