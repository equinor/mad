import { Text, TextProps, TextStyle } from "react-native";
import React from "react";
import {
    Color,
    EDSStyleSheet,
    TypographyGroup,
    TypographyStyle,
    TypographyVariant,
    resolveColor,
} from "../../styling";
import { useStyles } from "../../hooks/useStyles";

export type TypographyColorVariant =
    | "primary"
    | "secondary"
    | "tertiary"
    | "primaryInverted"
    | "disabled"
    | "warning"
    | "success"
    | "danger";

export type TypographyProps<TGroup extends TypographyGroup = "basic"> = {
    /**
     * Typography groups, specifies which group to use.
     */
    group?: TGroup;
    /**
     * Typography variants, specifies which variant to use.
     */
    variant?: TypographyVariant<TGroup>;
    /**
     * Enable bold text.
     */
    bold?: boolean;
    /**
     * Enable italic text.
     */
    italic?: boolean;
    /**
     * Typography colors.
     */
    color?: Color;
    /**
     * Reference to text object
     */
    ref?: React.ForwardedRef<Text>;
} & TextProps;

export type TextChildren = {
    children: string | string[] | number | undefined | null;
};

const TypographyInner = <TGroup extends TypographyGroup>({
    group = "basic" as TGroup,
    variant,
    bold,
    italic,
    color,
    ref,
    children,
    ...rest
}: TypographyProps<TGroup> & TextChildren) => {
    const styles = useStyles(themeStyles, { group, variant, bold, italic, color });

    return (
        <Text {...rest} ref={ref} style={[styles.text, rest.style]}>
            {children}
        </Text>
    );
};

const resolveFontName = (
    bold: boolean | undefined,
    italic: boolean | undefined,
    defaultName: string,
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
        >,
    ) => {
        const {
            group: group = "basic",
            variant: variant = "p",
            color: color = "textPrimary",
            bold,
            italic,
        } = props;

        const typography = (theme.typography as any)[group as keyof typeof theme.typography][
            variant as any
        ] as TypographyStyle;

        const textStyle: TextStyle = {
            ...typography,
            color: resolveColor(color, theme),
            fontFamily: resolveFontName(bold, italic, typography.fontFamily ?? "Equinor-Regular"),
        };
        return {
            text: textStyle,
        };
    },
);

export const Typography = React.forwardRef(TypographyInner) as <TGroup extends TypographyGroup>(
    p: TypographyProps<TGroup> & TextChildren & TextProps,
) => React.ReactElement;
