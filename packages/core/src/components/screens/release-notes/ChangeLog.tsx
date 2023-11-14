import { getShortDate } from "../../../utils/dateUtils";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import * as showdown from "showdown";
import { Typography, Cell } from "@equinor/mad-components";

const converter = new showdown.Converter();
const systemFonts = [...defaultSystemFonts, "Equinor-Regular"];

export type Release = {
    app: string;
    version: string;
    modified: string;
    releaseNote: string;
    releaseDate: string;
};

type ReleaseProps = {
    release: Release;
};

export const ChangeLog = ({ release }: ReleaseProps) => {
    const [width, setWidth] = useState(0);
    const html = { html: converter.makeHtml(release.releaseNote) };
    const date = new Date(release.releaseDate);
    const shortDate = getShortDate(date);

    return (
        <Cell style={styles.container}>
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
                        ul: styles.list,
                        li: styles.listItems,
                    }}
                />
            </View>
        </Cell>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "white",
    },
    titleHeader: {
        marginVertical: 15,
    },
    versionHeader: {
        fontSize: 28,
        lineHeight: 35,
    },
    subtitleHeader: {
        fontSize: 16,
        marginTop: 23,
    },
    list: {
        display: "flex",
        listStyleType: "square",
        alignItems: "flex-start",
        marginLeft: 0,
        paddingLeft: 32,
        marginTop: 8
    },
    listItems: {
        fontFamily: "Equinor-Regular",
        fontSize: 16,
        lineHeight: 18,
        marginLeft: 8,
        marginBottom: 4
    },
});
