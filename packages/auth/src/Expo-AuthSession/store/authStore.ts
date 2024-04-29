import { AuthRequestConfig, DiscoveryDocument, TokenResponse } from "expo-auth-session";
import { AuthState } from "../types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { MadAccount } from "../../types";
import { getItem, removeItem, setItem } from "./encryption";

/**
 * Creates a zustand store with all the relevant values for authentication handling. Token and user info is persisted
 */
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
                resetToken: () => {
                    set({ token: undefined });
                },
                resetUserData: () => {
                    set({ userData: undefined });
                },
                resetDiscovery: () => {
                    set({ discovery: undefined });
                },
                resetConfig: () => {
                    set({ config: undefined });
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

/**
 * We avoid using hooks for backwards compatibility so these are all methods to interact with the store without the use of hooks.
 */
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
export const resetToken = () => useAuth.getState().resetToken();
export const resetUserData = () => useAuth.getState().resetUserData();
export const resetDiscovery = () => useAuth.getState().resetDiscovery();
export const resetConfig = () => useAuth.getState().resetConfig();
