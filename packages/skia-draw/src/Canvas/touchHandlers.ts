import { Color, Skia, SkiaMutableValue, TouchHandlers } from "@shopify/react-native-skia";
import { CanvasData, CanvasTool, PenData } from "./types";

type TouchHandlerData = {
    canvasHistory: SkiaMutableValue<CanvasData[]>;
    currentPenPaths: SkiaMutableValue<Record<string, PenData>>;
    toolColor: SkiaMutableValue<Color>;
    strokeWeight: SkiaMutableValue<number>;
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
            currentPenPaths.current[id] = {
                type: "pen",
                path: newPath,
                color: toolColor.current,
                strokeWidth: strokeWeight.current,
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
            canvasHistory.current.push(currentPenPaths.current[id]);
            delete currentPenPaths.current[id];
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

        default:
            return createPenTouchHandlers(data);
    }
}
