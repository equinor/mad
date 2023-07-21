import { LayoutAnimation } from "react-native";
import { Listener, Toast, ToastType } from "./types";

type WithId<T> = T & { id: number };
type StoredToasts = WithId<Toast>[];
type Filter = { type?: ToastType | ToastType[], amount?: number }

/**
 * The main store of toasts
 */
let toasts: StoredToasts = []
/**
 * This will contain a record of filtered toasts
 */
let filteredToasts: Record<string, StoredToasts>;
/**
 * filters being used to hydrate filteredToasts
 */
let filters: Filter[] = []
let listeners: Listener[] = [];
let id = 0;

function syncFilteredToasts() {

}

export const toastStore = {

    /**
     * Lets React components subscribe to changes in the store
     * For more information, go to https://react.dev/reference/react/useSyncExternalStore
     */
    subscribe(listener: Listener, filter: Filter) {
        listeners = [...listeners, listener];
        filters.push(filter)
        hydrateFilteredToasts()
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    },
    /**
     * Returns a snapshot of the current state.
     * For more information, go to https://react.dev/reference/react/useSyncExternalStore
     */
    getSnapshot() {
        return toasts
    },

    getFilteredSnapshot(filter?: ToastType | ToastType[], amount?: number) {
        if (!filter) return this.getSnapshot().slice(0, amount);
        const filteredToasts = toasts.filter((toast) => (toast.type === filter || filter.includes(toast.type)));
        console.log("AMOUNT:", amount);
        if (!amount) return filteredToasts;
        return filteredToasts.slice(0, amount - 1);
    }
}

/**
 * Adds a message to the user
 */
export const addToast = (toast: Toast) => {
    toasts = [...toasts, { ...toast, id: id++ }]
    emitChange()
}

export const removeToast = (id: number) => {
    toasts = toasts.filter((toast) => toast.id !== id);
    emitChange();
}

/**
 * Function to tell all listeners a change was made.
 * Will trigger a re-render in react components that
 * listens to changes
 */
function emitChange() {
    for (const listener of listeners) {
        listener()
    }
}