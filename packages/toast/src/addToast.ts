import Toast from 'react-native-toast-message';
import { AddToastOptions } from "./types";
import { ToastQueue } from './queue';

export const addToast = (item: AddToastOptions) => {
    ToastQueue.push(item);
    maybeShowToastFromQueue();
}

const maybeShowToastFromQueue = () => {
    const toastToShow = ToastQueue.shift();
    if (!toastToShow) return;
    ToastQueue.lock();
    const { type, text, duration, onPress } = toastToShow;
    Toast.show({
        type,
        swipeable: true,
        text1: text,
        onPress,
        onHide: () => {
            setTimeout(() => {
                ToastQueue.unlock();
                maybeShowToastFromQueue();
            }, 150)
        },
        visibilityTime: duration
    });
}