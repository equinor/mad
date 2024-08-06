import { ImageFormat, SkiaDomView } from "@shopify/react-native-skia";
import { ForwardedRef, MutableRefObject, RefObject, useImperativeHandle } from "react";
import { CanvasData } from "../Canvas/types";
import { CanvasControls } from "../CanvasControlProvider";
import { ImageSnapshotConfig, SkiaDrawSnapshot } from "../types";
import { useRerender } from "./useRerender";

const ImageFormatMimeTypeMap: Record<ImageFormat, string> = {
    [ImageFormat.JPEG]: "image/jpeg",
    [ImageFormat.PNG]: "image/png",
    [ImageFormat.WEBP]: "image/webp",
};

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

    const makeImageSnapshot = (config?: ImageSnapshotConfig): SkiaDrawSnapshot | undefined => {
        const skImage = skiaCanvasRef.current?.makeImageSnapshot(config?.rect) ?? undefined;
        if (skImage === undefined) return undefined;
        const imageFormat = config?.imageFormat ?? ImageFormat.PNG;
        const b64Data = skImage.encodeToBase64(imageFormat, config?.quality ?? 100);
        const data = b64Data;
        const uri = `data:${ImageFormatMimeTypeMap[imageFormat]};base64,${b64Data}`;
        const height = skImage.height() / 2;
        const width = skImage.width() / 2;
        return {
            data,
            uri,
            height,
            width,
        };
    };
};
