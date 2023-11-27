import React, { useEffect, useState } from "react";
import {
    Accordion,
    CircularProgress,
    EDSStyleSheet,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import { fetchAllReleaseNotes } from "./fetchReleaseNotes";
import { ChangeLog, Release } from "./ChangeLog";
import { useEnvironment, useServicePortalName } from "../../../store/mad-config";
import { getShortDate } from "../../../utils/dateUtils";
import { ScrollView, View } from "react-native";
import * as mockData from "../../../static/mock-data/whats-new.json";
import {useDemoMode} from "../../../store/demo-mode";

export const ReleaseNotesScreen = () => {
    const styles = useStyles(releaseNoteStyles);
    const demoMode = useDemoMode();
    const environment = useEnvironment();
    const servicePortalName = useServicePortalName();

    const [releaseNotes, setReleaseNotes] = useState<Release[] | null>(null);
    const [error, setError] = useState("");
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        if (demoMode.isEnabled) {
            setReleaseNotes([mockData]);
            setIsFetching(false);
        } else {
            fetchAllReleaseNotes(environment, servicePortalName)
                .then(setReleaseNotes)
                .catch((error: Error) => setError(error.message))
                .finally(() => setIsFetching(false));
        }

    }, [demoMode.isEnabled, environment, servicePortalName]);

    const sortReleaseNotes = (releaseNoteA: Release, releaseNoteB: Release) => {
        return releaseNoteA.version < releaseNoteB.version
            ? releaseNoteB.version < releaseNoteA.version
                ? -1
                : 1
            : 0;
    };

    if (isFetching) {
        return (
            <View style={styles.loadingOrNotFoundContainer}>
                <CircularProgress />
            </View>
        );
    }
    if (releaseNotes && releaseNotes.length > 0) {
        releaseNotes.sort(sortReleaseNotes);

        return (
            <ScrollView style={styles.container}>
                <Accordion>
                    {releaseNotes.map((releaseNote: Release, key) => (
                        <Accordion.Item
                            key={key}
                            title={`${releaseNote.version} - ${getShortDate(
                                new Date(releaseNote.releaseDate),
                            )}`}
                        >
                            <ChangeLog release={releaseNote} />
                        </Accordion.Item>
                    ))}
                </Accordion>
            </ScrollView>
        );
    }
    return (
        <View style={styles.loadingOrNotFoundContainer}>
            <Typography>No release notes available</Typography>
            <Typography>{error}</Typography>
        </View>
    );
};

const releaseNoteStyles = EDSStyleSheet.create(theme => ({
    container: {
        marginVertical: theme.spacing.container.paddingVertical,
    },
    loadingOrNotFoundContainer: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));
