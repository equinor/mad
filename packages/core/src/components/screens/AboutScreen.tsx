import React from "react";
import { Cell, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { ScrollView, View } from "react-native";
import {
    useAbout,
    useAppVersion,
    useEnvironment,
    useExperimentalFeatures,
} from "../../store/mad-config";
import { getMadCommonBaseUrl } from "../../utils/madCommonUtils";

export const AboutScreen = () => {
    const styles = useStyles(themeStyles);
    const environment = useEnvironment();
    const environmentName = environment.charAt(0).toUpperCase() + environment.slice(1);
    const appVersion = useAppVersion();
    const about = useAbout();
    const experimentalFeatures = useExperimentalFeatures();
    const authenticationMethod = experimentalFeatures?.useExpoAuthSession ? "Expo" : "MSAL";
    const endpoints = [getMadCommonBaseUrl(environment)].concat(about?.endpoints ?? []);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
        >
            <Cell>
                <View style={styles.cellContainer}>
                    <Typography variant="h2">Client</Typography>
                    <View style={styles.rowContainer}>
                        <View style={styles.columnContainer}>
                            <Typography>Configuration</Typography>
                            <Typography>BuildNr</Typography>
                            <Typography>App version</Typography>
                            <Typography>Authentication</Typography>
                        </View>
                        <View style={styles.columnContainer}>
                            <Typography>{environmentName}</Typography>
                            <Typography>{about?.buildNumber}</Typography>
                            <Typography>{appVersion}</Typography>
                            <Typography>{authenticationMethod}</Typography>
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
                            {endpoints.map(endpoint => (
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
        columnGap: theme.spacing.cell.gapHorizontal,
    },
    columnContainer: {
        gap: 8,
    },
}));
