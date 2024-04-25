import { AuthRequestConfig, DiscoveryDocument, TokenResponse } from "expo-auth-session";
import { MadAccount } from "../types";

export type AuthState = {
    token?: TokenResponse;
    setToken: (token: TokenResponse) => void;
    userData?: MadAccount;
    setUserData: (account: MadAccount) => void;
    discovery?: DiscoveryDocument | null;
    setDiscovery: (discovery: DiscoveryDocument | null) => void;
    config?: AuthRequestConfig;
    setConfig: (config: AuthRequestConfig) => void;
};
