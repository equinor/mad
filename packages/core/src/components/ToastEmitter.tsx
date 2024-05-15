import React from "react";
import { ToastEmitter as MadToastEmitter } from "@equinor/mad-toast";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getTopOffset } from "../utils/getTopOffset";
export const ToastEmitter = () => {
    const safeAreaInsets = useSafeAreaInsets();
    const topOffset = getTopOffset(safeAreaInsets.top);
    return <MadToastEmitter topOffset={topOffset} />;
};
