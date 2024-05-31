import React, { useState } from "react";
import {
    Camera,
    useCameraDevice,
    useCameraFormat,
    useCameraPermission,
    useSkiaFrameProcessor,
} from "react-native-vision-camera";
import { scanOCR } from "@ismaelmoreiraa/vision-camera-ocr";
import { Skia } from "@shopify/react-native-skia";
import { LayoutChangeEvent, View, useWindowDimensions } from "react-native";
import { useRunOnJS, useSharedValue } from "react-native-worklets-core";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { BoundingBoxPadding, MaxTagLength, OcrUsageSteps } from "../../consts";
import { BoundingBox, OCRCameraProps, Point } from "../../types";
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

export const OCRCamera = ({
    displayConfirmSelectionDialog = true,
    fps = 60,
    boundingBoxColor = "red",
    onSelectTag,
    onClose,
    shouldHighlightTextBlock,
}: OCRCameraProps) => {
    const { hasPermission } = useCameraPermission();
    const styles = useStyles(themeStyles);
    const device = useCameraDevice("back");
    const paintConfig = getPainConfig(boundingBoxColor);

    const [showDialog, setShowDialog] = useState(false);
    const [clickedText, setClickedText] = useState<string>("");

    const setScannedTagOnJS = useRunOnJS(
        (text: string) => {
            if (!displayConfirmSelectionDialog) confirmSelection(text);
            else {
                if (text) setShowDialog(true);
                setClickedText(text);
            }
        },
        [setClickedText],
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

    const shouldHighlightTextBlockWorklet = (text: string, boundingBox: BoundingBox) => {
        "worklet";
        return shouldHighlightTextBlock ? shouldHighlightTextBlock(text, boundingBox) : true;
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
                if (!block?.frame) continue;

                const boundingBox = getBoundingBox(
                    block.frame.boundingCenterX,
                    block.frame.boundingCenterY,
                    block.frame.width,
                    block.frame.height,
                );

                if (!shouldHighlightTextBlockWorklet(block.text, boundingBox)) continue;

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
        setClickedText("");
        setShowDialog(false);
    };

    const confirmSelection = (text: string) => {
        if (onSelectTag) onSelectTag(text);
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
                        tagText={clickedText}
                        maxTagLength={MaxTagLength}
                        onChangeTagText={text => setClickedText(text)}
                        onClickRetry={clearSelection}
                        onClickConfirm={() => confirmSelection(clickedText)}
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
