import React, { useState } from "react";
import {
    Camera,
    useCameraDevice,
    useCameraFormat,
    useCameraPermission,
    useSkiaFrameProcessor,
} from "react-native-vision-camera";
import { scanOCR } from "@ismaelmoreiraa/vision-camera-ocr";
import { Color, Skia } from "@shopify/react-native-skia";
import { LayoutChangeEvent, View, useWindowDimensions } from "react-native";
import { useRunOnJS, useSharedValue } from "react-native-worklets-core";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { BoundingBoxPadding, MaxTagLength, OcrUsageSteps } from "../../consts";
import { BoundingBox, Point } from "../../types";
import {
    formatTag,
    getPainConfig,
    getBoundingBox,
    isPointInsideBoundingBox,
    translateViewPointToCameraPoint,
} from "../../utils";
import { SelectTagDialog } from "../SelectTagDialog";
import { Button, EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { PopoverButton } from "../InfoButton";

export type OCRCameraProps = {
    fps?: number;
    boundingBoxColor?: Color;
    onSelectTag?: (tag: string) => void;
    onClose?: () => void;
    shouldHighlightText?: (text: string) => boolean;
    onDetectTextBlock?: (text: string, boundingBox: BoundingBox) => void;
};

export const OCRCamera = ({
    fps = 60,
    boundingBoxColor = "red",
    onSelectTag,
    onClose,
    shouldHighlightText,
    onDetectTextBlock,
}: OCRCameraProps) => {
    const { hasPermission } = useCameraPermission();
    const styles = useStyles(themeStyles);
    const device = useCameraDevice("back");
    const paintConfig = getPainConfig(boundingBoxColor);

    const [showDialog, setShowDialog] = useState(false);
    const [scannedTag, setScannedTag] = useState<string>("");

    const setScannedTagOnJS = useRunOnJS(
        (text: string) => {
            if (text) setShowDialog(true);
            setScannedTag(text);
        },
        [setScannedTag],
    );

    const clickedPoint = useSharedValue<Point | undefined>(undefined);

    const dim = useWindowDimensions();
    const [viewWidth, setViewWidth] = useState(dim.width);
    const viewWidthShared = useSharedValue(dim.width);
    const [viewHeight, setViewHeight] = useState(dim.height);
    const viewHeightShared = useSharedValue(dim.height);

    const onLayout = (event: LayoutChangeEvent) => {
        setViewWidth(event.nativeEvent.layout.width);
        setViewHeight(event.nativeEvent.layout.height);
        viewWidthShared.value = event.nativeEvent.layout.width;
        viewHeightShared.value = event.nativeEvent.layout.height;
    };

    const format = useCameraFormat(device, [
        {
            fps,
            videoResolution: {
                width: viewWidth,
                height: viewHeight,
            },
        },
    ]);

    const tap = Gesture.Tap().onEnd(e => (clickedPoint.value = { x: e.x, y: e.y }));

    const shouldHighlightTextWorklet = (text: string) => {
        "worklet";
        return shouldHighlightText ? shouldHighlightText(text) : true;
    };

    const onDetectTextBlockWorklet = (text: string, boundingBox: BoundingBox) => {
        "worklet";
        if (onDetectTextBlock) onDetectTextBlock(text, boundingBox);
    };

    const frameProcessor = useSkiaFrameProcessor(
        frame => {
            "worklet";
            const scannedOcr = scanOCR(frame);
            frame.render();

            const translatedClickedPoint =
                clickedPoint.value &&
                translateViewPointToCameraPoint(
                    viewWidthShared.value,
                    viewHeightShared.value,
                    frame.width,
                    frame.height,
                    clickedPoint.value,
                );

            for (const block of scannedOcr.result.blocks) {
                if (!block?.frame || !shouldHighlightTextWorklet(block.text)) continue;

                const boundingBox = getBoundingBox(
                    block.frame.boundingCenterX,
                    block.frame.boundingCenterY,
                    block.frame.width,
                    block.frame.height,
                );

                onDetectTextBlockWorklet(block.text, boundingBox);

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
                    paintConfig,
                );

                if (
                    translatedClickedPoint &&
                    isPointInsideBoundingBox(boundingBox, translatedClickedPoint)
                ) {
                    void setScannedTagOnJS(formatTag(block.text));
                }
            }
            clickedPoint.value = undefined;
        },
        [clickedPoint, viewWidthShared, viewHeightShared],
    );

    const onClickClose = () => onClose?.();

    const clearSelection = () => {
        setScannedTag("");
        setShowDialog(false);
    };

    const confirmSelection = () => {
        if (onSelectTag) onSelectTag(scannedTag);
        setShowDialog(false);
    };

    if (!device && !hasPermission) {
        console.error(!device ? "No camera device found" : "No camera permission");
        onClickClose();
    }

    return (
        <View style={styles.container}>
            {hasPermission && !!device && (
                <>
                    <SelectTagDialog
                        show={showDialog}
                        tagText={scannedTag}
                        maxTagLength={MaxTagLength}
                        onChangeTagText={text => setScannedTag(text)}
                        onClickRetry={clearSelection}
                        onClickConfirm={confirmSelection}
                    />
                    <View style={styles.buttonContainer}>
                        <Button.Icon name="close" iconSize={30} onPress={onClickClose} />
                        <PopoverButton
                            icon="information"
                            title="How to use the tag scanner"
                            text={OcrUsageSteps.join("\n")}
                        />
                    </View>
                    <GestureDetector gesture={tap}>
                        <Camera
                            onLayout={onLayout}
                            device={device}
                            format={format}
                            fps={fps}
                            isActive={!showDialog}
                            style={{ flex: 1 }}
                            resizeMode="cover"
                            frameProcessor={frameProcessor}
                            enableZoomGesture
                            videoStabilizationMode="auto"
                            orientation="portrait"
                        />
                    </GestureDetector>
                </>
            )}
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    container: {
        flex: 1,
        position: "relative",
    },
    buttonContainer: {
        zIndex: 1,
        position: "absolute",
        right: 0,
        gap: theme.spacing.spacer.small,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical * 2,
    },
}));
