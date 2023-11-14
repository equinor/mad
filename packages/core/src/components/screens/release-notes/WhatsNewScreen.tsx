import React, { useEffect, useState } from "react";
import { ChangeLog, Release } from "./ChangeLog";
import * as mockData from "../../../static/mock-data/whats-new.json";
import { useAppVersion, useEnvironment, useServicePortalName } from "../../../store/mad-config";
import { useReleaseNotesVersion } from "../../../store/release-notes";
import { Button, CircularProgress } from "@equinor/mad-components";
import { useCoreStackNavigation } from "../../../hooks/useCoreStackNavigation";
import { useDemoMode } from "../../../store/demo-mode";
import { fetchReleaseNotes } from "./fetchReleaseNotes";
import { StyleSheet, View } from "react-native";

/**
 * This screen will display the latest releasenotes
 */
export const WhatsNewScreen = () => {
    const environment = useEnvironment();
    const releaseNotesVersion = useReleaseNotesVersion();
    const servicePortalName = useServicePortalName();
    const navigation = useCoreStackNavigation();
    const demoMode = useDemoMode();
    const appVersion = useAppVersion();
    const [release, setRelease] = useState<Release | null>(null);
    const [error, setError] = useState("");
    const [isFetching, setIsFetching] = useState(true);
    const enableIsFetching = () => setIsFetching(true);
    const disableIsFetching = () => setIsFetching(false);
    const navigate = () => navigation.navigate("Root");

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
        return <CircularProgress />;
    }

    return (
        <View style={styles.container}>
            <ChangeLog release={release} />
            <View style={styles.footer}>
                <Button
                    title="OK"
                    onPress={() => {
                        releaseNotesVersion.setLastDisplayedReleaseNotesVersion(appVersion);
                        navigate();
                    }}
                    style={{ width: 81 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerContainer: {
        display: "flex",
        justifyContent: "center"
    },
    container: {
        display: "flex",
        paddingTop: 48,
        height: "100%",
        justifyContent: "space-between",
    },
    titleHeader: {
        marginVertical: 15,
    },
    changelogItem: {
        marginBottom: 15,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    versionHeader: {
        marginVertical: 15,
    },
    subtitleHeader: {
        fontSize: 18,
        marginVertical: 5,
        color: "#333333",
    },
    footer: {
        alignItems: "flex-end",
        marginRight: 32,
        marginBottom: 16,
    },
});
