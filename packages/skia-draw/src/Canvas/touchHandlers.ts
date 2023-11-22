import { Color, Skia, TouchHandlers } from "@shopify/react-native-skia";
import { CanvasData, CanvasTool, PenData } from "./types";
import { MutableRefObject } from "react";

type TouchHandlerData = {
    canvasHistory: MutableRefObject<CanvasData[]>;
    currentPenPaths: MutableRefObject<Record<number, PenData>>;
    toolColor: Color;
    strokeWeight: number;
    rerender: () => void;
};

function createPenTouchHandlers({
    canvasHistory,
    currentPenPaths,
    toolColor,
    strokeWeight,
    rerender,
}: TouchHandlerData): TouchHandlers {
    return {
        onStart: ({ x, y, id }) => {
            const newPath = Skia.Path.Make();
            newPath.moveTo(x, y);
            const newData: PenData = {
                type: "pen",
                path: newPath,
                color: toolColor,
                strokeWidth: strokeWeight,
            }
            currentPenPaths.current = {
                ...currentPenPaths.current,
                [id]: newData,
            };
            rerender();
        },
        onActive: ({ x, y, id }) => {
            currentPenPaths.current = {
                ...currentPenPaths.current,
                [id]: {
                    ...currentPenPaths.current[id],
                    path: currentPenPaths.current[id].path.lineTo(x, y),
                },
            };
        },
        onEnd: ({ id }) => {
            canvasHistory.current = [...canvasHistory.current, currentPenPaths.current[id]];
            const currentPathCopy = {...currentPenPaths.current};
            delete currentPathCopy[id];
            currentPenPaths.current = currentPathCopy;
            rerender();
        },
    };
}

function createTextTouchHandlers({
    canvasHistory,
    toolColor,
    rerender,
}: TouchHandlerData): TouchHandlers {
    return {};
}

export function createTouchHandlers(tool: CanvasTool, data: TouchHandlerData): TouchHandlers {
    switch (tool) {
        case "pen":
            return createPenTouchHandlers(data);
        case "text":
            return createTextTouchHandlers(data);
    }
    return createPenTouchHandlers(data);
}
