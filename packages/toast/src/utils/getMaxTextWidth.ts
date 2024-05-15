import { DimensionValue, Platform } from "react-native";

export const getMaxTextWidth = () => (Platform.OS === "web" ? ("80vw" as DimensionValue) : "80%");
