import React from "react";
import { Button, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { FallbackProps } from "react-error-boundary";
import { View } from "react-native";

export const ErrorBoundaryScreen = ({ resetErrorBoundary }: FallbackProps) => {
    const styles = useStyles(theme);
    return (
        <View style={styles.background}>
            <SafeAreaView
                style={{
                    padding: 22,
                    justifyContent: "center",
                    height: "100%",
                    gap: 22,
                }}
            >
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
            </SafeAreaView>
        </View>
    );
};

const theme = EDSStyleSheet.create(theme => ({
    title_color: { color: theme.colors.text.danger },
    text: { lineHeight: 20 },
    background: { backgroundColor: theme.colors.container.background },
}));
