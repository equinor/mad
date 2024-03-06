import React, { useMemo, useState } from "react";
import { View } from "react-native";
import * as showdown from "showdown";
import { EDSStyleSheet, useStyles, Typography } from "@equinor/mad-components";

const converter = new showdown.Converter();

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
    const html = useMemo(() => ({ html: converter.makeHtml(release.releaseNote) }), [release]);

    return (
        <>
            <View
                onLayout={event => {
                    const { width } = event.nativeEvent.layout;
                    setWidth(width);
                }}
            >
                <Typography> Release notes unavailable. Check back soon!</Typography>
            </View>
        </>
    );
};

const changeLogStyles = EDSStyleSheet.create(theme => ({
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
