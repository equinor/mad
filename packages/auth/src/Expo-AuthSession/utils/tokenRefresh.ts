import { TokenResponse } from "expo-auth-session";
import { getConfig, getDiscovery } from "../store/authStore";

export const tokenRefresh = async (token: TokenResponse, scopes?: string[]) => {
    const discovery = getDiscovery();
    const config = getConfig();
    if (!discovery || !config) {
        return;
    }
    const requestConfig = scopes ? { ...config, scopes } : config;
    return await token.refreshAsync(requestConfig, discovery);
};
