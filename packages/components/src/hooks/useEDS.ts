import { useFonts, processFontFamily } from "expo-font";

const fontMap = {
    "Equinor-Bold": require("../assets/fonts/Equinor-Bold.otf"),
    "Equinor-BoldItalic": require("../assets/fonts/Equinor-BoldItalic.otf"),
    "Equinor-Italic": require("../assets/fonts/Equinor-Italic.otf"),
    "Equinor-Light": require("../assets/fonts/Equinor-Light.otf"),
    "Equinor-LightItalic": require("../assets/fonts/Equinor-LightItalic.otf"),
    "Equinor-Medium": require("../assets/fonts/Equinor-Medium.otf"),
    "Equinor-MediumItalic": require("../assets/fonts/Equinor-MediumItalic.otf"),
    "Equinor-Regular": require("../assets/fonts/Equinor-Regular.otf"),
};

export const useEDS = () => {
    const isLoaded = useFonts(fontMap);
    return isLoaded;
}