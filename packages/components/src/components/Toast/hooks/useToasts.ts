import { useSyncExternalStore } from "react"
import { toastStore } from "../store"

export const useToasts = () => {
    const toasts = useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot)
    return toasts;
}