import { Color, SkFont, Skia } from "@shopify/react-native-skia";
import { MutableRefObject } from "react";
import { ComposedGesture, Gesture, GestureType } from "react-native-gesture-handler";
import { isInPaddedTextBoundingBox, measureText } from "../utility/boundingTextBox";
import { CanvasData, CanvasTool, PenData, TextData } from "./types";

type AnyGesture = GestureType | ComposedGesture;

type PanHandlerData = {
    canvasHistory: MutableRefObject<CanvasData[]>;
    currentPenPath: MutableRefObject<PenData | null>;
    draggingText: MutableRefObject<TextData | undefined>;
    font: SkFont;
    toolColor: Color;
    strokeWeight: number;
    text: string;
    rerender: () => void;
};

function createPenPanHandlers({
    canvasHistory,
    currentPenPath,
    toolColor,
    strokeWeight,
    rerender,
}: PanHandlerData): AnyGesture {
    return Gesture.Pan()
        .runOnJS(true)
        .onStart(({ x, y }) => {
            const newPath = Skia.Path.Make();
            newPath.moveTo(x, y);
            const newData: PenData = {
                type: "pen",
                path: newPath,
                color: toolColor,
                strokeWidth: strokeWeight,
            };
            currentPenPath.current = newData;
            rerender();
        })
        .onChange(({ x, y }) => {
            currentPenPath.current?.path.lineTo(x, y);
            rerender();
        })
        .onEnd(() => {
            if (!currentPenPath.current) return;
            canvasHistory.current = [...canvasHistory.current, { ...currentPenPath.current }];
            currentPenPath.current = null;
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
}: PanHandlerData): AnyGesture {
    const panGesture = Gesture.Pan()
        .runOnJS(true)
        .onStart(({ x, y, translationX, translationY }) => {
            const pressedTextIndex = canvasHistory.current.findIndex(item => {
                return (
                    item.type === "text" &&
                    isInPaddedTextBoundingBox({
                        text: item.text,
                        textPosition: item.position,
                        pointPosition: { x: x - translationX, y: y - translationY },
                        font,
                    })
                );
            });

            if (pressedTextIndex === -1) return;

            draggingText.current = canvasHistory.current.at(pressedTextIndex) as TextData;
            canvasHistory.current = canvasHistory.current.filter(
                (_, index) => index !== pressedTextIndex,
            );
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
            canvasHistory.current = [...canvasHistory.current, { ...draggingText.current }];
            draggingText.current = undefined;
            rerender();
        });
    const tapGesture = Gesture.Tap()
        .runOnJS(true)
        .onStart(({ x, y }) => {
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
            canvasHistory.current = [...canvasHistory.current, { ...newText }];
            rerender();
        });
    return Gesture.Race(panGesture, tapGesture);
}

export function createTouchHandlers(tool: CanvasTool, data: PanHandlerData): AnyGesture {
    switch (tool) {
        case "pen":
            return createPenPanHandlers(data);
        case "text":
            return createTextPanHandlers(data);
    }
}
