import {
    AuthRequestConfig,
    DiscoveryDocument,
    TokenResponse,
    TokenResponseConfig,
} from "expo-auth-session";
import { MadAccount } from "../types";

export type AuthState = {
    token?: TokenResponseConfig;
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
};
