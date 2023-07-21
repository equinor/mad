import { useToasts } from "./hooks/useToasts"
import { Toast as DefaultToastComponent, ToastProps } from "./Toast";
import { ToastType } from "./types";
import { LayoutAnimation, View } from "react-native";

export type ToastEmitterProps = { filter?: ToastType | ToastType[], direction: string, maxAmountDisplayed: number, duration?: number, customToastComponent?: (props: ToastProps) => JSX.Element }
let counter = 1;
export const ToastEmitter = ({ filter, customToastComponent, duration = 5, maxAmountDisplayed }: ToastEmitterProps) => {
    const toasts = useToasts(filter, maxAmountDisplayed);
    const ToastComponent = customToastComponent || DefaultToastComponent;
    console.log("Toast Emitter just rerendered", counter++);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return <View style={{ gap: 8, width: '100%' }}>
        {toasts.map((toast) => <ToastComponent key={toast.id}{...toast} duration={duration} />)}
    </View>
}