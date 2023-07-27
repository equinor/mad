import React from 'react';
import { useToasts } from "./hooks/useToasts"
import { Toast as DefaultToastComponent, ToastProps } from "./Toast";
import { ToastType } from "./types";
import { LayoutAnimation, View } from "react-native";

export type ToastEmitterProps = {
    /**
     * Filter which type of toast this emitter should emit. If not set, this emitter will emit all toasts
     */
    filter?: ToastType | ToastType[],
    /**
     * whether the stack of toasts should go upwards or downwards
     */
    direction: 'up' | 'down',
    /**
     * max amount of toasts this emitter will display at a time
     */
    maxAmountDisplayed: number,
    /**
     * The default duration of toasts in seconds. If not set, the default duration will be 5 seconds
     */
    defaultDuration?: number,
    /**
     * Use this prop if you would like to use a custom Toast component
     */
    customToastComponent?: (props: ToastProps) => JSX.Element,
    /**
     * Fallback emitters will be disabled if any non-fallback emitters are present.
     * Fallback emitters are present in EDSProvider.
     * @todo finish this functionality
     */
    isFallback?: true
}
export const ToastEmitter = ({ filter, customToastComponent, defaultDuration = 5, direction, maxAmountDisplayed }: ToastEmitterProps) => {
    const toasts = useToasts({ filter, amount: maxAmountDisplayed });
    const ToastComponent = customToastComponent || DefaultToastComponent;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return <View style={{ gap: 8, width: '100%', justifyContent: direction === 'up' ? 'flex-end' : undefined }}>
        {toasts.map((toast) => <ToastComponent key={toast.id} {...toast} duration={toast.duration || defaultDuration} />)}
    </View>
}