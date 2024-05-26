import React from "react";
import { OCRCamera } from "@equinor/react-native-mad-tag-scanner";

export const OCRScreen = () => {
    return <OCRCamera onClose={() => console.log("close")} onSelectTag={tag => console.log(tag)} />;
};
