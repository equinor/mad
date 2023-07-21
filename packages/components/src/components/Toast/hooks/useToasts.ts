import { useSyncExternalStore } from "react"
import { toastStore } from "../store"
import { ToastType } from "../types";

export const useToasts = (filter?: ToastType | ToastType[], amount?: number) => {
    const toasts = useSyncExternalStore(toastStore.subscribe, () => toastStore.getFilteredSnapshot(filter, amount))
    console.log(toasts);
    return toasts;
}