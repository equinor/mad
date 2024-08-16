import { ToastQueue } from "./queue";
import { AddToastOptions } from "./types";

export const addToast = (item: AddToastOptions) => {
    ToastQueue.enqueue(item);
};
