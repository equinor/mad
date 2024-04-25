import { TokenResponse } from "expo-auth-session";
import { MadAccount } from "../../types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { loadFromStorage, saveToStorage } from "./storage";
import { useEffect } from "react";

type AuthState = {
    token?: TokenResponse;
    setToken: (token: TokenResponse) => void;
    userData?: MadAccount;
    setUserData: (account: MadAccount) => void;
};
const useAuthStore = create<AuthState>()(
    devtools(
        set => ({
            setToken: async (token: TokenResponse) => {
                // Need to splice the token JSON as Expo-secure.storage only allows strings of maximum 2048 bytes
                const { accessToken, refreshToken, ...restOfToken } = token;
                await saveToStorage("accessToken", accessToken);
                await saveToStorage("refreshToken", refreshToken);
                await saveToStorage("restOfResponse", restOfToken);
                set({ token });
            },
            setUserData: async (account: MadAccount) => {
                await saveToStorage("userData", account);
                set({ userData: account });
            },
        }),
        { name: "core/auth" },
    ),
);

function useRestoreAuthState() {
    const setToken = useAuthStore(state => state.setToken);
    const setUserData = useAuthStore(state => state.setUserData);

    useEffect(() => {
        async function restoreAuthState() {
            const storedToken = await loadFromStorage("accessToken");
            const refreshToken = await loadFromStorage("refreshToken");
            const restOfToken = await loadFromStorage("restOfResponse");
            if (storedToken && refreshToken && restOfToken) {
                useAuthStore.getState().setToken({
                    accessToken: storedToken,
                    refreshToken: refreshToken,
                    ...restOfToken,
                });
            }
            const storedUserData = await loadFromStorage("userData");
            if (storedUserData) {
                useAuthStore.getState().setUserData(storedUserData);
            }
        }

        void restoreAuthState();
    }, [setToken, setUserData]);
}

export const useAuth = (): AuthState => {
    useRestoreAuthState();
    return useAuthStore();
};

export const getToken = () => useAuthStore.getState().token;
