import { TokenResponse } from "expo-auth-session";
import { useRestoreAuthStore } from "./hooks/useRestoreAuthStore";
import { useAuthStore } from "./hooks/useAuthStore";
import { AuthState } from "../types";

export const useAuth = (): AuthState => {
    useRestoreAuthStore();
    return useAuthStore();
};

export const getToken = async () => {
    const token = useAuthStore.getState().token;
    const config = useAuthStore.getState().config;
    const discovery = useAuthStore.getState().discovery;
    if (token) {
        if (TokenResponse.isTokenFresh(token)) {
            console.log("returning token");
            return token;
        } else if (config && discovery) {
            console.log("refreshing token");
            const refreshedToken = await token.refreshAsync(config, discovery);
            useAuthStore.getState().setToken(refreshedToken);
            return refreshedToken;
        }
    }
    throw new Error("Unable to get token");
};

export const getDiscovery = () => useAuthStore.getState().discovery;
export const getConfig = () => useAuthStore.getState().config;
