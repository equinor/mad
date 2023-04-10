import { useMemo, useState } from "react"
import { ImageStyle, TextStyle, ViewStyle, StyleSheet } from "react-native"

const createStyleSheet = (style: ViewStyle | ImageStyle | TextStyle) => StyleSheet.create({ __main: style }).__main;

export const useDynamicStyle = (
    style: () => ViewStyle | ImageStyle | TextStyle,
    dependencies?: React.DependencyList
) => {
    const [currentStyle, setCurrentStyle] = useState(style());
    useMemo(() => {
        const newStyle = createStyleSheet(style());
        setCurrentStyle(newStyle);
    }, dependencies)
    return currentStyle;
}