import { Listener, Toast } from "./types";
let toasts: Toast[] = []
let listeners: Listener[] = [];

export const toastStore = {
    /**
     * Adds a message to the user
     */
    addToast(toast: Toast) {
        toasts = [...toasts, toast]
        emitChange()
    },

    /**
     * Lets React components subscribe to changes in the store
     * For more information, go to https://react.dev/reference/react/useSyncExternalStore
     */
    subscribe(listener: Listener) {
        listeners = [...listeners, listener];
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
    }
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