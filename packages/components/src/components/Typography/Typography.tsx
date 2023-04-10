import { Text, TextProps } from "react-native";
import { useDynamicStyle } from "../../hooks/useDynamicStyle";
import {
    typography,
    quickVariants,
    ColorVariants,
    TypographyGroups,
    TypographyVariants,
    typographyColors,
    QuickTypographyVariants,
} from "./Typography.tokens";

import { Typography as TypographyType } from "@equinor/eds-tokens";
import { typographyTemplate } from "../../translations/typographyTemplate";

export type TypographyProps = {
    /** Typography variants, specifies which variant to use. */
    variant?: TypographyVariants;
    /** Typography groups, specifies which group to use. */
    group?: TypographyGroups;
    /** Bold text. */
    bold?: boolean;
    /** Italic text. */
    italic?: boolean;
    /** Typography colors. */
    color?: ColorVariants | string;
};

const resolveColor = (
    color: ColorVariants | string | undefined
): string | undefined => {
    if (!color) return undefined;
    return typographyColors[color as ColorVariants] ?? color;
};

const resolveTypography = (
    variantName: TypographyVariants,
    group: TypographyGroups | undefined
): TypographyType | undefined => {
    // For quick use when using paragraphs and headings we can skip group
    if (!group && quickVariants[variantName as keyof QuickTypographyVariants]) {
        return quickVariants[
            variantName as keyof QuickTypographyVariants
        ] as TypographyType;
    }
    return (typography[group ?? ("" as TypographyGroups)] as any)[
        variantName
    ] as TypographyType;
};

const resolveVariantName = (
    variant: TypographyVariants,
    bold = false,
    italic = false
) =>
    `${variant}${bold ? "_bold" : ""}${
        italic ? "_italic" : ""
    }` as TypographyVariants;

export const Typography = ({
    variant = "body_short",
    group,
    bold,
    italic,
    color,
    children,
    ...rest
}: React.PropsWithChildren<TypographyProps & TextProps>) => {
    const style = useDynamicStyle(() => {
        const variantName = resolveVariantName(variant, bold, italic);
        const typ = resolveTypography(variantName, group);
        if (!typ)
            throw new Error(
                `Typography variant not found for variant "${variantName}" ("${variant}") & group "${
                    group || ""
                }"`
            );
        return typographyTemplate(typ);
    }, [variant, group, color, bold, italic]);
    return (
        <Text
            {...rest}
            style={[style, { color: resolveColor(color) }, rest.style]}
        >
            {children}
        </Text>
    );
};
