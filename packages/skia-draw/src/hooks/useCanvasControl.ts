import { useContext } from "react";
import { CanvasControlContext } from "../CanvasControlProvider/CanvasControlProvider";

export const useCanvasControl = () => {
    const {
        toolColor,
        setToolColor,
        strokeWeight,
        setStrokeWeight,
        toolType,
        setToolType,
        canvasRef,
    } = useContext(CanvasControlContext);

    const createNoHandlerWarning = (handlerName: string) => () =>
        console.warn(
            `Control '${handlerName}' is unavailable. Did you forget to pass a canvas ref to the CanvasControlProvider?`,
        );

    const undo = () => canvasRef?.current?.undo() ?? createNoHandlerWarning("undo");
    const clear = () => canvasRef?.current?.clear() ?? createNoHandlerWarning("clear");

    return {
        toolColor,
        setToolColor,
        strokeWeight,
        setStrokeWeight,
        toolType,
        setToolType,
        undo,
        clear,
    };
};
