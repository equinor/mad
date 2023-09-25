import React, { useState } from "react";
import { Button, EDSStyleSheet, Spacer, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView } from "react-native";

export const ErrorBoundaryScreen = () => {
    const styles = useStyles(themeStyles);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Typography>
                Sometimes an unrecoverable error happens in the app. Without an error boundary, the
                app turns blank, which is a bad user experience.
            </Typography>

            <Spacer />

            <Typography>
                With the Error Boundary component, you can display an error screen to the user. You
                can also add an {"'onError'"} callback, to track the error in Application Insights
            </Typography>

            <Spacer />

            <Typography variant="h2">Example</Typography>

            <Spacer />

            <OopsieButton />
        </ScrollView>
    );
};

const OopsieButton = () => {
    const [errorIsEnabled, setErrorIsEnabled] = useState(false);
    return (
        <>
            <Button
                title="Press this button to trigger an oopsie"
                onPress={() => setErrorIsEnabled(true)}
            />
            {errorIsEnabled && "Rendering strings outside of a Text component is a bad idea"}
        </>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
}));
