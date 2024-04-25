import { TokenResponse } from "expo-auth-session";
import { MadAccount } from "../types";
import { getConfig, getDiscovery } from "./store";

export const refreshToken = async (token: TokenResponse, userData: MadAccount) => {
    const discovery = getDiscovery();
    const config = getConfig();
    if (!discovery || !config) return;
    return await token.refreshAsync(config, discovery);
};
