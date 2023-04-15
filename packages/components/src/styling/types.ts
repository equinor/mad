export type ColorScheme = "light" | "dark";
export type Density = "comfortable" | "tight";

type ColorSchemeValues<T> = Record<ColorScheme, T>;
type DensityValues<T> = Record<Density, T>;

export type MasterToken = {
    colors: {
        interactive: {
            primary: ColorSchemeValues<string>;
            secondary: ColorSchemeValues<string>;
            success: ColorSchemeValues<string>;
            warning: ColorSchemeValues<string>;
            danger: ColorSchemeValues<string>;
        },
        text: {
            primary: ColorSchemeValues<string>;
            secondary: ColorSchemeValues<string>;
            tetriary: ColorSchemeValues<string>;
            primaryInverted: ColorSchemeValues<string>;
        },
    },
    geometry: {
        border: {
            elementBorderRadius: number,
            containerBorderRadius: number,
            borderWidth: number,
        },
        dimension: {
            button: {
                minHeight: DensityValues<number>,
                minWidth: DensityValues<number>,
            },
        },
    },
    spacing: {
        paddingHorizontal: DensityValues<number>,
        paddingVertical: DensityValues<number>,
        spacer: {
            small: DensityValues<number>,
            medium: DensityValues<number>,
            large: DensityValues<number>,
        }
    }
};

type WithoutThemeOptionValues<TToken> = {
    [K in keyof TToken]:
    TToken[K] extends ColorSchemeValues<infer U>
    ? U
    : TToken[K] extends DensityValues<infer V>
    ? V
    : TToken[K] extends object
    ? WithoutThemeOptionValues<TToken[K]>
    : TToken[K];
};

export type Theme = WithoutThemeOptionValues<MasterToken>;
