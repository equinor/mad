import { StyleSheet } from "react-native";

import type { ThemeDependentStyles } from "../styling";
import { useDynamicStyleSheet } from "./useDynamicStyleSheet";
import { useToken } from "./useToken";

export function useStyles<TName extends StyleSheet.NamedStyles<TName> | StyleSheet.NamedStyles<unknown>, TProps>(themeStyles: ThemeDependentStyles<TProps, TName>, props: TProps) {
    const currentTheme = useToken();
    return useDynamicStyleSheet<TName>(() => themeStyles(currentTheme, props), [currentTheme, props]);
}