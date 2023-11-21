import React from "react";
import { Path, Text } from "@shopify/react-native-skia";
import { CanvasData, CanvasTool } from "./types";

type CanvasElementProps = {
    data: CanvasData;
    currentTool: CanvasTool;
};

export const CanvasElement = ({ data, currentTool }: CanvasElementProps) => {
    switch (data.type) {
        case "pen":
            return (
                <Path
                    path={data.path}
                    color={data.color}
                    style="stroke"
                    strokeWidth={data.strokeWidth}
                    strokeMiter={1}
                    strokeCap="round"
                    antiAlias
                />
            );
        case "text":
            return <Text font={null} text={data.text} x={data.position.x} y={data.position.y} />;
    }
};
