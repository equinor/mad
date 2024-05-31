import React from "react";
import { OCRCamera } from "@equinor/react-native-mad-tag-scanner";
import { addToast } from "@equinor/mad-core";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCameraPermission } from "react-native-vision-camera";

export const OCRScreen = () => {
    const navigation = useNavigation();
    const { hasPermission, requestPermission } = useCameraPermission();

    useFocusEffect(() => void requestPermission());

    return (
        <>
            {hasPermission && (
                <OCRCamera
                    onClose={() => navigation.goBack()}
                    onSelectTag={tag =>
                        addToast({
                            type: "info",
                            text: `🎉 "${tag}" was selected 🎉`,
                            duration: 5000,
                        })
                    }
                />
            )}
        </>
    );
};
