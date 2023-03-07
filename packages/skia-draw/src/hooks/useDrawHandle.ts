import {ForwardedRef, useImperativeHandle} from "react";
import {PathData, SkiaDrawHandle} from "../types";
import {Color, SkiaMutableValue} from "@shopify/react-native-skia";
import {useRerender} from "./useRerender";

type MutableDrawValues = {
    pathHistory: SkiaMutableValue<PathData[]>
    drawColor: SkiaMutableValue<Color>,
    strokeWeight: SkiaMutableValue<number>
}
/**
 * responsible for providing the methods available in the ref object, like setColor, undo, etc.
 * @param ref ForwardedRef<SkiaDrawHandle>
 * @param values MutableDrawValues
 */
export const useDrawHandle = (ref: ForwardedRef<SkiaDrawHandle>, values: MutableDrawValues) => {
    const rerender = useRerender();
    useImperativeHandle(ref, () => ({
        setColor,
        setStrokeWeight,
        undo,
        clear,
    }))
    const setColor = (c: Color) => {
        values.drawColor.current = c;
    }

    const setStrokeWeight = (n: number) => {
        values.strokeWeight.current = n;
    }

    const undo = () => {
        values.pathHistory.current.pop();
        rerender();
    };

    const clear = () => {
        values.pathHistory.current = [];
        rerender();
    };
}