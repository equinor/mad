import React from "react";
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
import { useState } from "react";
import { useRunOnJS, useSharedValue } from "react-native-worklets-core";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { MaxTagLength, MinTagLength, OcrUsageSteps, BoundingBoxPadding } from "../../consts";
import { Point } from "../../types";
import {
    formatTag,
    getPainConfig,
    getBoundingBoxCorners,
    isPointInsideBoundingBox,
    translateViewPointToCameraPoint,
} from "../../utils";
import { SelectTagDialog } from "../SelectTagDialog";
import { Button, EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { PopoverButton } from "../InfoButton";

export type OCRCameraProps = {
    circleOnClick?: { radius: number };
    onSelectTag: (tag: string) => void;
    onClose: () => void;
};

export const OCRCamera = ({ circleOnClick, onSelectTag, onClose }: OCRCameraProps) => {
    const { hasPermission, requestPermission } = useCameraPermission();
    const styles = useStyles(themeStyles);
    const device = useCameraDevice("back");
    const paintConfig = getPainConfig();

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
            fps: 60,
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

            scannedOcr.result.blocks.forEach(block => {
                const isPossibleTag =
                    block.text.length >= MinTagLength && block.text.length <= MaxTagLength;

                if (block.frame && isPossibleTag) {
                    const rectangle = getBoundingBoxCorners(
                        block.frame.boundingCenterX,
                        block.frame.boundingCenterY,
                        block.frame.width,
                        block.frame.height,
                    );

                    frame.drawRect(
                        Skia.XYWHRect(
                            rectangle.topLeft.x,
                            rectangle.topLeft.y,
                            block.frame.width + BoundingBoxPadding * 2,
                            block.frame.height + BoundingBoxPadding * 2,
                        ),
                        paintConfig,
                    );

                    if (
                        translatedClickedPoint &&
                        isPointInsideBoundingBox(rectangle, translatedClickedPoint)
                    ) {
                        setScannedTagOnJS(formatTag(block.text));
                    }
                }
            });

            if (translatedClickedPoint && circleOnClick) {
                frame.drawCircle(
                    translatedClickedPoint.x,
                    translatedClickedPoint.y,
                    circleOnClick.radius,
                    paintConfig,
                );
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
        requestPermission();
        onClose();
        return;
    }

    if (!device) {
        console.error("No camera device found!");
        return;
    }

    return (
        <View
            style={{
                flex: 1,
                position: "relative",
            }}
        >
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
                    fps={60}
                    isActive={!showDialog}
                    style={{ flex: 1 }}
                    resizeMode="cover"
                    frameProcessor={frameProcessor}
                    enableZoomGesture
                    videoStabilizationMode="auto"
                    orientation={"portrait"}
                />
            </GestureDetector>
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(theme => ({
    buttonContainer: {
        zIndex: 1,
        position: "absolute",
        right: 0,
        gap: theme.spacing.spacer.small,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical * 2,
    },
}));
