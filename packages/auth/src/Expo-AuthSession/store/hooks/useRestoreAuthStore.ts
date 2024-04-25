import { useEffect } from "react";
import { loadFromStorage } from "../storage";
import { TokenResponse, TokenResponseConfig } from "expo-auth-session";
import { MadAccount } from "../../../types";
import { useAuthStore } from "./useAuthStore";

export function useRestoreAuthStore() {
    const setToken = useAuthStore(state => state.setToken);
    const setUserData = useAuthStore(state => state.setUserData);

    useEffect(() => {
        async function restoreAuthState() {
            const accessToken = (await loadFromStorage("accessToken")) as string;
            const refreshToken = (await loadFromStorage("refreshToken")) as string;
            const restOfToken = (await loadFromStorage("restOfResponse")) as Omit<
                TokenResponseConfig,
                "accessToken" | "refreshToken"
            >;
            if (accessToken && refreshToken && restOfToken) {
                const token = new TokenResponse({
                    accessToken,
                    refreshToken,
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
