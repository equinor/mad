import { useEffect, useState } from "react";
import { refreshAsync, TokenResponse } from "expo-auth-session";
import { useConfig } from "./useConfig";
import { useDiscovery } from "./useDiscovery";

export function useAuthToken() {
    const { config } = useConfig();
    const discovery = useDiscovery();
    const [token, setToken] = useState<TokenResponse | null>(null);

    useEffect(() => {
        if (token && config && discovery) {
            const getRefreshToken = () => {
                const refreshConfig = {
                    clientId: config?.clientId ?? "whoops",
                    refreshToken: token?.refreshToken,
                };
                refreshAsync(refreshConfig, discovery)
                    .then(res => {
                        setToken(res);
                    })
                    .catch(error => console.error(error));
            };
            // Logic to refresh access token when it expires
            if (token && !TokenResponse.isTokenFresh(token)) {
                void getRefreshToken();
            }
        }
    }, []);

    return { token, setToken };
}
