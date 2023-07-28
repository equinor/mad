import { Listener, Toast } from "./types";

type WithId<T> = T & { id: number };
type StoredToasts = WithId<Toast>[];

/**
 * The main store of toasts
 */
let toasts: StoredToasts = []
let listeners: Listener[] = [];
let id = 0;
//TODO finish this functionality
let numberOfNonFallbackEmitters = 0;

export const toastStore = {

    /**
     * Lets React components subscribe to changes in the store
     * For more information, go to https://react.dev/reference/react/useSyncExternalStore
     */
    subscribe(listener: Listener, isFallback?: boolean) {
        listeners = [...listeners, listener];
        if (!isFallback) numberOfNonFallbackEmitters++;
        return () => {
            listeners = listeners.filter(l => l !== listener);
            if (!isFallback) numberOfNonFallbackEmitters--;
        };
    },
    /**
     * Returns a snapshot of the current state.
     * For more information, go to https://react.dev/reference/react/useSyncExternalStore
     */
    getSnapshot() {
        return toasts
    },
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

export const getFallbacksEnabled = () => {
    return numberOfNonFallbackEmitters === 0;
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