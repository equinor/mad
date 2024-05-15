import { getDefaultHeaderHeight } from "@react-navigation/elements";
import { Dimensions } from "react-native";

export const getTopOffset = (safeAreaInsetsTop = 0) =>
    getDefaultHeaderHeight(Dimensions.get("window"), false, 0) + safeAreaInsetsTop;
