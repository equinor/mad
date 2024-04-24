import React, { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";
import { AuthRequestConfig, TokenResponse } from "expo-auth-session";
import { MadAccount } from "../../types";

type AuthContextType = {
    token: TokenResponse | null;
    setToken: (token: TokenResponse | null) => void;
    userData: MadAccount | null;
    setUserData: (account: MadAccount | null) => void;
};
const AuthContext = createContext<AuthContextType>({
    token: null,
    setToken: () => {},
    userData: null,
    setUserData: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [token, setToken] = useState<TokenResponse | null>(null);
    const [userData, setUserData] = useState<MadAccount | null>(null);

    // Include all the logic you need to handle authentication here

    const value = useMemo(
        () => ({
            token,
            setToken,
            userData,
            setUserData,
        }),
        [token, setToken, userData, setUserData],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
