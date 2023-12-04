import { Canvas as SkiaCanvas, useCanvasRef } from "@shopify/react-native-skia";

import { useCanvasDraw } from "../hooks/useCanvasDraw";
import { CanvasProps } from "../types";
import React, { forwardRef, ForwardRefRenderFunction, PropsWithChildren } from "react";
import { CanvasElement } from "./CanvasElement/CanvasElement";
import { CanvasControls } from "../CanvasControlProvider";

const CanvasComponent: ForwardRefRenderFunction<CanvasControls, PropsWithChildren<CanvasProps>> = (
    { children, renderChildrenOnTop, style, onLayout },
    ref,
) => {
    const skiaCanvasRef = useCanvasRef();
    const { currentPenPaths, canvasHistory, draggingText, currentTool, touchHandler } =
        useCanvasDraw({
            ref,
            skiaCanvasRef,
        });
    return (
        <SkiaCanvas
            ref={skiaCanvasRef}
            style={[{ flex: 1, backgroundColor: "black", width: "100%" }, style]}
            onTouch={touchHandler}
            onLayout={onLayout}
        >
            {!renderChildrenOnTop && children}
            {canvasHistory.current
                .concat(Object.values(currentPenPaths.current))
                .concat(draggingText.current ? [draggingText.current] : [])
                .map((elementData, index) => (
                    <CanvasElement key={index} data={elementData} currentTool={currentTool} />
                ))}
            {renderChildrenOnTop && children}
        </SkiaCanvas>
    );
};

export const Canvas = forwardRef(CanvasComponent);
