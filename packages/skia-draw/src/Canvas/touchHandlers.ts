import { Color, SkFont, Skia, TouchHandlers } from "@shopify/react-native-skia";
import { CanvasData, CanvasTool, PenData, TextData } from "./types";
import { MutableRefObject } from "react";
import { isInPaddedTextBoundingBox, measureText } from "../utility/boundingTextBox";

type TouchHandlerData = {
    canvasHistory: MutableRefObject<CanvasData[]>;
    currentPenPaths: MutableRefObject<Record<number, PenData>>;
    draggingText: MutableRefObject<TextData | undefined>;
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
    draggingText,
    toolColor,
    text,
    font,
    rerender,
}: TouchHandlerData): TouchHandlers {
    return {
        onStart: ({ x, y }) => {
            const pressedTextIndex = canvasHistory.current
                .findIndex(item => {
                    return item.type === "text" && isInPaddedTextBoundingBox({
                        text: item.text,
                        textPosition: item.position,
                        pointPosition: { x, y },
                        font,
                    });
                });

            if (pressedTextIndex !== -1) {
                draggingText.current = canvasHistory.current.at(pressedTextIndex) as TextData;
                canvasHistory.current = canvasHistory.current.filter(
                    (_, index) => index !== pressedTextIndex,
                );
                rerender();
                return;
            }
            if (!text) return;
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
        onActive: ({ x, y }) => {
            if (!draggingText.current) {
                return;
            }
            draggingText.current = {
                ...draggingText.current,
                position: {
                    x:
                        x -
                        measureText(draggingText.current.text, draggingText.current.font).width / 2,
                    y,
                },
            };
            rerender();
        },
        onEnd: () => {
            if (!draggingText.current) {
                return;
            }
            canvasHistory.current = [...canvasHistory.current, draggingText.current];
            draggingText.current = undefined;
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
