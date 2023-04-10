import { ForwardedRef, RefObject, useImperativeHandle } from "react";
import { PathData, SkiaDrawHandle } from "../types";
import {
    Color,
    SkiaDomView,
    SkiaMutableValue,
    SkRect,
} from "@shopify/react-native-skia";
import { useRerender } from "./useRerender";

type MutableDrawValues = {
    pathHistory: SkiaMutableValue<PathData[]>;
    drawColor: SkiaMutableValue<Color>;
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
    values: MutableDrawValues
) => {
    const rerender = useRerender();
    useImperativeHandle(ref, () => ({
        setColor,
        setStrokeWeight,
        undo,
        clear,
        makeImageSnapshot,
    }));
    const setColor = (c: Color) => {
        values.drawColor.current = c;
    };

    const setStrokeWeight = (n: number) => {
        values.strokeWeight.current = n;
    };

    const undo = () => {
        values.pathHistory.current.pop();
        rerender();
    };

    const clear = () => {
        values.pathHistory.current = [];
        rerender();
    };

    const makeImageSnapshot = (rect?: SkRect) => {
        const skImage =
            skiaCanvasRef.current?.makeImageSnapshot(rect) || undefined;
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
