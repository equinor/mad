import { AuthRequestConfig, DiscoveryDocument, TokenResponse } from "expo-auth-session";
import { AuthState } from "../types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { MadAccount } from "../../types";
import * as SecureStore from "expo-secure-store";

export const useAuth = create<AuthState>()(
    devtools(
        persist(
            set => ({
                setToken: (token: TokenResponse) => {
                    set({ token });
                },
                setUserData: (account: MadAccount) => {
                    set({ userData: account });
                },
                setDiscovery: (discovery: DiscoveryDocument | null) => {
                    set({ discovery });
                },
                setConfig: (config: AuthRequestConfig) => {
                    set({ config });
                },
            }),
            {
                partialize: state =>
                    Object.fromEntries(
                        Object.entries(state).filter(([key]) =>
                            ["token", "userData"].includes(key),
                        ),
                    ),
                name: "storage",
                storage: createJSONStorage(() => ({
                    getItem: SecureStore.getItemAsync,
                    setItem: SecureStore.setItemAsync,
                    removeItem: SecureStore.deleteItemAsync,
                })),
            },
        ),
        { name: "core/auth" },
    ),
);

export const getToken = async () => {
    const token = useAuth.getState().token;
    const config = useAuth.getState().config;
    const discovery = useAuth.getState().discovery;
    if (token) {
        if (TokenResponse.isTokenFresh(token)) {
            return token;
        } else if (config && discovery) {
            const refreshedToken = await token.refreshAsync(config, discovery);
            useAuth.getState().setToken(refreshedToken);
            return refreshedToken;
        }
    }
    throw new Error("Unable to get token");
};

export const getDiscovery = () => useAuth.getState().discovery;
export const getConfig = () => useAuth.getState().config;
