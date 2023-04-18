import { StyleSheet } from "react-native";

import type { ThemeDependentStyles } from "../styling";
import { useDynamicStyleSheet } from "./useDynamicStyleSheet";
import { useToken } from "./useToken";

type InferStyles<T> = T extends ThemeDependentStyles<any, infer R> ? R : never;

export function useStyles<
    TName extends StyleSheet.NamedStyles<TName> | StyleSheet.NamedStyles<unknown>
>(
    themeStyles: ThemeDependentStyles<undefined, TName>
): InferStyles<typeof themeStyles>;
export function useStyles<
    TName extends StyleSheet.NamedStyles<TName> | StyleSheet.NamedStyles<unknown>,
    TProps
>(
    themeStyles: ThemeDependentStyles<TProps, TName>,
    props: TProps
): InferStyles<typeof themeStyles>;
export function useStyles<
    TName extends StyleSheet.NamedStyles<TName> | StyleSheet.NamedStyles<unknown>,
    TProps
>(
    themeStyles: ThemeDependentStyles<TProps, TName>,
    props?: TProps
) {
    const currentTheme = useToken();
    return useDynamicStyleSheet<TName>(
        () => themeStyles(currentTheme, props as TProps),
        [currentTheme, props]
    );
}