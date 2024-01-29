import React from "react";
import { ScrollView } from "react-native";
import {
    EDSStyleSheet,
    useStyles,
    Typography,
    Spacer,
    Search,
    Button,
} from "@equinor/mad-components";

export const SearchScreen = () => {
    const styles = useStyles(themedStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.container}
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

            <Spacer amount="medium" />

            <Button title="test" onPress={() => console.warn("TEST PRESSED")} />
        </ScrollView>
    );
};

const themedStyles = EDSStyleSheet.create(theme => ({
    container: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
