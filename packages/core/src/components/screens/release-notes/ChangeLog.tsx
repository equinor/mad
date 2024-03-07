import React from "react";
import { View } from "react-native";
import { EDSStyleSheet, useStyles } from "@equinor/mad-components";
import Markdown from "react-native-markdown-display";

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
    return (
        <View>
            <Markdown style={styles}>{release.releaseNote}</Markdown>
        </View>
    );
};

const changeLogStyles = EDSStyleSheet.create(theme => ({
    text: {
        ...theme.typography.basic.p,
        color: theme.colors.text.primary,
    },
    bullet_list: {
        display: "flex",
        alignItems: "flex-start",
        marginVertical: theme.spacing.textField.paddingVertical,
        listStyleType: "square",
    },
    list_item: {
        marginHorizontal: theme.spacing.textField.paddingHorizontal,
        paddingBottom: theme.spacing.textField.paddingVertical,
    },
    bullet_list_icon: {
        ...theme.typography.basic.p,
        fontSize: 48,
        lineHeight: 40,
        color: theme.colors.text.primary,
    },
}));
