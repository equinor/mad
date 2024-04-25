import {
    AuthRequestConfig,
    DiscoveryDocument,
    TokenResponse,
    TokenResponseConfig,
} from "expo-auth-session";
import { MadAccount } from "../../types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { loadFromStorage, saveToStorage } from "./storage";
import { useEffect } from "react";

type AuthState = {
    token?: TokenResponse;
    setToken: (token: TokenResponse) => void;
    userData?: MadAccount;
    setUserData: (account: MadAccount) => void;
    discovery?: DiscoveryDocument | null;
    setDiscovery: (discovery: DiscoveryDocument | null) => void;
    config?: AuthRequestConfig;
    setConfig: (config: AuthRequestConfig) => void;
};
const useAuthStore = create<AuthState>()(
    devtools(
        set => ({
            setToken: (token: TokenResponse) => {
                // Need to splice the token JSON as Expo-secure-storage only allows strings of maximum 2048 bytes
                const { accessToken, refreshToken, ...restOfToken } = token;
                void saveToStorage("accessToken", accessToken);
                void saveToStorage("refreshToken", refreshToken);
                void saveToStorage("restOfResponse", restOfToken);
                set({ token });
            },
            setUserData: (account: MadAccount) => {
                void saveToStorage("userData", account);
                set({ userData: account });
            },
            setDiscovery: (discovery: DiscoveryDocument | null) => {
                set({ discovery });
            },
            setConfig: (config: AuthRequestConfig) => {
                set({ config });
            },
        }),
        { name: "core/auth" },
    ),
);

function useRestoreAuthState() {
    const setToken = useAuthStore(state => state.setToken);
    const setUserData = useAuthStore(state => state.setUserData);

    useEffect(() => {
        async function restoreAuthState() {
            const storedToken = (await loadFromStorage("accessToken")) as string;
            const refreshToken = (await loadFromStorage("refreshToken")) as string;
            const restOfToken = (await loadFromStorage("restOfResponse")) as Omit<
                TokenResponseConfig,
                "accessToken" | "refreshToken"
            >;
            if (storedToken && refreshToken && restOfToken) {
                const token = new TokenResponse({
                    accessToken: storedToken,
                    refreshToken: refreshToken,
                    ...restOfToken,
                });
                useAuthStore.getState().setToken(token);
            }
            const storedUserData = await loadFromStorage("userData");
            if (storedUserData) {
                useAuthStore.getState().setUserData(storedUserData as MadAccount);
            }
        }

        void restoreAuthState();
    }, [setToken, setUserData]);
}

export const useAuth = (): AuthState => {
    useRestoreAuthState();
    return useAuthStore();
};

export const getToken = async () => {
    const token = useAuthStore.getState().token;
    const config = useAuthStore.getState().config;
    const discovery = useAuthStore.getState().discovery;
    if (token) {
        if (TokenResponse.isTokenFresh(token)) {
            return token;
        } else if (config && discovery) {
            const refreshedToken = await token.refreshAsync(config, discovery);
            useAuthStore.getState().setToken(refreshedToken);
            return refreshedToken;
        }
    }
    throw new Error("Unable to get token");
};
