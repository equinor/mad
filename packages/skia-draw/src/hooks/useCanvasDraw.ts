import { Color, SkiaDomView, useTouchHandler } from "@shopify/react-native-skia";
import { ForwardedRef, RefObject, useRef, useState } from "react";
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
    const [toolColor, setToolColor] = useState<Color>(setup.initialDrawColor);
    const [strokeWeight, setStrokeWeight] = useState<number>(setup.initialStrokeWidth);
    const [toolType, setToolType] = useState<CanvasTool>("pen");
    const currentPenPaths = useRef<Record<number, PenData>>({});
    const canvasHistory = useRef<CanvasData[]>([]);

    const rerender = useRerender();

    useDrawHandle(setup.ref, setup.skiaCanvasRef, canvasHistory, {
        setToolColor,
        setStrokeWeight,
        setToolType,
    });

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
