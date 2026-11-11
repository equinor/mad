import React from "react";
import { View } from "react-native";
import { EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { EnrichedMarkdownText } from 'react-native-enriched-markdown';

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
            <EnrichedMarkdownText
                markdownStyle={styles}
                markdown={release.releaseNote}
            />
        </View>
    );
};

const changeLogStyles = EDSStyleSheet.create(theme => ({
    paragraph: {
        ...theme.typography.basic.p,
        color: theme.colors.text.primary,
    },

    list: {
        ...theme.typography.basic.p,
        color: theme.colors.text.primary,

        bulletSize: 48,
        bulletColor: theme.colors.text.primary,
        marginStart: theme.spacing.textField.paddingHorizontal,
        gapWidth: 12,
        marginVertical: theme.spacing.textField.paddingVertical,
    },
}));
