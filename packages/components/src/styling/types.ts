import { TextStyle, ViewStyle } from "react-native";

export type HexColorValue = `#${string}`;
export type RGBAColorValue = `rgba(${string})`;
export type RGBColorValue = `rgb(${string})`;
export type EDSColor = "primary" | "secondary" | "warning" | "danger" | "success";
export type EDSTextColor = "textPrimary" | "textSecondary" | "textTertiary" | "textInverted" | "textDisabled";
export type Color = HexColorValue | RGBAColorValue | RGBColorValue | EDSColor | EDSTextColor;

export type ColorScheme = "light" | "dark";
export type Density = "tablet" | "phone";

export type ColorSchemeValues<T> = Record<ColorScheme, T>;
export type DensityValues<T> = Record<Density, T>;

export type TypographyVariantGroupMap = {
    basic: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label" | "input";
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
            scrim: ColorSchemeValues<string>
        };
        interactive: {
            primary: ColorSchemeValues<string>;
            secondary: ColorSchemeValues<string>;
            success: ColorSchemeValues<string>;
            warning: ColorSchemeValues<string>;
            danger: ColorSchemeValues<string>;
            disabled: ColorSchemeValues<string>;
            pressedOverlay: ColorSchemeValues<string>;
            selectedHighlight: ColorSchemeValues<string>;
        };
        text: {
            primary: ColorSchemeValues<string>;
            secondary: ColorSchemeValues<string>;
            tertiary: ColorSchemeValues<string>;
            primaryInverted: ColorSchemeValues<string>;
            disabled: ColorSchemeValues<string>;
            menu: {
                resting: ColorSchemeValues<string>;
                active: ColorSchemeValues<string>;
            }
        };
    };
    geometry: {
        border: {
            elementBorderRadius: number;
            containerBorderRadius: number;
            borderWidth: number;
            focusedBorderWidth: number;
        };
        dimension: {
            icon: {
                size: number;
            };
            button: {
                minHeight: DensityValues<number>;
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
            dialog: {
                minHeight: DensityValues<number>,
                defaultWidth: DensityValues<number>
                header: {
                    height: DensityValues<number>
                }
            }
        };
        shadow: {
            [TElev in Elevation]: ShadowStyle;
        },
    },
    spacing: {
        container: {
            paddingHorizontal: DensityValues<number>;
            paddingVertical: DensityValues<number>;
        },
        element: {
            paddingHorizontal: DensityValues<number>;
            paddingVertical: DensityValues<number>;
        },
        button: {
            paddingHorizontal: DensityValues<number>;
            paddingVertical: DensityValues<number>;
            iconGap: DensityValues<number>;
        },
        textField: {
            paddingHorizontal: DensityValues<number>;
            paddingVertical: DensityValues<number>;
        }
        menu: {
            paddingVertical: DensityValues<number>;
            item: {
                paddingHorizontal: DensityValues<number>;
                paddingVertical: DensityValues<number>;
                iconGap: DensityValues<number>;
            }
        },
        dialog: {
            padding: DensityValues<number>,
            gap: DensityValues<number>
        }
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
        },
    },
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
