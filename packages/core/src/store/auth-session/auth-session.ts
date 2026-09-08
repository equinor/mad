import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthSessionState = {
    generation: number;
    invalidated: boolean;
    invalidate: () => void;
    rearm: () => void;
};

const useAuthSessionStore = create<AuthSessionState>()(
    devtools(
        set => ({
            generation: 0,
            invalidated: false,
            invalidate: () =>
                set(state =>
                    state.invalidated
                        ? state
                        : { generation: state.generation + 1, invalidated: true },
                ),
            rearm: () => set({ invalidated: false }),
        }),
        { name: "core/auth-session" },
    ),
);

export const useAuthSessionGeneration = () => useAuthSessionStore(state => state.generation);
export const getIsAuthSessionInvalidated = () => useAuthSessionStore.getState().invalidated;
export const invalidateAuthSession = () => useAuthSessionStore.getState().invalidate();
export const rearmAuthSession = () => useAuthSessionStore.getState().rearm();
