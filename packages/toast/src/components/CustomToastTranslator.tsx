import React from "react";
import { ToastConfigParams } from "react-native-toast-message";
import { ToastComponent } from "./ToastComponent";
import { ToastType } from "../types";

export const CustomToastTranslator = (params: ToastConfigParams<unknown>) => (
    <ToastComponent
        text={params.text1 ?? ""}
        type={params.type as ToastType}
        onPress={params.onPress}
    />
);
