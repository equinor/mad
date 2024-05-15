import { DimensionValue, Platform } from "react-native";

export const getMaxToastWidth = () => (Platform.OS === "web" ? ("90vw" as DimensionValue) : "90%");
