import { Canvas as SkiaCanvas, useCanvasRef } from "@shopify/react-native-skia";

import React, { forwardRef, ForwardRefRenderFunction, PropsWithChildren } from "react";
import { GestureDetector } from "react-native-gesture-handler";
import { CanvasControls } from "../CanvasControlProvider";
import { useCanvasDraw } from "../hooks/useCanvasDraw";
import { CanvasProps } from "../types";
import { CanvasElement } from "./CanvasElement/CanvasElement";

const CanvasComponent: ForwardRefRenderFunction<CanvasControls, PropsWithChildren<CanvasProps>> = (
    { children, renderChildrenOnTop, style, onLayout },
    ref,
) => {
    const skiaCanvasRef = useCanvasRef();
    const { currentPenPath, canvasHistory, draggingText, panHandler } = useCanvasDraw({
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
                    .concat(currentPenPath.current ?? [])
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
