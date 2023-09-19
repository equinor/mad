import { useEffect, useState } from "react";
import { getAccount } from "../auth";
import { MadAccount } from "../types";

/**
 * get the authenticated account.
 */
export const useAccount = () => {
    const [account, setAccount] = useState<MadAccount | null>(null);
    useEffect(() => {
        getAccount()
            .then(setAccount)
            .catch(e => {
                throw new Error("Unable to get account. Is the user logged in?", { cause: e });
            });
    }, []);
    return account;
};
