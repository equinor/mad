import React from "react";
import { FallbackProps } from "react-error-boundary";
import { View, SafeAreaView } from "react-native";
import { Button } from "../Button";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Typography } from "../Typography";

export const ErrorBoundaryScreen = ({ resetErrorBoundary }: FallbackProps) => {
    const styles = useStyles(theme);
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Typography color={styles.title_color.color} style={styles.text}>
                    Error
                </Typography>
                <Typography style={styles.text}>
                    Something unexpected happened, and the app crashed. You can restart the app
                    below.
                </Typography>
                <Typography style={styles.text}>
                    The error information has been forwarded to our team, and we will look into it.
                </Typography>
                <Button title="Restart app" onPress={resetErrorBoundary} />
            </View>
        </SafeAreaView>
    );
};

const theme = EDSStyleSheet.create(theme => ({
    title_color: { color: theme.colors.text.danger },
    text: { lineHeight: 20 },
    safeAreaContainer: {
        backgroundColor: theme.colors.container.background,
    },
    container: {
        padding: 22,
        justifyContent: "center",
        height: "100%",
        gap: 22,
    },
}));
