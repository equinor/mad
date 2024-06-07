import { useSkiaFrameProcessor } from "react-native-vision-camera";
import { scanOCR } from "@ismaelmoreiraa/vision-camera-ocr";
import {
    getBoundingBox,
    getPaintConfig,
    isPointInsideBoundingBox,
    translatePointToFrame,
} from "../utils";
import { Skia, Color } from "@shopify/react-native-skia";
import { BoundingBox, Point } from "../types";
import { useWindowDimensions } from "react-native";
import { BoundingBoxPadding } from "../consts";
import { ISharedValue } from "react-native-worklets-core";
import { useStateToSharedValue } from "./useSharedState";

type useOCRFrameProcessorProps = {
    cameraDimensions: {
        cameraWidthShared: ISharedValue<number>;
        cameraHeightShared: ISharedValue<number>;
    };
    clickedPointShared: ISharedValue<Point | undefined>;
    textHighlightColor: Color;
    shouldHighlightText?: (text: string, textBoundingBox: BoundingBox) => boolean;
    handleHighlightedTextClick: (text: string) => void;
};

export function useOCRFrameProcessor({
    cameraDimensions,
    clickedPointShared,
    textHighlightColor,
    shouldHighlightText,
    handleHighlightedTextClick,
}: useOCRFrameProcessorProps) {
    const dim = useWindowDimensions();
    const paintConfig = useStateToSharedValue(getPaintConfig(textHighlightColor));

    const shouldHighlightTextWorklet = (text: string, boundingBox: BoundingBox) => {
        "worklet";
        return shouldHighlightText ? shouldHighlightText(text, boundingBox) : true;
    };

    const handleHighlightedTextClickWorklet = (text: string) => {
        "worklet";
        handleHighlightedTextClick(text);
    };

    const frameProcessor = useSkiaFrameProcessor(
        frame => {
            "worklet";
            try {
                const scannedOcr = scanOCR(frame);
                frame.render();

                const translatedPoint =
                    clickedPointShared.value &&
                    translatePointToFrame(
                        frame.width,
                        frame.height,
                        cameraDimensions.cameraWidthShared.value,
                        cameraDimensions.cameraHeightShared.value,
                        dim.scale,
                        clickedPointShared.value,
                    );

                for (const block of scannedOcr.result.blocks) {
                    if (!block?.frame) continue;

                    const boundingBox = getBoundingBox(
                        block.frame.boundingCenterX,
                        block.frame.boundingCenterY,
                        block.frame.width,
                        block.frame.height,
                    );

                    if (!shouldHighlightTextWorklet(block.text, boundingBox)) continue;

                    frame.drawRRect(
                        {
                            rx: 10,
                            ry: 10,
                            rect: Skia.XYWHRect(
                                boundingBox.topLeft.x,
                                boundingBox.topLeft.y,
                                block.frame.width + BoundingBoxPadding * 2,
                                block.frame.height + BoundingBoxPadding * 2,
                            ),
                        },
                        paintConfig.value,
                    );

                    if (translatedPoint && isPointInsideBoundingBox(boundingBox, translatedPoint)) {
                        handleHighlightedTextClickWorklet(block.text);
                    }
                }
                clickedPointShared.value = undefined;
            } catch (error) {
                console.error(error);
            }
        },
        [
            clickedPointShared,
            cameraDimensions.cameraWidthShared,
            cameraDimensions.cameraHeightShared,
            paintConfig,
        ],
    );

    return frameProcessor;
}
