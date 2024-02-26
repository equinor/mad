import React from "react";
import { ScrollView } from "react-native";
import { EDSStyleSheet, useStyles, Typography, Spacer, Search } from "@equinor/mad-components";

export const SearchScreen = () => {
    const styles = useStyles(themedStyles);
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="automatic"
        >
            <Typography>
                The Search component can be used to enter and submit search queries.
            </Typography>
            <Spacer />

            <Typography>Standard Search allows users to input search queries.</Typography>
            <Spacer amount="small" />
            <Search placeholder="Search here..."></Search>
            <Spacer amount="large" />

            <Typography>
                Search with the «cancellable» prop. The cancel button allows users to clear their
                search and exit the search mode.
            </Typography>
            <Spacer amount="small" />
            <Search placeholder="Search here..." cancellable />

            <Spacer amount="large" />

            <Typography>Search with the «disabled» prop.</Typography>
            <Spacer amount="small" />
            <Search placeholder="Disabled. Can't search here..." disabled />
        </ScrollView>
    );
};

const themedStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
