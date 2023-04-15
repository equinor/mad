import { useMemo } from "react";
import { StyleSheet } from "react-native";

const createStyleSheet = <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<unknown>>(styles: T | StyleSheet.NamedStyles<T>) =>
    StyleSheet.create(styles);

export const useDynamicStyleSheet = <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<unknown>>(
    style: () => T | StyleSheet.NamedStyles<T>,
    dependencies?: React.DependencyList
) => {
    return useMemo(() => (createStyleSheet(style())), dependencies);
};
