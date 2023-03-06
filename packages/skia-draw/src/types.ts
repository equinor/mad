import {
    Color,
    SkPath,
} from "@shopify/react-native-skia";

export type SkiaDrawHandle = {
    setColor: (color:Color) => void,
    setStrokeWeight: (weight: number) => void,
    undo: () => void,
    clear: () => void,
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