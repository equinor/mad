import { Color, SkFont, SkPath } from "@shopify/react-native-skia";

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
    font: SkFont;
    color: Color;
    text: string;
    position: { x: number; y: number };
};

export type CanvasData = PenData | TextData;

export const isPenData = (obj: unknown): obj is PenData => !!obj && typeof obj == "object" && "type" in obj && obj.type === "pen";
