import { useAuth } from "../store/authStore";
import { MadAccount } from "../../types";
import { useEffect, useState } from "react";
import { getAccountWeb } from "../authenticationHandler";
import { Platform } from "react-native";

export const useAccountNative = () => {
    const authState = useAuth();
    return authState.userData;
};

export const useAccountWeb = () => {
    const [account, setAccount] = useState<MadAccount | null>();
    useEffect(() => {
        const getAndSetAccount = async () => {
            try {
                const account = await getAccountWeb();
                setAccount(account);
            } catch (e) {
                throw new Error("Unable to get account", { cause: e });
            }
        };

        void getAndSetAccount();
    }, []);
    return account;
};

export const useAccount = Platform.OS === "web" ? useAccountWeb : useAccountNative;
