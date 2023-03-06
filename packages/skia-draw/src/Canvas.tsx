import {
    Canvas as SkiaCanvas,
    Path,
} from "@shopify/react-native-skia"

import { View} from "react-native"
import { useCanvasDraw } from "./hooks/useCanvasDraw";
import {CanvasProps, SkiaDrawHandle} from "./types";
import {forwardRef, ForwardRefRenderFunction, PropsWithChildren} from "react";

const CanvasComponent: ForwardRefRenderFunction<SkiaDrawHandle, PropsWithChildren<CanvasProps>> =({
    initialDrawColor = "white",
    initialStrokeWidth = 10,
    children
}, ref) => {

    const {
        currentPaths,
        pathHistory,
        touchHandler,
    } = useCanvasDraw({
        initialDrawColor,
        initialStrokeWidth,
        ref
    });


    return(
        <View style={{flex:1}}>
            <SkiaCanvas style={{flex: 1, backgroundColor: "black"}} onTouch={touchHandler}>
                {children}
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
            </SkiaCanvas>
        </View>
    );
};

export const Canvas = forwardRef(CanvasComponent);