import { Canvas as SkiaCanvas, useCanvasRef } from "@shopify/react-native-skia";

import { useCanvasDraw } from "../hooks/useCanvasDraw";
import { CanvasProps } from "../types";
import React, { forwardRef, ForwardRefRenderFunction, PropsWithChildren } from "react";
import { CanvasElement } from "./CanvasElement/CanvasElement";
import { CanvasControls } from "../CanvasControlProvider";
import { GestureDetector } from "react-native-gesture-handler";

const CanvasComponent: ForwardRefRenderFunction<CanvasControls, PropsWithChildren<CanvasProps>> = (
    { children, renderChildrenOnTop, style, onLayout },
    ref,
) => {
    const skiaCanvasRef = useCanvasRef();
    const { currentPenPaths, canvasHistory, draggingText, panHandler } = useCanvasDraw({
        ref,
        skiaCanvasRef,
    });
    return (
        <GestureDetector gesture={panHandler}>
            <SkiaCanvas
                ref={skiaCanvasRef}
                style={[{ flex: 1, backgroundColor: "black", width: "100%" }, style]}
                onLayout={onLayout}
            >
                {!renderChildrenOnTop && children}
                {canvasHistory.current
                    .concat(Object.values(currentPenPaths.current))
                    .map((elementData, index) => (
                        <CanvasElement key={index} data={elementData} isEditing={false} />
                    ))}
                {draggingText.current && (
                    <CanvasElement key="textDrag" data={draggingText.current} isEditing={true} />
                )}
                {renderChildrenOnTop && children}
            </SkiaCanvas>
        </GestureDetector>
    );
};

export const Canvas = forwardRef(CanvasComponent);
