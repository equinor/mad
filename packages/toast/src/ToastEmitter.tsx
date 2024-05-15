import React from "react";
import Toast, {
    ToastProps as ImportedToastProps,
    ToastConfig
} from "react-native-toast-message";
import { CustomToastTranslator } from "./components/CustomToastTranslator";
import { ToastTypes } from "./types";

const toastConfig: ToastConfig = {
    [ToastTypes.ERROR]: params => <CustomToastTranslator {...params} />,
    [ToastTypes.SUCCESS]: params => <CustomToastTranslator {...params} />,
    [ToastTypes.WARNING]: params => <CustomToastTranslator {...params} />,
    [ToastTypes.INFO]: params => <CustomToastTranslator {...params} />,
};

export type ToastEmitterProps = Omit<ImportedToastProps, "config">;

export const ToastEmitter = (props: ToastEmitterProps) => {
    return <Toast {...props} config={toastConfig} />;
};
