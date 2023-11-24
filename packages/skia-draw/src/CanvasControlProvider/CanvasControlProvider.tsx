import { Color } from "@shopify/react-native-skia";
import React, { useState, PropsWithChildren, createContext } from "react";
import { CanvasTool } from "../Canvas/types";
import { CanvasControlContextValues, CanvasControlProviderProps } from "./types";


const defaultContextValues: CanvasControlContextValues = {
    toolColor: "red",
    strokeWeight: 10,
    toolType: "pen",
};

const CanvasControlContext = createContext<CanvasControlContextValues>(defaultContextValues);


export const CanvasControlProvider = ({
    initialToolType = defaultContextValues.toolType,
    initialStrokeWeight = defaultContextValues.strokeWeight,
    initialToolColor = defaultContextValues.toolColor,
    children
}: PropsWithChildren<CanvasControlProviderProps>) => {
    const [toolColor, setToolColor] = useState<Color>(initialToolColor);
    const [strokeWeight, setStrokeWeight] = useState<number>(initialStrokeWeight);
    const [toolType, setToolType] = useState<CanvasTool>(initialToolType);

    return <CanvasControlContext.Provider value={{
        toolColor,
        strokeWeight,
        toolType
    }}>{children}</CanvasControlContext.Provider>;
};