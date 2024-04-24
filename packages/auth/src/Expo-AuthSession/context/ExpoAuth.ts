import { TokenResponse } from "expo-auth-session";
import { MadAccount } from "../../types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthState = {
    token?: TokenResponse;
    setToken: (token: TokenResponse) => void;
    userData?: MadAccount;
    setUserData: (account: MadAccount) => void;
};
const useAuthStore = create<AuthState>()(
    devtools(
        set => ({
            setToken: (token: TokenResponse) => set({ token }),
            setUserData: (account: MadAccount) => set({ userData: account }),
        }),
        { name: "core/auth" },
    ),
);

export const useAuth = (): AuthState => {
    return useAuthStore();
};

export const getToken = () => useAuthStore.getState().token;
