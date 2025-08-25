import { CanvasRef } from "@shopify/react-native-skia";
import { ForwardedRef, RefObject, useMemo, useRef } from "react";
import { createTouchHandlers } from "../Canvas/touchHandlers";
import { CanvasData, PenData, TextData } from "../Canvas/types";
import { CanvasControls } from "../CanvasControlProvider";
import { useCanvasControl } from "./useCanvasControl";
import { useCanvasControlHandle } from "./useCanvasControlHandle";
import { useRerender } from "./useRerender";

type CanvasSetup = {
    ref: ForwardedRef<CanvasControls>;
    skiaCanvasRef: RefObject<CanvasRef | null>;
};

export const useCanvasDraw = ({ ref, skiaCanvasRef }: CanvasSetup) => {
    const { toolColor, strokeWeight, toolType, font, text } = useCanvasControl();
    const currentPenPath = useRef<PenData | null>(null);
    const canvasHistory = useRef<CanvasData[]>([]);
    const draggingText = useRef<TextData | undefined>(undefined);

    const rerender = useRerender();

    useCanvasControlHandle(ref, skiaCanvasRef, canvasHistory);

    const panHandler = useMemo(
        () =>
            createTouchHandlers(toolType, {
                canvasHistory,
                currentPenPath,
                draggingText,
                toolColor,
                strokeWeight,
                text,
                font,
                rerender,
            }),
        [toolType, canvasHistory, currentPenPath, toolColor, strokeWeight, text, font, rerender],
    );

    return {
        currentPenPath,
        canvasHistory,
        draggingText,
        panHandler,
    };
};
