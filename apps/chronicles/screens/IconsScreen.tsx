import React from "react";
import { EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";

export default function IconsScreen() {
    const styles = useStyles(themeStyles);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.readableContent}>
                <Typography>
                    {
                        "We are not able to expose EDS icons in our component library yet. \n \
                    For the time being, you'll just have to accept MaterialComunityIcons as the \
                    source of the icons in this library."
                    }
                </Typography>
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
