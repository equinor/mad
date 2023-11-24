import { Canvas as SkiaCanvas, useCanvasRef } from "@shopify/react-native-skia";

import { useCanvasDraw } from "../hooks/useCanvasDraw";
import { CanvasProps, SkiaDrawHandle } from "../types";
import React, { forwardRef, ForwardRefRenderFunction, PropsWithChildren } from "react";
import { CanvasElement } from "./CanvasElement";
import { KeyboardAvoidingView, TextInput } from "react-native";

const CanvasComponent: ForwardRefRenderFunction<SkiaDrawHandle, PropsWithChildren<CanvasProps>> = (
    {
        initialDrawColor = "white",
        initialStrokeWidth = 10,
        children,
        renderChildrenOnTop,
        style,
        onLayout,
    },
    ref,
) => {
    const skiaCanvasRef = useCanvasRef();
    const { currentPenPaths, canvasHistory, currentTool, touchHandler } = useCanvasDraw({
        initialDrawColor,
        initialStrokeWidth,
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
                .map((elementData, index) => (
                    <CanvasElement key={index} data={elementData} currentTool={currentTool} />
                ))}
            {renderChildrenOnTop && children}
        </SkiaCanvas>
    );
};

export const Canvas = forwardRef(CanvasComponent);
