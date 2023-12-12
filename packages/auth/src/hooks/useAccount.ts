import { useEffect, useState } from "react";
import { getAccount } from "../auth";
import { MadAccount } from "../types";

/**
 * get the authenticated account.
 */
export const useAccount = () => {
    const [account, setAccount] = useState<MadAccount | null>();
    useEffect(() => {
        const getAndSetAccount = async () => {
            try {
                const account = await getAccount();
                setAccount(account);
            } catch (e) {
                throw new Error("Unable to get account", { cause: e });
            }
        };

        void getAndSetAccount();
    }, []);
    return account;
};
