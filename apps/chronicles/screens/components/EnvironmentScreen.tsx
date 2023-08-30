import React from "react";
import {
    EDSStyleSheet,
    EnvironmentBanner,
    EnvironmentProvider,
    Spacer,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import { ScrollView } from "react-native";

export const EnvironmentScreen = () => {
    const styles = useStyles(themeStyles);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Typography>
                {
                    "Displays the app's current environment but only visible in non-production environments."
                }
            </Typography>
            <Spacer />
            <EnvironmentProvider environment="dev">
                <EnvironmentBanner />
            </EnvironmentProvider>
            <Spacer />
            <EnvironmentProvider environment="test">
                <EnvironmentBanner />
            </EnvironmentProvider>
            <Spacer />
            <EnvironmentProvider environment="qa">
                <EnvironmentBanner />
            </EnvironmentProvider>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
