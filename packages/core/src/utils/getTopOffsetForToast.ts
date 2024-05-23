import { getDefaultHeaderHeight } from "@react-navigation/elements";
import { Dimensions } from "react-native";

const PADDING_FROM_HEADER = 8;

export const getTopOffsetForToast = (safeAreaInsetsTop = 0) =>
    safeAreaInsetsTop +
    getDefaultHeaderHeight(Dimensions.get("window"), false, 0) +
    PADDING_FROM_HEADER;
