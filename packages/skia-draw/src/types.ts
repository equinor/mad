import {
    Color, SkImage,
    SkPath, SkRect,
} from "@shopify/react-native-skia";
import {StyleProp, ViewStyle} from "react-native";

export type SkiaDrawHandle = {
    setColor: (color:Color) => void,
    setStrokeWeight: (weight: number) => void,
    undo: () => void,
    clear: () => void,
    makeImageSnapshot: (rect?: SkRect) => SkiaDrawSnapshot | undefined
}

export type SkiaDrawSnapshot = {
    /**
     * URI containing Base64 data. Can be used with React Native's Image component
     */
    uri: string,

    height: number,
    width: number,
}

export type CanvasProps = { 
    /**
     * Set color for all drawings (paths, shapes, text).
     */
    initialDrawColor?: Color,

    /**
     * Set stroke weight for paths and shapes.
     */
    initialStrokeWidth?: number,

    /**
     * Set this to true if you want to render children of the canvas on top of the drawing instead of behind
     */
    renderChildrenOnTop?: boolean

    style?: StyleProp<ViewStyle>
}

/**
 * Mode for canvas
 */
export type CanvasDrawMode = "draw" | "shape";

export type PathData = {
    path: SkPath,
    color: Color,
    strokeWidth: number,
};

export type IdentifiablePathData = Record<string, PathData>;