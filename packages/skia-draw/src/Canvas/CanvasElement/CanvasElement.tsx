import React from "react";
import { CanvasData, CanvasTool } from "../types";
import { PenElement } from "./PenElement";
import { TextElement } from "./TextElement";

type CanvasElementProps = {
    data: CanvasData;
    currentTool: CanvasTool;
};

export const CanvasElement = ({ data, currentTool }: CanvasElementProps) => {
    switch (data.type) {
        case "pen":
            return <PenElement data={data} />;
        case "text":
            return <TextElement data={data} showBoundingBox={currentTool === "text"} />;
    }
};
