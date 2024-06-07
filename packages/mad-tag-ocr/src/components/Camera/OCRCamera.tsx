import React, { useState } from "react";
import {
    Camera,
    useCameraDevice,
    useCameraFormat,
    useCameraPermission,
} from "react-native-vision-camera";
import { GestureResponderEvent, LayoutChangeEvent, View, useWindowDimensions } from "react-native";
import { useRunOnJS, useSharedValue } from "react-native-worklets-core";
import { MaxTagLength, OcrUsageSteps, defaultButtonConfig } from "../../consts";
import { OCRCameraProps, Point } from "../../types";
import { formatTag } from "../../utils";
import { SelectTagDialog } from "../SelectTagDialog";
import { Button, EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { PopoverButton } from "../PopoverButton";
import { useStateToSharedValue } from "../../hooks/useSharedState";
import { useOCRFrameProcessor } from "../../hooks/useOCRFrameProcessor";

export const OCRCamera = ({
    buttonConfig = defaultButtonConfig,
    enableConfirmTextDialog = true,
    fps = 60,
    textHighlightColor = "red",
    onSelectTag,
    onClose,
    shouldHighlightText,
}: OCRCameraProps) => {
    const dim = useWindowDimensions();
    const styles = useStyles(themeStyles);
    const device = useCameraDevice("back");
    const { hasPermission } = useCameraPermission();

    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [clickedText, setClickedText] = useState<string>("");

    const enableDialogShared = useStateToSharedValue(enableConfirmTextDialog);
    const clickedPointShared = useSharedValue<Point | undefined>(undefined);

    const [cameraWidth, setCameraWidth] = useState(dim.width);
    const cameraWidthShared = useStateToSharedValue(cameraWidth);
    const [cameraHeight, setCameraHeight] = useState(dim.height);
    const cameraHeightShared = useSharedValue(cameraHeight);

    const onLayout = (event: LayoutChangeEvent) => {
        setCameraWidth(event.nativeEvent.layout.width);
        setCameraHeight(event.nativeEvent.layout.height);
    };

    const setScannedTagOnJS = useRunOnJS(
        (text: string) => {
            if (!enableDialogShared.value) confirmSelection(text);
            else {
                if (text) setShowDialog(true);
                setClickedText(text);
            }
        },
        [enableDialogShared.value],
    );

    const format = useCameraFormat(device, [
        {
            fps,
            videoResolution: {
                width: cameraWidth,
                height: cameraHeight,
            },
        },
    ]);

    const frameProcessor = useOCRFrameProcessor({
        cameraDimensions: { cameraWidthShared, cameraHeightShared },
        clickedPointShared,
        textHighlightColor,
        shouldHighlightText,
        handleHighlightedTextClick: (text: string) => void setScannedTagOnJS(formatTag(text)),
    });

    const clearSelection = () => {
        setClickedText("");
        setShowDialog(false);
    };

    const confirmSelection = (text: string) => {
        if (onSelectTag) onSelectTag(text);
        setShowDialog(false);
    };

    const onTap = (event: GestureResponderEvent) => {
        clickedPointShared.value = {
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY,
        };
    };

    const onClickClose = () => onClose?.();

    if (!device || !hasPermission) {
        console.error(!device ? "No camera device found" : "No camera permission");
        onClickClose();
        return null;
    }

    return (
        <>
            <SelectTagDialog
                show={showDialog}
                tagText={clickedText}
                maxTagLength={MaxTagLength}
                onChangeTagText={text => setClickedText(text)}
                onClickRetry={clearSelection}
                onClickConfirm={() => confirmSelection(clickedText)}
            />

            <View style={styles.container}>
                {!!buttonConfig && (
                    <View style={styles.buttonContainer}>
                        {buttonConfig.showCloseButton && (
                            <Button.Icon name="close" iconSize={30} onPress={onClickClose} />
                        )}
                        {buttonConfig.showInfoButton && (
                            <PopoverButton
                                icon="information"
                                title="How to use the tag scanner"
                                text={OcrUsageSteps.join("\n")}
                            />
                        )}
                        {buttonConfig.extraButtons?.map((buttonProps, index) => (
                            <Button.Icon key={index} iconSize={30} {...buttonProps} />
                        ))}
                    </View>
                )}
                <Camera
                    onLayout={onLayout}
                    onTouchStart={onTap}
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
            </View>
        </>
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
