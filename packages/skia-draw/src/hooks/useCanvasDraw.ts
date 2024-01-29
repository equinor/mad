import { SkiaDomView, useTouchHandler } from "@shopify/react-native-skia";
import { ForwardedRef, RefObject, useRef } from "react";
import { useRerender } from "./useRerender";
import { useCanvasControlHandle } from "./useDrawHandle";
import { CanvasData, PenData, TextData } from "../Canvas/types";
import { createTouchHandlers } from "../Canvas/touchHandlers";
import { CanvasControls } from "../CanvasControlProvider";
import { useCanvasControl } from "./useCanvasControl";

type CanvasSetup = {
    ref: ForwardedRef<CanvasControls>;
    skiaCanvasRef: RefObject<SkiaDomView>;
};

export const useCanvasDraw = ({ ref, skiaCanvasRef }: CanvasSetup) => {
    const { toolColor, strokeWeight, toolType, font, text } = useCanvasControl();
    const currentPenPaths = useRef<Record<number, PenData>>({});
    const draggingText = useRef<TextData>();
    const canvasHistory = useRef<CanvasData[]>([]);

    const rerender = useRerender();

    useCanvasControlHandle(ref, skiaCanvasRef, canvasHistory);

    const touchHandler = useTouchHandler(
        createTouchHandlers(toolType, {
            canvasHistory,
            currentPenPaths,
            draggingText,
            toolColor,
            strokeWeight,
            text,
            font,
            rerender,
        }),
        [toolType, strokeWeight, toolColor, font, text],
    );

    return {
        currentPenPaths,
        canvasHistory,
        draggingText,
        touchHandler,
    };
};
