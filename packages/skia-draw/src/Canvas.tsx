import {
    Canvas as SkiaCanvas,
    Path,
    SkPath,
    Skia,
    useTouchHandler,
    useValue
} from "@shopify/react-native-skia"
import { View, StyleSheet, Text} from "react-native"

type CanvasProps = { 
    /**
     * Set color for all drawings (paths, shapes, text).
     */
    drawColor?: string,

    /**
     * Set stroke weight for paths and shapes.
     */
    strokeWeight?: number,

    /**
     * Set the draw mode of the canvas
     */
    canvasMode?: CanvasDrawMode,

    /**
     * Toggles debug mode for the canvas
     */
    debugMode?: boolean
    
}

/**
 * Mode for canvas
 */
type CanvasDrawMode = "draw" | "shape";

type PathData = {
    path: SkPath,
    color: string,
    strokeWeight: number,
};

export const Canvas = ({
    drawColor = "white",
    strokeWeight = 10,
    canvasMode,
    debugMode
}: CanvasProps) => {

    const pathHistory = useValue<PathData[]>([]);
    const currentPaths = useValue<Record<string, PathData>>({});

    const touchHandler = useTouchHandler({
        onStart: ({x, y, id}) => {
            const newPath = Skia.Path.Make();
            newPath.moveTo(x, y);
            currentPaths.current[id] = {
                path: newPath,
                color: drawColor,
                strokeWeight
            };
        },
        onActive: ({x, y, id}) => {
            currentPaths.current = {
                ...currentPaths.current,
                [id]: {
                    ...currentPaths.current[id],
                    path: currentPaths.current[id].path.lineTo(x, y),
                }
            } 
        },
        onEnd: ({id}) => {
            pathHistory.current.push(currentPaths.current[id]);
            delete currentPaths.current[id];
        }
    });

    return(
        <View style={{flex:1}}>
            <SkiaCanvas style={{flex: 1, backgroundColor: "black"}} onTouch={touchHandler}>
                {Object.values(currentPaths.current).map((pathData, index) => (
                    <Path 
                        key={index}
                        path={pathData.path}
                        color={pathData.color}
                        style="stroke"
                        strokeWidth={pathData.strokeWeight}
                        strokeMiter={1}
                        strokeCap="round"
                    />
                ))}
            </SkiaCanvas>


        </View>
    );
}

const styles = StyleSheet.create({

    debugContainer: {
        backgroundColor: "rgba(90,90,90,0.3)",
        borderRadius: 30,
        padding: 20,
        position: "absolute",
        top: 0,
        left: 0,
    },

    debugText: {
        flexDirection: "column",
        color: "white",
    }
});
