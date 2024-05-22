import React from "react";
import Toast, { ToastProps as ImportedToastProps, ToastConfig } from "react-native-toast-message";
import { CustomToastTranslator } from "./components/CustomToastTranslator";
import { ToastTypes } from "./types";

const toastConfig: ToastConfig = {
    [ToastTypes.ERROR]: CustomToastTranslator,
    [ToastTypes.SUCCESS]: CustomToastTranslator,
    [ToastTypes.WARNING]: CustomToastTranslator,
    [ToastTypes.INFO]: CustomToastTranslator,
};

export type ToastEmitterProps = Omit<ImportedToastProps, "config" | "type">;

export const ToastEmitter = (props: ToastEmitterProps) => {
    return <Toast {...props} config={toastConfig} />;
};
