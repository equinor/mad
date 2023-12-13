import { Color } from "@shopify/react-native-skia";
import React, { useState, PropsWithChildren, createContext } from "react";
import { CanvasTool } from "../Canvas/types";
import { CanvasControlContextValues, CanvasControlProviderProps } from "./types";

const defaultContextValues: CanvasControlContextValues = {
    toolColor: "red",
    setToolColor: () => null,
    strokeWeight: 10,
    setStrokeWeight: () => null,
    toolType: "pen",
    setToolType: () => null,
    text: "",
    setText: () => null,
    canvasRef: null,
};

export const CanvasControlContext = createContext<CanvasControlContextValues>(defaultContextValues);

export const CanvasControlProvider = ({
    initialToolType = defaultContextValues.toolType,
    initialStrokeWeight = defaultContextValues.strokeWeight,
    initialToolColor = defaultContextValues.toolColor,
    canvasRef,
    children,
}: PropsWithChildren<CanvasControlProviderProps>) => {

    const [toolColor, setToolColor] = useState<Color>(initialToolColor);
    const [strokeWeight, setStrokeWeight] = useState<number>(initialStrokeWeight);
    const [toolType, setToolType] = useState<CanvasTool>(initialToolType);
    const [text, setText] = useState<string>("");

    return (
        <CanvasControlContext.Provider
            value={{
                toolColor,
                setToolColor,
                strokeWeight,
                setStrokeWeight,
                toolType,
                setToolType,
                text,
                setText,
                canvasRef,
            }}
        >
            {children}
        </CanvasControlContext.Provider>
    );
};
