import { Color, SkPath } from "@shopify/react-native-skia";

export type CanvasTool = "pen" | "text";

type GenericCanvasData<T extends CanvasTool> = {
    type: T;
};

export type PenData = GenericCanvasData<"pen"> & {
    path: SkPath;
    color: Color;
    strokeWidth: number;
};

export type TextData = GenericCanvasData<"text"> & {
    size: number;
    color: Color;
    text: string;
    position: { x: number; y: number };
};

export type CanvasData = PenData | TextData;

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is a type guard
export const isPenData = (obj: any): obj is PenData => obj.type === "pen";
