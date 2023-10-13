import { Color, SkPath, SkRect } from "@shopify/react-native-skia";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
import { PropsWithChildren } from "react";

export type SkiaDrawHandle = {
    setColor: (color: Color) => void;
    setStrokeWeight: (weight: number) => void;
    undo: () => void;
    clear: () => void;
    makeImageSnapshot: (rect?: SkRect) => SkiaDrawSnapshot | undefined;
};

export type SnapshotHandle = Pick<Partial<SkiaDrawHandle>, "makeImageSnapshot">;

export type SkiaDrawSnapshot = {
    /**
     * URI containing Base64 data. Can be used with React Native's Image component
     */
    uri: string;

    height: number;
    width: number;
};

export type SignaturePadProps = PropsWithChildren<{
    height?: number;
    withLabel?: boolean;
    onLayout?: CanvasProps["onLayout"];
}>;

export type CanvasProps = {
    /**
     * Set color for all drawings (paths, shapes, text).
     */
    initialDrawColor?: Color;

    /**
     * Set stroke weight for paths and shapes.
     */
    initialStrokeWidth?: number;

    /**
     * Set this to true if you want to render children of the canvas on top of the drawing instead of behind
     */
    renderChildrenOnTop?: boolean;

    style?: StyleProp<ViewStyle>;
    onLayout?: ViewProps["onLayout"];
};
