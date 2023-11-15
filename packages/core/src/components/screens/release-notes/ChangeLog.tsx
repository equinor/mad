import { getShortDate } from "../../../utils/dateUtils";
import React, { useState } from "react";
import {ScrollView, View} from "react-native";
import RenderHtml, { defaultSystemFonts } from "react-native-render-html";
import * as showdown from "showdown";
import { Typography, Cell, EDSStyleSheet, useStyles } from "@equinor/mad-components";

const converter = new showdown.Converter();
const systemFonts = [...defaultSystemFonts, "Equinor-Regular"];

export type Release = {
    app: string;
    version: string;
    modified: string;
    releaseNote: string;
    releaseDate: string;
};

type ChangeLogProps = {
    release: Release;
};

export const ChangeLog = ({ release }: ChangeLogProps) => {
    const styles = useStyles(changeLogStyles);
    const [width, setWidth] = useState(0);
    const html = { html: converter.makeHtml(release.releaseNote) };
    const date = new Date(release.releaseDate);
    const shortDate = getShortDate(date);


    return (
        <ScrollView>
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
                        // @ts-expect-error Type Mismatch between react-native TextStyle and react-native-render-html
                        li: styles.listItems,
                    }}
                />
            </View>
        </Cell>
        </ScrollView>
    );
};

const changeLogStyles = EDSStyleSheet.create(theme => ({
    container: {
        justifyContent: "center",
    },
    versionHeader: theme.typography.basic.h1,
    subtitleHeader: {
        ...theme.typography.basic.h4,
        marginVertical: theme.spacing.container.paddingVertical
    },
    list: {
        display: "flex",
        listStyleType: "square",
        alignItems: "flex-start",
        paddingLeft: theme.spacing.container.paddingHorizontal,
        marginVertical: theme.spacing.textField.paddingVertical,
        color: theme.colors.text.primary,
    },
    listItems: {
        ...theme.typography.paragraph.body_short,
        marginHorizontal: theme.spacing.textField.paddingHorizontal,
        paddingBottom: theme.spacing.textField.paddingVertical,
    },
}));
