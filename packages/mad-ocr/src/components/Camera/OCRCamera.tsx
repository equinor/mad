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
import { BoundingBoxPadding, MaxTagLength, MinTagLength, OcrUsageSteps } from "../../consts";
import { Point } from "../../types";
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
    onSelectTag: (tag: string) => void;
    onClose: () => void;
};

export const OCRCamera = ({
    fps = 60,
    boundingBoxColor = "red",
    onSelectTag,
    onClose,
}: OCRCameraProps) => {
    const { hasPermission, requestPermission } = useCameraPermission();
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
                const isValidTag =
                    block.text.length >= MinTagLength && block.text.length <= MaxTagLength;

                if (!block?.frame || !isValidTag) continue;

                const boundingBox = getBoundingBox(
                    block.frame.boundingCenterX,
                    block.frame.boundingCenterY,
                    block.frame.width,
                    block.frame.height,
                );

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

    const clearSelection = () => {
        setScannedTag("");
        setShowDialog(false);
    };

    const confirmSelection = () => {
        onSelectTag(scannedTag);
        setShowDialog(false);
    };

    if (!hasPermission) {
        void requestPermission();
        onClose();
        return;
    }

    if (!device) {
        console.error("No camera device found!");
        return;
    }

    return (
        <View style={styles.container}>
            <SelectTagDialog
                show={showDialog}
                tagText={scannedTag}
                maxTagLength={MaxTagLength}
                onChangeTagText={text => setScannedTag(text)}
                onClickRetry={clearSelection}
                onClickConfirm={confirmSelection}
            />
            <View style={styles.buttonContainer}>
                <Button.Icon name="close" iconSize={30} onPress={onClose} />
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
