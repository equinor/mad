export type ColorScheme = "light" | "dark";
export type Density = "comfortable" | "tight";

type ColorSchemeValues<T> = Record<ColorScheme, T>;
type DensityValues<T> = Record<Density, T>;

export type MasterToken = {
    colors: {
        primary: ColorSchemeValues<string>;
        background: ColorSchemeValues<string>;
        text: ColorSchemeValues<string>;
        someConstant: string;
    },
    shapes: {
        padding: {
            button: DensityValues<number>;
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
