import { getShortDate } from "../../../utils/dateUtils";
import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import * as showdown from "showdown";
import { Typography, Button } from "@equinor/mad-components";

const featureTitle = "What's new";
const affirmText = "OK";
const converter = new showdown.Converter();
const systemFonts = [...defaultSystemFonts, "Equinor-Regular", "Equinor-Medium"];

export type Release = {
    app: string;
    version: string;
    modified: string;
    releaseNote: string;
    releaseDate: string;
};

type ChangelogProps = {
    release: Release;
    onPressAffirm: () => void;
};

export const ChangeLog = ({ release, onPressAffirm }: ChangelogProps) => {
    const [width, setWidth] = useState(0);
    const html = { html: converter.makeHtml(release.releaseNote) };
    const date = new Date(release.releaseDate);
    const shortDate = getShortDate(date);

    return (
        <View style={styles.container}>
            <Typography style={styles.titleHeader} variant="h4">
                {featureTitle}
            </Typography>
            <ScrollView style={styles.changelogItem}>
                <Typography style={styles.versionHeader}>{release.version}</Typography>
                <Typography style={styles.subtitleHeader}>{shortDate}</Typography>
                <View
                    onLayout={event => {
                        const { width } = event.nativeEvent.layout;
                        setWidth(width);
                    }}
                >
                    <RenderHtml
                        contentWidth={width}
                        source={html}
                        systemFonts={systemFonts}
                        tagsStyles={{
                            li: {
                                marginBottom: 10,
                                fontFamily: "Equinor-Medium",
                                fontSize: 18,
                                color: "#333333",
                            },
                        }}
                    />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Button title={affirmText} onPress={onPressAffirm} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        justifyContent: "center",
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
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#808080",
        borderTopWidth: 0.5,
    },
});
