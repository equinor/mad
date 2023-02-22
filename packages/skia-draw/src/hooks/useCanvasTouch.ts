import { Color, Skia, SkiaMutableValue, useTouchHandler, useValue } from "@shopify/react-native-skia";
import { useState } from "react";
import { IdentifiablePathData, PathData } from "../types";
import { useRerender } from "./useRerender";

type CanvasSetup = {
    initialDrawColor: Color,
    initialStrokeWidth: number,
};

export const useCanvasTouch = (setup: CanvasSetup) => {

    const [drawColor, setDrawColor] = useState<Color>(setup.initialDrawColor);
    const [strokeWeight, setStrokeWeight] = useState<number>(setup.initialStrokeWidth);
  
    const pathHistory = useValue<PathData[]>([]);
    const currentPaths = useValue<Record<string, PathData>>({});

    const rerender = useRerender();
    
    const touchHandler = useTouchHandler({
        onStart: ({x, y, id}) => {
            const newPath = Skia.Path.Make();
            newPath.moveTo(x, y);
            currentPaths.current[id] = {
                path: newPath,
                color: drawColor,
                strokeWidth: strokeWeight
            };
            rerender();
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
            rerender();
        }
    });

    const undo = () => {
        pathHistory.current.pop();
        rerender();
    };

    const clear = () => {
        pathHistory.current = [];
        rerender();
    };

    return {
        currentPaths,
        pathHistory,
        touchHandler,
        setStrokeWeight,
        setDrawColor,
        undo,
        clear,
    }
}