import React from "react";
import { CanvasData } from "../types";
import { PenElement } from "./PenElement";
import { TextElement } from "./TextElement";

type CanvasElementProps = {
    data: CanvasData;
    isEditing: boolean;
};

export const CanvasElement = ({ data, isEditing }: CanvasElementProps) => {
    switch (data.type) {
        case "pen":
            return <PenElement data={data} />;
        case "text":
            return <TextElement data={data} showBoundingBox={isEditing} />;
    }
};
