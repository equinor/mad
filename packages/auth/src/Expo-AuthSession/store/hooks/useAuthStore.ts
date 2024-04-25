import { AuthRequestConfig, DiscoveryDocument, TokenResponse } from "expo-auth-session";
import { MadAccount } from "../../../types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveToStorage } from "../storage";
import { AuthState } from "../../types";

export const useAuthStore = create<AuthState>()(
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
