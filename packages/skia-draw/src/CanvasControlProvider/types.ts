import type { Color } from "@shopify/react-native-skia";
import type { CanvasTool } from "../Canvas/types";

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
};

export type CanvasControlContextValues = {
    /**
     * The color of the active tool.
     */
    toolColor: Color;
    /**
     * The width of the stroke weight for the pen tool.
     */
    strokeWeight: number;
    /**
     * The type of the active tool.
     */
    toolType: CanvasTool;  
};
