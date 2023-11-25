import { SkiaDomView, useTouchHandler } from "@shopify/react-native-skia";
import { ForwardedRef, RefObject, useRef } from "react";
import { useRerender } from "./useRerender";
import { useCanvasControlHandle } from "./useDrawHandle";
import { CanvasData, PenData } from "../Canvas/types";
import { createTouchHandlers } from "../Canvas/touchHandlers";
import { CanvasControls } from "../CanvasControlProvider";
import { useCanvasControl } from "./useCanvasControl";

type CanvasSetup = {
    ref: ForwardedRef<CanvasControls>;
    skiaCanvasRef: RefObject<SkiaDomView>;
};

export const useCanvasDraw = ({ ref, skiaCanvasRef }: CanvasSetup) => {
    const { toolColor, strokeWeight, toolType } = useCanvasControl();
    const currentPenPaths = useRef<Record<number, PenData>>({});
    const canvasHistory = useRef<CanvasData[]>([]);

    const rerender = useRerender();

    useCanvasControlHandle(ref, skiaCanvasRef, canvasHistory);

    const touchHandler = useTouchHandler(
        createTouchHandlers(toolType, {
            canvasHistory,
            currentPenPaths,
            toolColor,
            strokeWeight,
            rerender,
        }),
        [toolType, strokeWeight, toolColor],
    );

    return {
        currentPenPaths,
        canvasHistory,
        currentTool: toolType,
        touchHandler,
    };
};
