import { Color, SkiaDomView, useTouchHandler, useValue } from "@shopify/react-native-skia";
import { ForwardedRef, RefObject } from "react";
import { SkiaDrawHandle } from "../types";
import { useRerender } from "./useRerender";
import { useDrawHandle } from "./useDrawHandle";
import { CanvasData, CanvasTool, PenData } from "../Canvas/types";
import { createTouchHandlers } from "../Canvas/touchHandlers";

type CanvasSetup = {
    initialDrawColor: Color;
    initialStrokeWidth: number;
    ref: ForwardedRef<SkiaDrawHandle>;
    skiaCanvasRef: RefObject<SkiaDomView>;
};

export const useCanvasDraw = (setup: CanvasSetup) => {
    const toolColor = useValue<Color>(setup.initialDrawColor);
    const strokeWeight = useValue<number>(setup.initialStrokeWidth);
    const currentPenPaths = useValue<Record<string, PenData>>({});
    const canvasHistory = useValue<CanvasData[]>([]);
    const toolType = useValue<CanvasTool>("pen");

    const rerender = useRerender();

    useDrawHandle(setup.ref, setup.skiaCanvasRef, {
        toolColor,
        strokeWeight,
        canvasHistory,
        toolType,
    });

    const touchHandler = useTouchHandler(
        createTouchHandlers(toolType.current, {
            canvasHistory,
            currentPenPaths,
            toolColor,
            strokeWeight,
            rerender,
        }),
        [toolType.current],
    );

    return {
        currentPenPaths,
        canvasHistory,
        currentTool: toolType.current,
        touchHandler,
    };
};
