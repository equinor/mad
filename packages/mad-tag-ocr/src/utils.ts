import { Color, InputRRect, PaintStyle, Skia } from "@shopify/react-native-skia";
import { BoundingBox, Point } from "./types";
import { BoundingBoxPadding } from "./consts";

export const getSkiaRoundedRect = (boundingBox: BoundingBox): InputRRect => {
    "worklet";
    return {
        rx: 10,
        ry: 10,
        rect: boundingBox,
    };
};

export const getBoundingBox = (
    centerX: number,
    centerY: number,
    width: number,
    height: number,
): BoundingBox => {
    "worklet";
    return {
        x: centerX - width / 2 - BoundingBoxPadding,
        y: centerY - height / 2 - BoundingBoxPadding,
        width: width + BoundingBoxPadding * 2,
        height: height + BoundingBoxPadding * 2,
    };
};

export const isPointInsideBoundingBox = (boundingBox: BoundingBox, point: Point) => {
    "worklet";
    return (
        point.x >= boundingBox.x &&
        point.x <= boundingBox.x + boundingBox.width &&
        point.y >= boundingBox.y &&
        point.y <= boundingBox.y + boundingBox.height
    );
};

export const translatePointToFrame = (
    frameWidth: number,
    frameHeight: number,
    cameraWidth: number,
    cameraHeight: number,
    screenScale: number,
    point: Point,
): Point => {
    "worklet";
    const aspectRatioCamera = cameraWidth / cameraHeight;
    const aspectRatioFrame = frameWidth / frameHeight;
    const aspectRatioDifference = aspectRatioCamera - aspectRatioFrame;

    const pxZoomHeight = aspectRatioDifference > 0 ? aspectRatioDifference * frameHeight : 0;
    const pxZoomWidth = aspectRatioDifference < 0 ? -aspectRatioDifference * frameWidth : 0;

    const densityRatio = frameWidth / cameraWidth;
    return {
        x: point.x * densityRatio + pxZoomWidth / 2 / screenScale,
        y: point.y * densityRatio + pxZoomHeight / 2 / screenScale,
    };
};

export const formatTag = (text: string) => {
    "worklet";
    return text
        .split("")
        .filter(char => new RegExp(/^[a-zæøå0-9-]/i).test(char))
        .join("");
};

export function getPaintConfig(color: Color) {
    const paint = Skia.Paint();
    paint.setColor(Skia.Color(color));
    paint.setStyle(PaintStyle.Stroke);
    paint.setStrokeWidth(2);
    return paint;
}
