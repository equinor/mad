import React, { useEffect, useState } from "react";
import { ChangeLog, Release } from "./ChangeLog";
import * as mockData from "../../../static/mock-data/whats-new.json";
import { useAppVersion, useEnvironment, useServicePortalName } from "../../../store/mad-config";
import { useReleaseNotesVersion } from "../../../store/release-notes";
import {
    Button,
    Cell,
    CircularProgress,
    EDSStyleSheet,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import { useDemoMode } from "../../../store/demo-mode";
import { fetchReleaseNotes } from "./fetchReleaseNotes";
import { ScrollView, View } from "react-native";
import { getShortDate } from "../../../utils/dateUtils";
import { useScreenTitleFromDictionary } from "../../../hooks/useScreenTitleFromDictionary";
import { useNavigateFromWhatsNewScreen } from "../../../hooks/useNavigateFromWhatsNewScreen";

/**
 * This screen will display the latest releasenotes
 */
export const WhatsNewScreen = () => {
    useScreenTitleFromDictionary(dic => dic.releaseNotes.whatsNew);
    const styles = useStyles(whatsNewStyles);
    const environment = useEnvironment();
    const releaseNotesVersion = useReleaseNotesVersion();
    const servicePortalName = useServicePortalName();
    const navigate = useNavigateFromWhatsNewScreen();
    const demoMode = useDemoMode();
    const appVersion = useAppVersion();
    const [release, setRelease] = useState<Release | null>(null);
    const [error, setError] = useState("");
    const [isFetching, setIsFetching] = useState(true);
    const enableIsFetching = () => setIsFetching(true);
    const disableIsFetching = () => setIsFetching(false);

    useEffect(() => {
        enableIsFetching();
        if (demoMode.isEnabled) {
            setRelease(mockData);
            disableIsFetching();
        } else {
            fetchReleaseNotes(environment, servicePortalName, appVersion)
                .then(setRelease)
                .catch(setError)
                .finally(disableIsFetching);
        }
    }, [demoMode.isEnabled, environment, servicePortalName, appVersion]);

    if (error || (!isFetching && !release)) {
        navigate();
    }

    if (!release) {
        return (
            <View style={styles.spinnerContainer}>
                <CircularProgress />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Cell style={styles.scrollContainer}>
                    <Typography style={styles.versionHeader}>{release.version}</Typography>
                    <Typography style={styles.subtitleHeader}>
                        {getShortDate(new Date(release.releaseDate))}
                    </Typography>
                    <ChangeLog release={release} />
                </Cell>
            </ScrollView>
            <View style={styles.footer}>
                <Button
                    title="OK"
                    onPress={() => {
                        if (!demoMode.isEnabled)
                            releaseNotesVersion.setLastDisplayedReleaseNotesVersion(appVersion);
                        navigate();
                    }}
                    style={{ width: 81 }}
                />
            </View>
        </View>
    );
};

const whatsNewStyles = EDSStyleSheet.create(theme => ({
    spinnerContainer: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        paddingTop: theme.geometry.dimension.cell.minHeight,
        justifyContent: "space-between",
    },
    scrollContainer: {
        justifyContent: "center",
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    versionHeader: theme.typography.basic.h1,
    subtitleHeader: {
        ...theme.typography.basic.h4,
        marginVertical: theme.spacing.container.paddingVertical,
    },
    footer: {
        alignItems: "flex-end",
        marginHorizontal: theme.spacing.container.paddingHorizontal,
        marginVertical: theme.spacing.container.paddingVertical,
    },
}));
