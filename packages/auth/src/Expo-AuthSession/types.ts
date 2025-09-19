import { AuthRequestConfig, DiscoveryDocument, TokenResponse } from "expo-auth-session";
import { MadAccount } from "../types";

export type AuthState = {
    token?: TokenResponse[];
    setToken: (token: TokenResponse) => void;
    resetToken: () => void;
    userData?: MadAccount;
    setUserData: (account: MadAccount) => void;
    resetUserData: () => void;
    discovery?: DiscoveryDocument | null;
    setDiscovery: (discovery: DiscoveryDocument | null) => void;
    resetDiscovery: () => void;
    config?: AuthRequestConfig;
    setConfig: (config: AuthRequestConfig) => void;
    resetConfig: () => void;
    refreshToken?: string;
    setRefreshToken: (refreshToken: string) => void;
    resetRefreshToken: () => void;
};
