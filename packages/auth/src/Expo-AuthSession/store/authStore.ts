import { AuthRequestConfig, DiscoveryDocument, TokenResponse } from "expo-auth-session";
import { AuthState } from "../types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { MadAccount } from "../../types";
import { getItem, removeItem, setItem } from "./encryption";

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
                    getItem: getItem,
                    setItem: setItem,
                    removeItem: removeItem,
                })),
            },
        ),
        { name: "core/auth" },
    ),
);

export const getToken = () => {
    const tokenConfig = useAuth.getState().token;
    return tokenConfig ? new TokenResponse(tokenConfig) : undefined;
};
export const getUserData = () => useAuth.getState().userData;
export const getDiscovery = () => useAuth.getState().discovery;
export const getConfig = () => useAuth.getState().config;
export const setToken = (token: TokenResponse) => useAuth.getState().setToken(token);
export const setUserData = (userData: MadAccount) => useAuth.getState().setUserData(userData);
export const setDiscovery = (discovery: DiscoveryDocument) =>
    useAuth.getState().setDiscovery(discovery);
export const setConfig = (config: AuthRequestConfig) => useAuth.getState().setConfig(config);
