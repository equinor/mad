import { Skia, Canvas as SkiaCanvas, useCanvasRef } from "@shopify/react-native-skia";

import React, { forwardRef, ForwardRefRenderFunction, PropsWithChildren } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
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

const DrawingCanvas: React.FC = () => {
    const currentPath = useSharedValue(Skia.Path.Make().moveTo(0, 0));

    const pan = Gesture.Pan()
        .averageTouches(true)
        .maxPointers(1)
        .onBegin(e => {
            currentPath.value.moveTo(e.x, e.y);
            currentPath.value.lineTo(e.x, e.y);
            //notifyChange(currentPath);
        })
        .onChange(e => {
            currentPath.value.lineTo(e.x, e.y);
            //notifyChange(currentPath);
        });

    return (
        <GestureDetector gesture={pan}>
            <SkiaCanvas style={{ flex: 1, backgroundColor: "black", width: "100%" }}>
                <CanvasElement
                    isEditing={false}
                    data={{
                        type: "pen",
                        path: currentPath.value,
                        color: "rgba(255, 255, 255, 0.5)",
                        strokeWidth: 40,
                    }}
                />
            </SkiaCanvas>
        </GestureDetector>
    );
};

export const Canvas = forwardRef(CanvasComponent);
