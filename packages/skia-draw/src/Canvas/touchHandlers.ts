import { Color, SkFont, Skia, TouchHandlers, useFont } from "@shopify/react-native-skia";
import { CanvasData, CanvasTool, PenData, TextData } from "./types";
import { MutableRefObject } from "react";

type TouchHandlerData = {
    canvasHistory: MutableRefObject<CanvasData[]>;
    currentPenPaths: MutableRefObject<Record<number, PenData>>;
    font: SkFont;
    toolColor: Color;
    strokeWeight: number;
    text: string;
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
            };
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
            const currentPathCopy = { ...currentPenPaths.current };
            delete currentPathCopy[id];
            currentPenPaths.current = currentPathCopy;
            rerender();
        },
    };
}

function createTextTouchHandlers({
    canvasHistory,
    toolColor,
    text,
    font,
    rerender,
}: TouchHandlerData): TouchHandlers {
    return {
        onStart: ({ x, y }) => {
            const pressedText = canvasHistory.current
                .filter(item => item.type === "text")
                .find(item => {
                    const text = item as TextData;
                    const width = text.font.getTextWidth(text.text);
                    const height = text.font.getSize();
                    return (
                        x >= text.position.x &&
                        x <= text.position.x + width &&
                        y >= text.position.y &&
                        y <= text.position.y + height
                    );
                });
            if (pressedText) {
                return;
            }
            const newText: TextData = {
                type: "text",
                font,
                text,
                position: {
                    x,
                    y,
                },
                color: toolColor,
            };
            canvasHistory.current = [...canvasHistory.current, newText];
            rerender();
        },
    };
}

export function createTouchHandlers(tool: CanvasTool, data: TouchHandlerData): TouchHandlers {
    switch (tool) {
        case "pen":
            return createPenTouchHandlers(data);
        case "text":
            return createTextTouchHandlers(data);
    }
}
