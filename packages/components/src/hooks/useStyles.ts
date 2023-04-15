import { StyleSheet } from "react-native";

import type { ThemeDependentStyles } from "../styling";
import { useDynamicStyleSheet } from "./useDynamicStyleSheet";
import { useTheme } from "./useTheme";

export function useStyles<TName extends StyleSheet.NamedStyles<TName> | StyleSheet.NamedStyles<unknown>, TProps>(themeStyles: ThemeDependentStyles<TName, TProps>, props: TProps | undefined = undefined) {
    const currentTheme = useTheme();
    return useDynamicStyleSheet<TName>(() => themeStyles(currentTheme, props), [currentTheme, props]);
}