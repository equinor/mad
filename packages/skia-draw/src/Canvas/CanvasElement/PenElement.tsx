import React from "react";
import { Path } from "@shopify/react-native-skia";
import { PenData } from "../types";

type PenElementProps = {
    data: PenData;
};

export const PenElement = ({ data }: PenElementProps) => {
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
};
