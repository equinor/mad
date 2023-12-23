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
            <EnvironmentProvider currentEnvironment="dev">
                <EnvironmentBanner />
            </EnvironmentProvider>
            <Spacer />
            <EnvironmentProvider currentEnvironment="test">
                <EnvironmentBanner />
            </EnvironmentProvider>
            <Spacer />
            <EnvironmentProvider currentEnvironment="qa">
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
