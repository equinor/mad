import { ForwardedRef, RefObject, useImperativeHandle } from "react";
import { SkiaDrawHandle } from "../types";
import { Color, SkiaDomView, SkiaMutableValue, SkRect } from "@shopify/react-native-skia";
import { useRerender } from "./useRerender";
import { CanvasData, CanvasTool } from "../Canvas/types";

type MutableDrawValues = {
    toolType: SkiaMutableValue<CanvasTool>;
    canvasHistory: SkiaMutableValue<CanvasData[]>;
    toolColor: SkiaMutableValue<Color>;
    strokeWeight: SkiaMutableValue<number>;
};
/**
 * responsible for providing the methods available in the ref object, like setColor, undo, etc.
 * @param ref ForwardedRef<SkiaDrawHandle>
 * @param values MutableDrawValues
 */
export const useDrawHandle = (
    ref: ForwardedRef<SkiaDrawHandle>,
    skiaCanvasRef: RefObject<SkiaDomView>,
    values: MutableDrawValues,
) => {
    const rerender = useRerender();
    useImperativeHandle(ref, () => ({
        setColor,
        setStrokeWeight,
        setTool,
        undo,
        clear,
        makeImageSnapshot,
    }));
    const setColor = (c: Color) => {
        values.toolColor.current = c;
    };

    const setStrokeWeight = (n: number) => {
        values.strokeWeight.current = n;
    };

    const setTool = (tool: CanvasTool) => {
        values.toolType.current = tool;
        rerender();
    };

    const undo = () => {
        values.canvasHistory.current.pop();
        rerender();
    };

    const clear = () => {
        values.canvasHistory.current = [];
        rerender();
    };

    const makeImageSnapshot = (rect?: SkRect) => {
        const skImage = skiaCanvasRef.current?.makeImageSnapshot(rect) || undefined;
        if (skImage === undefined) return undefined;
        const b64Data = skImage.encodeToBase64();
        const uri = `data:image/png;base64,${b64Data}`;
        const height = skImage.height() / 2;
        const width = skImage.width() / 2;
        return {
            uri,
            height,
            width,
        };
    };
};
