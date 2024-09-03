import React, { useEffect, useSyncExternalStore } from "react";
import Toast, { ToastProps as ImportedToastProps, ToastConfig } from "react-native-toast-message";
import { CustomToastTranslator } from "./components/CustomToastTranslator";
import { ToastQueue } from "./queue";
import { ToastTypes } from "./types";

const toastConfig: ToastConfig = {
    [ToastTypes.ERROR]: CustomToastTranslator,
    [ToastTypes.SUCCESS]: CustomToastTranslator,
    [ToastTypes.WARNING]: CustomToastTranslator,
    [ToastTypes.INFO]: CustomToastTranslator,
};

export type ToastEmitterProps = Omit<ImportedToastProps, "config" | "type">;

export const ToastEmitter = (props: ToastEmitterProps) => {
    const store = useSyncExternalStore(ToastQueue.subscribe, ToastQueue.getSnapshot);
    const nextToast = store.at(0);
    useEffect(() => {
        if (!nextToast) return;
        const { type, text, duration, onPress } = nextToast;
        const onPressWithHide = () => onPress?.(Toast.hide);
        Toast.show({
            type,
            swipeable: true,
            text1: text,
            onPress: onPressWithHide,
            onHide: () =>
                setTimeout(() => {
                    ToastQueue.shift();
                }, 150),
            visibilityTime: duration,
        });
    }, [nextToast]);

    return <Toast {...props} config={toastConfig} />;
};
