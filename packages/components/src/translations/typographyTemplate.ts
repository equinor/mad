import { Typography } from "@equinor/eds-tokens";
import { TextStyle } from "react-native";
import { convertToUnitlessNumber } from "./units";

const weightToThicknessLabelMap: Record<string, string> = {
    "400": "Regular",
    "500": "Medium",
    "700": "Bold",
} as const;

export const typographyTemplate = (typography: Typography): TextStyle => {
    const weight =
        typography.fontWeight.toString() in weightToThicknessLabelMap
            ? typography.fontWeight.toString()
            : "500";
    const thickness = weightToThicknessLabelMap[weight];
    const style = typography.fontStyle === "italic" ? "Italic" : "";
    return {
        color: typography.color,
        fontFamily: `Equinor-${thickness}${style}`,
        fontSize: convertToUnitlessNumber(typography.fontSize),
        //TODO: Look at this-> lineHeight: convertToUnitlessNumber(typography.lineHeight),
        letterSpacing: convertToUnitlessNumber(typography.letterSpacing ?? ""),
        textTransform:
            typography.textTransform as keyof TextStyle["textTransform"],
        textAlign: typography.textAlign as keyof TextStyle["textAlign"],
    };
};
