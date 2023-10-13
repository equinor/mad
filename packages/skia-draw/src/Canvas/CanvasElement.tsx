import React from "react";
import { Path, Text } from "@shopify/react-native-skia";
import { CanvasData } from "./types";

type CanvasElementProps = {
    data: CanvasData;
};

export const CanvasElement = ({ data }: CanvasElementProps) => {
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
            return <Text text={data.text} x={data.position.x} y={data.position.y} />;
    }
};
