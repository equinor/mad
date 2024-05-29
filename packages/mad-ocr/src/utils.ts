import { Color, PaintStyle, Skia } from "@shopify/react-native-skia";
import { BoundingBox, Point } from "./types";
import { BoundingBoxPadding } from "./consts";

export const getBoundingBox = (
    centerX: number,
    centerY: number,
    width: number,
    height: number,
): BoundingBox => {
    "worklet";
    return {
        topLeft: {
            x: centerX - width / 2 - BoundingBoxPadding,
            y: centerY - height / 2 - BoundingBoxPadding,
        },
        bottomRight: {
            x: centerX + width / 2 + BoundingBoxPadding,
            y: centerY + height / 2 + BoundingBoxPadding,
        },
    };
};

export const isPointInsideBoundingBox = (rectangle: BoundingBox, point: Point) => {
    "worklet";
    return (
        point.x >= rectangle.topLeft.x &&
        point.x <= rectangle.bottomRight.x &&
        point.y >= rectangle.topLeft.y &&
        point.y <= rectangle.bottomRight.y
    );
};

export const translateViewPointToCameraPoint = (
    viewWidth: number,
    viewHeight: number,
    cameraWidth: number,
    cameraHeight: number,
    point: Point,
): Point => {
    "worklet";
    const aspectRatioCamera = cameraWidth / cameraHeight;
    const aspectRatioView = viewWidth / viewHeight;
    const aspectDifference = aspectRatioView - aspectRatioCamera;

    const pxZoom = aspectDifference * cameraWidth;
    const zoomedPxWidth = pxZoom < 0 ? pxZoom : 0;
    const zoomedPxHeight = pxZoom > 0 ? pxZoom : 0;

    const cameraWidthPxVisibleInView = cameraWidth + zoomedPxWidth;
    const cameraHeightPxVisibleInView = cameraHeight + zoomedPxHeight;

    const ratioX = cameraWidthPxVisibleInView / viewWidth;
    const ratioY = cameraHeightPxVisibleInView / viewHeight;

    return {
        x: (point.x - zoomedPxWidth / 2) * ratioX,
        y: (point.y - zoomedPxHeight / 2) * ratioY,
    };
};

export const formatTag = (text: string) => {
    "worklet";
    return text
        .split("")
        .filter(char => new RegExp(/^[a-zæøå0-9-]/i).test(char))
        .join("");
};

export function getPainConfig(color: Color) {
    const paint = Skia.Paint();
    paint.setColor(Skia.Color(color));
    paint.setStyle(PaintStyle.Stroke);
    paint.setStrokeWidth(2);
    return paint;
}
