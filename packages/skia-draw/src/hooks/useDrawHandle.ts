import { ForwardedRef, MutableRefObject, RefObject, useImperativeHandle } from "react";
import { SkiaDrawHandle } from "../types";
import { Color, SkiaDomView, SkRect } from "@shopify/react-native-skia";
import { useRerender } from "./useRerender";
import { CanvasData, CanvasTool } from "../Canvas/types";

type CanvasSetters = {
    setToolColor: (newColor: Color) => void;
    setStrokeWeight: (newWeight: number) => void;
    setToolType: (newTool: CanvasTool) => void;
};
/**
 * responsible for providing the methods available in the ref object, like setColor, undo, etc.
 * @param ref ForwardedRef<SkiaDrawHandle>
 * @param values MutableDrawValues
 */
export const useDrawHandle = (
    ref: ForwardedRef<SkiaDrawHandle>,
    skiaCanvasRef: RefObject<SkiaDomView>,
    canvasHistory: MutableRefObject<CanvasData[]>,
    setters: CanvasSetters,
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
        setters.setToolColor(c); 
    };

    const setStrokeWeight = (n: number) => {
        setters.setStrokeWeight(n)
    };

    const setTool = (tool: CanvasTool) => {
        setters.setToolType(tool);
    };

    const undo = () => {
        canvasHistory.current.pop();
        rerender();
    };

    const clear = () => {
        canvasHistory.current = [];
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
