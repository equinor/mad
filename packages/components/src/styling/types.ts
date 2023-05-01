import { TextStyle, ViewStyle } from "react-native";

export type HexColorValue = `#${string}`;
export type RGBAColorValue = `rgba(${string})`;
export type RGBColorValue = `rgb(${string})`;
export type EDSColor = "primary" | "secondary" | "warning" | "danger" | "success";
export type EDSTextColor = "textPrimary" | "textSecondary" | "textTertiary" | "textInverted";
export type Color = HexColorValue | RGBAColorValue | RGBColorValue | EDSColor | EDSTextColor;

export type ColorScheme = "light" | "dark";
export type Density = "tablet" | "phone";

export type ColorSchemeValues<T> = Record<ColorScheme, T>;
export type DensityValues<T> = Record<Density, T>;

export type TypographyVariantGroupMap = {
    basic: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";
    interactive: "button";
    ui: "tooltip";
    cell: "groupTitle" | "title" | "description"
};
export type TypographyGroup = keyof TypographyVariantGroupMap;
export type TypographyVariant<TKey extends TypographyGroup> =
    TypographyVariantGroupMap[TKey];

export type Elevation =
    | "raised"
    | "none"
    | "overlay"
    | "sticky"
    | "temporaryNav"
    | "aboveScrim";

export type TypographyStyle = Pick<
    TextStyle,
    "fontFamily" | "fontSize" | "letterSpacing" | "textTransform" | "textAlign" | "lineHeight" | "paddingTop"
>;
export type ShadowStyle = Pick<
    ViewStyle,
    | "shadowColor"
    | "shadowOffset"
    | "shadowOpacity"
    | "shadowRadius"
    | "elevation"
>;

export type MasterToken = {
    colors: {
        border: {
            lighter: ColorSchemeValues<string>;
            light: ColorSchemeValues<string>;
            medium: ColorSchemeValues<string>;
        };
        container: {
            background: ColorSchemeValues<string>;
            default: ColorSchemeValues<string>;
            elevation: {
                none: ColorSchemeValues<string>;
                aboveScrim: ColorSchemeValues<string>;
                raised: ColorSchemeValues<string>;
                overlay: ColorSchemeValues<string>;
                sticky: ColorSchemeValues<string>;
                temporaryNav: ColorSchemeValues<string>;
            };
        };
        interactive: {
            primary: ColorSchemeValues<string>;
            secondary: ColorSchemeValues<string>;
            success: ColorSchemeValues<string>;
            warning: ColorSchemeValues<string>;
            danger: ColorSchemeValues<string>;
            pressedOverlay: ColorSchemeValues<string>;
        };
        text: {
            primary: ColorSchemeValues<string>;
            secondary: ColorSchemeValues<string>;
            tertiary: ColorSchemeValues<string>;
            primaryInverted: ColorSchemeValues<string>;
        };
    };
    geometry: {
        border: {
            elementBorderRadius: number;
            containerBorderRadius: number;
            borderWidth: number;
        };
        dimension: {
            button: {
                minHeight: DensityValues<number>;
                minWidth: DensityValues<number>;
            };
            icon: {
                size: number;
            };
            toggleButton: {
                minHeight: DensityValues<number>;
                minWidth: DensityValues<number>;
            };
            cell: {
                minHeight: number;
                navigation: {
                    height: DensityValues<number>;
                };
                accordion: {
                    height: DensityValues<number>;
                },
                adornment: {
                    widthSmall: DensityValues<number>;
                    widthMedium: DensityValues<number>;
                    widthLarge: DensityValues<number>;
                };
            };
        };
        shadow: {
            [TElev in Elevation]: ShadowStyle;
        };
    };
    spacing: {
        container: {
            paddingHorizontal: DensityValues<number>;
            paddingVertical: DensityValues<number>;
        };
        cell: {
            group: {
                titleBottomPadding: DensityValues<number>;
            }
            content: {
                titleDescriptionGap: DensityValues<number>;
            },
            paddingVertical: DensityValues<number>;
            gapHorizontal: DensityValues<number>;

        }
        spacer: {
            small: DensityValues<number>;
            medium: DensityValues<number>;
            large: DensityValues<number>;
        };
    };
    typography: {
        [TGroup in TypographyGroup]: {
            [TKey in TypographyVariant<TGroup>]: TypographyStyle;
        };
    };
    timing: {
        animation: {
            slow: number;
            normal: number;
            fast: number;
        }
    }
};

type WithoutThemeOptionValues<TToken> = {
    [K in keyof TToken]: TToken[K] extends ColorSchemeValues<infer U>
    ? U
    : TToken[K] extends DensityValues<infer V>
    ? V
    : TToken[K] extends object
    ? WithoutThemeOptionValues<TToken[K]>
    : TToken[K];
};

export type Theme = WithoutThemeOptionValues<MasterToken>;
