import React, { useMemo } from "react";
import { Group, RoundedRect, Text } from "@shopify/react-native-skia";
import { TextData } from "../types";
import { getPaddedTextBoundingBox } from "../../utility/boundingTextBox";

type TextElementProps = {
    data: TextData;
    showBoundingBox?: boolean;
};
export const TextElement = ({ data, showBoundingBox = false }: TextElementProps) => {
    const boundingBox = useMemo(() => {
        if (!showBoundingBox) {
            return null;
        }
        const { x, y, width, height } = getPaddedTextBoundingBox(
            data.text,
            { x: data.position.x, y: data.position.y },
            data.font,
        );
        return (
            <Group style="stroke" strokeWidth={4} color="white" blendMode={"difference"}>
                <RoundedRect r={4} x={x} y={y} width={width} height={height} />
            </Group>
        );
    }, [data.font, data.text, data.position, showBoundingBox]);

    return (
        <>
            <Text
                font={data.font}
                text={data.text}
                color={data.color}
                x={data.position.x}
                y={data.position.y}
            />
            {boundingBox}
        </>
    );
};
