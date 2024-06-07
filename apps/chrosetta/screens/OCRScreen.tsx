import React, { useState } from "react";
import { OCRCamera } from "@equinor/react-native-mad-tag-ocr";
import { addToast } from "@equinor/mad-core";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCameraPermission } from "react-native-vision-camera";
import { Color } from "@shopify/react-native-skia";
import { IconButtonProps } from "@equinor/mad-components";

export const OCRScreen = () => {
    const navigation = useNavigation();
    const [showPopoverOnClick, setShowPopoverOnClick] = useState(true);
    const [textHighlightColor, setTextHighlightColor] = useState<Color>("red");
    const { hasPermission, requestPermission } = useCameraPermission();

    useFocusEffect(() => void requestPermission());

    const extraButtons: IconButtonProps[] = [
        {
            name: "format-paint",
            onPress: () => {
                setTextHighlightColor(textHighlightColor === "red" ? "green" : "red");
                addToast({
                    type: "info",
                    text: `Bounding box color is now ${
                        textHighlightColor === "red" ? "green" : "red".toString()
                    }`,
                    duration: 2000,
                    onPress: hide => hide(),
                });
            },
        },
        {
            name: showPopoverOnClick ? "menu" : "cursor-default-click",
            onPress: () => {
                setShowPopoverOnClick(!showPopoverOnClick);
                addToast({
                    type: "info",
                    text: `Clicked text dialog is now ${
                        !showPopoverOnClick ? "enabled" : "disabled"
                    }`,
                    duration: 2000,
                    onPress: hide => hide(),
                });
            },
        },
    ];

    const onSelectTag = (tag: string) =>
        addToast({
            type: "success",
            text: `🎉 "${tag}" was selected 🎉`,
            duration: 2000,
            onPress: hide => hide(),
        });

    return (
        <>
            {hasPermission && (
                <OCRCamera
                    enableConfirmTextDialog={showPopoverOnClick}
                    textHighlightColor={textHighlightColor}
                    onClose={() => navigation.goBack()}
                    onSelectTag={onSelectTag}
                    buttonConfig={{
                        showCloseButton: true,
                        showInfoButton: true,
                        extraButtons,
                    }}
                />
            )}
        </>
    );
};
