import React from "react";
import { ToastEmitter as MadToastEmitter } from "@equinor/mad-toast";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getTopOffsetForToast } from "../utils/getTopOffsetForToast";
export const ToastEmitter = () => {
    const safeAreaInsets = useSafeAreaInsets();
    const topOffset = getTopOffsetForToast(safeAreaInsets.top);
    return <MadToastEmitter topOffset={topOffset} />;
};
