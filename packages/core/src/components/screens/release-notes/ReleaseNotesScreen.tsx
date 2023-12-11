import React from "react";
import {
    Accordion,
    CircularProgress,
    EDSStyleSheet,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import { ChangeLog, Release } from "./ChangeLog";
import { getShortDate } from "../../../utils/dateUtils";
import { ScrollView, View } from "react-native";
import { useReleaseNotes } from "../../../hooks/UseReleaseNotes";
import { useScreenTitleFromDictionary } from "../../../hooks/useScreenTitleFromDictionary";

export const ReleaseNotesScreen = () => {
    useScreenTitleFromDictionary(dic => dic.releaseNotes.releaseNotes);
    const styles = useStyles(releaseNoteStyles);
    const { releaseNotes, isFetching, error } = useReleaseNotes();

    if (isFetching) {
        return (
            <View style={styles.loadingOrNotFoundContainer}>
                <CircularProgress />
            </View>
        );
    }
    if (releaseNotes && releaseNotes.length > 0) {
        return (
            <ScrollView style={styles.container}>
                <Accordion>
                    {releaseNotes.map((releaseNote: Release, key) => (
                        <Accordion.Item
                            key={key}
                            title={`${releaseNote.version} - ${getShortDate(
                                new Date(releaseNote.releaseDate),
                            )}`}
                            chevronPosition={"right"}
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
