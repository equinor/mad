import { Canvas as SkiaCanvas, useCanvasRef } from "@shopify/react-native-skia";

import { useCanvasDraw } from "../hooks/useCanvasDraw";
import { CanvasProps, SkiaDrawHandle } from "../types";
import React, { forwardRef, ForwardRefRenderFunction, PropsWithChildren } from "react";
import { CanvasElement } from "./CanvasElement";

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
    const { currentPenPaths, canvasHistory, touchHandler } = useCanvasDraw({
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
                .map((pathData, index) => (
                    <CanvasElement key={index} data={pathData} />
                ))}
            {renderChildrenOnTop && children}
        </SkiaCanvas>
    );
};

export const Canvas = forwardRef(CanvasComponent);
