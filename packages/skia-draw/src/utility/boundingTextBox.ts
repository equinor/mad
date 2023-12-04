import type { SkFont } from "@shopify/react-native-skia";

type Position = {
    x: number;
    y: number;
};

type BoundingBox = Position & {
    width: number;
    height: number;
};

export function measureText(text: string, font: SkFont) {
    // We have to correct for a poorly working measuring function in RN skia
    const width = font.getTextWidth(text) + text.length * 0.5;
    const height = font.getSize();
    return { width, height };
}

export function getPaddedTextBoundingBox(
    text: string,
    position: Position,
    font: SkFont,
    padding = 10,
): BoundingBox {
    const { width, height } = measureText(text, font);
    const paddedWidth = width + padding * 2;
    const paddedHeight = height + padding * 2;

    return {
        x: position.x - padding / 2,
        y: position.y - height - padding / 2,
        width: paddedWidth,
        height: paddedHeight,
    };
}

export function isInPaddedTextBoundingBox({
    text,
    textPosition,
    pointPosition,
    font,
    padding = 10,
}: {
    text: string;
    textPosition: Position;
    pointPosition: Position;
    font: SkFont;
    padding?: number;
}) {
    const { x, y } = pointPosition;
    const {
        x: boxX,
        y: boxY,
        width: boxWidth,
        height: boxHeight,
    } = getPaddedTextBoundingBox(text, textPosition, font, padding);
    const result = x >= boxX && x <= boxX + boxWidth && y >= boxY && y <= boxY + boxHeight;
    return result;
}
