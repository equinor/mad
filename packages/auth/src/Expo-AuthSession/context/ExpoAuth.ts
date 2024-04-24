import { TokenResponse } from "expo-auth-session";
import { MadAccount } from "../../types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadFromStorage, saveToStorage } from "./storage";

type AuthState = {
    token?: TokenResponse;
    setToken: (token: TokenResponse) => void;
    userData?: MadAccount;
    setUserData: (account: MadAccount) => void;
};
const useAuthStore = create<AuthState>()(
    devtools(
        set => ({
            setToken: async (token: TokenResponse) => {
                await saveToStorage("token", token);
                set({ token });
            },
            setUserData: async (account: MadAccount) => {
                await saveToStorage("userData", account);
                set({ userData: account });
            },
        }),
        { name: "core/auth" },
    ),
);

(async () => {
    const storedToken = await loadFromStorage("token");
    if (storedToken) {
        useAuthStore.getState().setToken(storedToken);
    }

    const storedUserData = await loadFromStorage("userData");
    if (storedUserData) {
        useAuthStore.getState().setUserData(storedUserData);
    }
})();

export const useAuth = (): AuthState => {
    return useAuthStore();
};

export const getToken = () => useAuthStore.getState().token;
