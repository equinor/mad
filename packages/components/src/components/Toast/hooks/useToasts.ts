import { useSyncExternalStore } from "react"
import { toastStore } from "../store"
import { Listener, ToastType } from "../types";

type UseToastsProps = { filter?: ToastType | ToastType[], amount?: number, isFallback?: boolean }
export const useToasts = ({ filter, amount, isFallback }: UseToastsProps) => {
    const toasts = useSyncExternalStore((listener: Listener) => toastStore.subscribe(listener, isFallback), toastStore.getSnapshot)
    if (!filter) return toasts.slice(0, amount);
    const filterArray = typeof filter === 'string' ? [filter] : filter;
    const filteredToasts = toasts.filter((toast) => filterArray.includes(toast.type))
    return filteredToasts.slice(0, amount);
}