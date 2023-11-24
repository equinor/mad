import type { Color } from "@shopify/react-native-skia";
import type { CanvasTool } from "../Canvas/types";
import { Canvas } from "../Canvas/Canvas";

export type CanvasControlProviderProps = {
    /**
     * The initial color of the active tool.
     */
    initialToolColor?: Color;
    /**
     * The initial width of the stroke weight for the pen tool.
     */
    initialStrokeWeight?: number;
    /**
     * The initial type of the active tool.
     */
    initialToolType?: CanvasTool;
    /**
     * The ref to the canvas component.
     */
    canvasRef: React.RefObject<typeof Canvas>;
};

export type CanvasControlContextValues = {
    /**
     * The color of the active tool.
     */
    toolColor: Color;
    /**
     * Sets the color of the active tool.
     */
    setToolColor: (color: Color) => void;
    /**
     * The width of the stroke weight for the pen tool.
     */
    strokeWeight: number;
    /**
     * Sets the width of the stroke weight for the pen tool.
     */
    setStrokeWeight: (strokeWeight: number) => void;
    /**
     * The type of the active tool.
     */
    toolType: CanvasTool;
    /**
     * Sets the type of the active tool.
     */
    setToolType: (toolType: CanvasTool) => void;
    /**
     * The ref to the canvas component.
     */
    canvasRef: React.RefObject<typeof Canvas> | null;
};
