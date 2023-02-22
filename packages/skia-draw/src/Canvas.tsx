import {
    Canvas as SkiaCanvas,
    Path,
    Color,
} from "@shopify/react-native-skia"

import { View} from "react-native"
import { useCanvasTouch } from "./hooks/useCanvasTouch";
import { CanvasProps } from "./types";

export const Canvas = ({
    initialDrawColor = "white",
    initialStrokeWidth = 10,
    children
}: React.PropsWithChildren<CanvasProps>) => {

    const {
        currentPaths,
        pathHistory,
        touchHandler,
        setDrawColor: _setDrawColor,
        setStrokeWeight: _setStrokeWeight,
        undo: _undo,
        clear: _clear,
    } = useCanvasTouch({
        initialDrawColor,
        initialStrokeWidth
    });

    /// INTERFACE START

    const setColor = (color: Color) => _setDrawColor(color);

    const setStrokeWeight = (weight: number) => _setStrokeWeight(weight);

    const undo = () => _undo

    const clear = () => _clear 

    /// INTERFACE END

    return(
        <View style={{flex:1}}>
            <SkiaCanvas style={{flex: 1, backgroundColor: "black"}} onTouch={touchHandler}>
                {children}
                {Object.values(currentPaths.current).concat(pathHistory.current).map((pathData, index) => (
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