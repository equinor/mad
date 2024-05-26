import React from "react";
import { OCRCamera } from "@equinor/react-native-mad-tag-scanner";
import { addToast } from "@equinor/mad-core";
import { useNavigation } from "@react-navigation/native";

export const OCRScreen = () => {
    const navigation = useNavigation();
    return (
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
    );
};
