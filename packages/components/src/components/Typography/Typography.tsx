import { Text, TextProps } from "react-native";
import React from "react";
import {
    EDSStyleSheet,
    Theme,
    TypographyGroup,
    TypographyStyle,
    TypographyVariant,
} from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { TextStyle } from "react-native";

export type TypographyColorVariant =
    | "primary"
    | "secondary"
    | "tetriary"
    | "primaryInverted"
    | "disabled"
    | "warning"
    | "success"
    | "danger";

export type TypographyProps<TGroup extends TypographyGroup = "basic"> = {
    /** Typography groups, specifies which group to use. */
    group?: TGroup;
    /** Typography variants, specifies which variant to use. */
    variant?: TypographyVariant<TGroup>;
    /** Bold text. */
    bold?: boolean;
    /** Italic text. */
    italic?: boolean;
    /** Typography colors. */
    color?: TypographyColorVariant;
    /** Reference to text object */
    ref?: React.ForwardedRef<Text>;
};

type TextChildren = { children: string | string[] | number | undefined | null };

const TypographyInner = <TGroup extends TypographyGroup>({
    group = "basic" as TGroup,
    variant,
    bold,
    italic,
    color,
    ref,
    children,
    ...rest
}: TypographyProps<TGroup> & TextChildren & TextProps) => {
    const styles = useStyles(themeStyles, { group, variant, bold, italic, color });

    return (
        <Text {...rest} ref={ref} style={[styles.text, rest.style]}>
            {children}
        </Text>
    );
};

const resolveColor = (color: TypographyColorVariant, theme: Theme) => {
    if (
        color === "primary" ||
        color === "secondary" ||
        color === "tetriary" ||
        color === "primaryInverted"
    ) {
        return theme.colors.text[color];
    }
    if (color === "disabled") {
        return theme.colors.text.tetriary;
    }
    return theme.colors.interactive[color];
};

const resolveFontName = (
    bold: boolean | undefined,
    italic: boolean | undefined,
    defaultName: string
) => {
    let fontName = defaultName;
    if (bold) {
        fontName = fontName.replace(/Regular|Medium|Light/gi, "Bold");
    }
    if (italic) fontName += "Italic";
    fontName = fontName.replace("RegularItalic", "Italic");
    return fontName;
};

const themeStyles = EDSStyleSheet.create(
    (
        theme,
        props: Pick<
            TypographyProps<TypographyGroup>,
            "group" | "variant" | "color" | "bold" | "italic"
        >
    ) => {
        const {
            group: group = "basic",
            variant: variant = "p",
            color: color = "primary",
            bold,
            italic,
        } = props;

        const typography = (theme.typography as any)[
            group as keyof typeof theme.typography
        ][variant as any] as TypographyStyle;

        const textStyle: TextStyle = {
            ...typography,
            color: resolveColor(color, theme),
            fontFamily: resolveFontName(
                bold,
                italic,
                typography.fontFamily ?? "Equinor-Regular"
            ),
        };
        return {
            text: textStyle,
        };
    }
);

export const Typography = React.forwardRef(TypographyInner) as <
    TGroup extends TypographyGroup
>(
    p: TypographyProps<TGroup> & TextChildren & TextProps
) => React.ReactElement;
Typography.displayName = "Typography";
