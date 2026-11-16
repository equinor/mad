import React, { useMemo } from "react";
import { View } from "react-native";
import { Token, useToken } from "@equinor/mad-components";
import { EnrichedMarkdownText, type MarkdownStyle } from "react-native-enriched-markdown";

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
    const token = useToken();
    const markdownStyle = useMemo(() => createMarkdownStyle(token), [token]);
    return (
        <View>
            <EnrichedMarkdownText markdownStyle={markdownStyle} markdown={release.releaseNote} />
        </View>
    );
};

/**
 * Diameter of the unordered-list bullet, in points. The library draws a filled
 * shape of this size, so it must stay small relative to the font size.
 */
const BULLET_SIZE = 6;

// Built against the `MarkdownStyle` type (not an RN StyleSheet) so invalid or
// misinterpreted style keys fail at compile time.
const createMarkdownStyle = (theme: Token): MarkdownStyle => {
    const { fontFamily, fontSize, lineHeight } = theme.typography.basic.p;
    const textColor = theme.colors.text.primary;
    const body = { fontFamily, fontSize, lineHeight, color: textColor };

    return {
        paragraph: body,
        list: {
            ...body,
            bulletSize: BULLET_SIZE,
            bulletColor: textColor,
            markerColor: textColor,
            gapWidth: theme.spacing.textField.paddingHorizontal,
            marginLeft: theme.spacing.textField.paddingHorizontal,
            marginTop: theme.spacing.textField.paddingVertical,
            marginBottom: theme.spacing.textField.paddingVertical,
        },
        blockquote: {
            ...body,
            color: theme.colors.text.secondary,
            borderColor: theme.colors.border.medium,
            borderWidth: theme.geometry.border.borderWidth,
            gapWidth: theme.spacing.textField.paddingHorizontal,
        },
    };
};
