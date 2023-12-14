import React from "react";
import { Cell, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";
import { useEnvironment, useMadConfig } from "../../store/mad-config";

export const AboutScreen = () => {
    const config = useMadConfig();
    const styles = useStyles(themeStyles)
    const environment = useEnvironment();
    const environmentName  = environment.charAt(0).toUpperCase() + environment.slice(1);
    
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}>
                <Cell>
                    <View style={styles.cellContainer}>
                        <Typography variant="h2">Client</Typography>
                        <View style={styles.rowContainer}>
                            <View style={styles.columnContainer}>
                                <Typography>Configuration</Typography>
                                <Typography>BuildNr</Typography>
                                <Typography>App version</Typography>
                            </View>
                            <View style={styles.columnContainer}>
                                <Typography>{environmentName}</Typography>
                                <Typography>{config.about?.buildNumber}</Typography>
                                <Typography>{config.appVersion}</Typography>
                            </View>
                        </View>
                    </View>
                </Cell>
                <Cell>
                    <View style={styles.cellContainer}>
                        <Typography variant="h2">Api</Typography>
                        <View style={styles.columnContainer}>
                            <Typography>Endpoints</Typography>
                            <View>
                                {config.about?.endpoints.map(endpoint => (
                                    <Typography key={endpoint}>{endpoint}</Typography>
                                ))}
                            </View>
                        </View>
                    </View>
                </Cell>
        </ScrollView>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    contentContainer: {
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    cellContainer: {
        gap: theme.spacing.cell.content.titleDescriptionGap,
    },
    rowContainer: {
        flexDirection: "row",
        columnGap: theme.spacing.cell.gapHorizontal
    },
    columnContainer: {
        gap: 8
    }
}));