import { StyleSheet } from "react-native";

import type { ThemeDependentStyles } from "../styling";
import { useDynamicStyleSheet } from "./useDynamicStyleSheet";
import { useTheme } from "./useTheme";

export function useStyles<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<unknown>>(themeStyles: ThemeDependentStyles<T>) {
    const currentTheme = useTheme();
    return useDynamicStyleSheet<T>(() => themeStyles(currentTheme), [currentTheme])

}