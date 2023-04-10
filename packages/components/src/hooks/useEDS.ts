import { useFonts } from "expo-font";

import EquinorBold from "../assets/fonts/Equinor-Bold.otf";
import EquinorBoldItalic from "../assets/fonts/Equinor-BoldItalic.otf";
import EquinorItalic from "../assets/fonts/Equinor-Italic.otf";
import EquinorLight from "../assets/fonts/Equinor-Light.otf";
import EquinorLightItalic from "../assets/fonts/Equinor-LightItalic.otf";
import EquinorMedium from "../assets/fonts/Equinor-Medium.otf";
import EquinorMediumItalic from "../assets/fonts/Equinor-MediumItalic.otf";
import EquinorRegular from "../assets/fonts/Equinor-Regular.otf";

const fontMap = {
    "Equinor-Bold": EquinorBold,
    "Equinor-BoldItalic": EquinorBoldItalic,
    "Equinor-Italic": EquinorItalic,
    "Equinor-Light": EquinorLight,
    "Equinor-LightItalic": EquinorLightItalic,
    "Equinor-Medium": EquinorMedium,
    "Equinor-MediumItalic": EquinorMediumItalic,
    "Equinor-Regular": EquinorRegular,
};

export const useEDS = () => {
    const isLoaded = useFonts(fontMap);
    return isLoaded;
};
