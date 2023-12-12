import { ForwardedRef, MutableRefObject, RefObject, useImperativeHandle } from "react";
import { SkiaDomView, SkRect } from "@shopify/react-native-skia";
import { useRerender } from "./useRerender";
import { CanvasData } from "../Canvas/types";
import { CanvasControls } from "../CanvasControlProvider";

/**
 * responsible for providing the methods available in the ref object like undo, clear, etc.
 * @param ref ForwardedRef<CanvasControls>
 */
export const useCanvasControlHandle = (
    ref: ForwardedRef<CanvasControls>,
    skiaCanvasRef: RefObject<SkiaDomView>,
    canvasHistory: MutableRefObject<CanvasData[]>,
) => {
    const rerender = useRerender();
    useImperativeHandle(ref, () => ({
        undo,
        clear,
        makeImageSnapshot,
    }));

    const undo = () => {
        canvasHistory.current.pop();
        rerender();
    };

    const clear = () => {
        canvasHistory.current = [];
        rerender();
    };

    const makeImageSnapshot = (rect?: SkRect) => {
        const skImage = skiaCanvasRef.current?.makeImageSnapshot(rect) ?? undefined;
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
