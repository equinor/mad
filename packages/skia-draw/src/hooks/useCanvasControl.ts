import { useContext, useMemo } from "react";
import { CanvasControlContext } from "../CanvasControlProvider/CanvasControlProvider";
import { matchFont } from "@shopify/react-native-skia";
import { Platform } from "react-native";

/**
 * Hook that taps into the CanvasControlContext to provide common getters, setters and canvas control methods.
 * This hook is meant to be used in conjunction with the CanvasControlProvider.
 * Use this hook in your custom control panels to communicate with the canvas state.
 */
export const useCanvasControl = () => {
    const {
        toolColor,
        setToolColor,
        strokeWeight,
        setStrokeWeight,
        toolType,
        setToolType,
        text,
        setText,
        canvasRef,
    } = useContext(CanvasControlContext);

    const createNoHandlerWarning = (handlerName: string) => () =>
        console.warn(
            `Control '${handlerName}' is unavailable. Did you forget to pass a canvas ref to the CanvasControlProvider?`,
        );

    const undo = () => canvasRef?.current?.undo() ?? createNoHandlerWarning("undo");
    const clear = () => canvasRef?.current?.clear() ?? createNoHandlerWarning("clear");

    const font = useMemo(() => {
        const fontFamily = Platform.select({ ios: "Helvetica", default: "serif" });
        return matchFont({
            fontFamily,
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "bold",
        });
    }, []);

    return {
        toolColor,
        setToolColor,
        strokeWeight,
        setStrokeWeight,
        toolType,
        setToolType,
        text,
        setText,
        font,
        undo,
        clear,
    };
};
