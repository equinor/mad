import { Color, SkFont, Skia } from "@shopify/react-native-skia";
import { CanvasData, CanvasTool, PenData, TextData } from "./types";
import { MutableRefObject } from "react";
import { isInPaddedTextBoundingBox, measureText } from "../utility/boundingTextBox";
import { Gesture, PanGesture } from "react-native-gesture-handler";

type PanHandlerData = {
    canvasHistory: MutableRefObject<CanvasData[]>;
    currentPenPaths: MutableRefObject<Record<number, PenData>>;
    draggingText: MutableRefObject<TextData | undefined>;
    font: SkFont;
    toolColor: Color;
    strokeWeight: number;
    text: string;
    rerender: () => void;
};

function createPenPanHandlers({
    canvasHistory,
    currentPenPaths,
    toolColor,
    strokeWeight,
    rerender,
}: PanHandlerData): PanGesture {
    return Gesture.Pan()
        .onStart(({ x, y }) => {
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
                [0]: newData,
            };
            rerender();
        })
        .onChange(({ x, y }) => {
            currentPenPaths.current = {
                ...currentPenPaths.current,
                [0]: {
                    ...currentPenPaths.current[0],
                    path: currentPenPaths.current[0].path.lineTo(x, y),
                },
            };
        })
        .onEnd(p => {
            canvasHistory.current = [...canvasHistory.current, currentPenPaths.current[0]];
            const currentPathCopy = { ...currentPenPaths.current };
            delete currentPathCopy[p.handlerTag];
            currentPenPaths.current = currentPathCopy;
            rerender();
        });
}

function createTextPanHandlers({
    canvasHistory,
    draggingText,
    toolColor,
    text,
    font,
    rerender,
}: PanHandlerData): PanGesture {
    return Gesture.Pan()
        .onStart(({ x, y }) => {
            const pressedTextIndex = canvasHistory.current.findIndex(item => {
                return (
                    item.type === "text" &&
                    isInPaddedTextBoundingBox({
                        text: item.text,
                        textPosition: item.position,
                        pointPosition: { x, y },
                        font,
                    })
                );
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
        })
        .onChange(({ x, y }) => {
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
        })
        .onEnd(() => {
            if (!draggingText.current) {
                return;
            }
            canvasHistory.current = [...canvasHistory.current, draggingText.current];
            draggingText.current = undefined;
            rerender();
        });
}

export function createTouchHandlers(tool: CanvasTool, data: PanHandlerData): PanGesture {
    switch (tool) {
        case "pen":
            return createPenPanHandlers(data);
        case "text":
            return createTextPanHandlers(data);
    }
}
