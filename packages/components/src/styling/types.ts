export type ColorScheme = "light" | "dark";
export type Density = "comfortable" | "tight";

export type ColorSchemeValues<T> = Record<ColorScheme, T>;
export type DensityValues<T> = Record<Density, T>;

export type MasterToken = {
    colors: {
        border: {
            lighter: ColorSchemeValues<string>,
            light: ColorSchemeValues<string>,
            medium: ColorSchemeValues<string>,
        },
        container: {
            background: ColorSchemeValues<string>;
            default: ColorSchemeValues<string>,
            elevation: {
                none: ColorSchemeValues<string>,
                aboveScrim: ColorSchemeValues<string>,
                raised: ColorSchemeValues<string>,
                overlay: ColorSchemeValues<string>,
                sticky: ColorSchemeValues<string>,
                temporaryNav: ColorSchemeValues<string>,
            }
        },
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
