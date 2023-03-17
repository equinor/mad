import {
    Canvas as SkiaCanvas,
    CanvasProps as SkiaCanvasProps,
    Path, useCanvasRef,
} from "@shopify/react-native-skia"

import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { useCanvasDraw } from "./hooks/useCanvasDraw";
import { CanvasProps, SkiaDrawHandle } from "./types";
import { forwardRef, ForwardRefRenderFunction, PropsWithChildren } from "react";

const CanvasComponent: ForwardRefRenderFunction<SkiaDrawHandle, PropsWithChildren<CanvasProps>> = ({
    initialDrawColor = "white",
    initialStrokeWidth = 10,
    children,
    renderChildrenOnTop,
    style
}, ref) => {

    const skiaCanvasRef = useCanvasRef();
    const {
        currentPaths,
        pathHistory,
        touchHandler,
    } = useCanvasDraw({
        initialDrawColor,
        initialStrokeWidth,
        ref,
        skiaCanvasRef
    });


    return (
        <SkiaCanvas ref={skiaCanvasRef} style={StyleSheet.flatten([{ flex: 1, backgroundColor: "black" }, style])} onTouch={touchHandler}>
            {!renderChildrenOnTop && children}
            {pathHistory.current.concat(Object.values(currentPaths.current)).map((pathData, index) => (
                <Path
                    key={index}
                    path={pathData.path}
                    color={pathData.color}
                    style="stroke"
                    strokeWidth={pathData.strokeWidth}
                    strokeMiter={1}
                    strokeCap="round"
                    antiAlias
                />
            ))}
            {renderChildrenOnTop && children}
        </SkiaCanvas>
    );
};

export const Canvas = forwardRef(CanvasComponent);