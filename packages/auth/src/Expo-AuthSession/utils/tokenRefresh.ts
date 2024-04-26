import { TokenResponse } from "expo-auth-session";
import { getConfig, getDiscovery } from "../store";

export const tokenRefresh = async (token: TokenResponse) => {
    const discovery = getDiscovery();
    const config = getConfig();
    if (!discovery || !config) return;
    return await token.refreshAsync(config, discovery);
};
