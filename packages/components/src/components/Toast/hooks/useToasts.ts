import { useSyncExternalStore } from "react"
import { toastStore } from "../store"
import { ToastType } from "../types";

type UseToastsProps = { filter?: ToastType | ToastType[], amount?: number }
export const useToasts = ({ filter, amount }: UseToastsProps) => {
    const toasts = useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot)
    if (!filter) return toasts.slice(0, amount);
    const filterArray = typeof filter === 'string' ? [filter] : filter;
    const filteredToasts = toasts.filter((toast) => filterArray.includes(toast.type))
    return filteredToasts.slice(0, amount);
}