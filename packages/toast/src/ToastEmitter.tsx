import React from "react";
import Toast, {
    ErrorToast,
    SuccessToast,
    InfoToast,
    ToastProps as ImportedToastProps,
    ToastConfig,
} from "react-native-toast-message";

const ToastTypes = {
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
    WARNING: "WARNING",
    INFO: "INFO",
} as const;
type ToastType = (typeof ToastTypes)[keyof typeof ToastTypes];

const toastConfig: ToastConfig = {
    [ToastTypes.ERROR]: params => <ErrorToast {...params} />,
    [ToastTypes.SUCCESS]: params => <SuccessToast {...params} />,
    [ToastTypes.WARNING]: params => <InfoToast {...params} />,
    [ToastTypes.INFO]: params => <InfoToast {...params} />,
};

export type ToastEmitterProps = Omit<ImportedToastProps, "config">;

export const ToastEmitter = (props: ToastEmitterProps) => {
    return <Toast {...props} config={toastConfig} />;
};

type AddToastProps = { type: ToastType; text: string };
export const addToast = ({ type, text }: AddToastProps) =>
    Toast.show({
        type,
        swipeable: true,
        text1: text,
    });
