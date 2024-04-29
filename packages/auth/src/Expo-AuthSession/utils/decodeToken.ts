import { jwtDecode } from "jwt-decode";
import { MadAccount } from "../../types";

type UserInfo = {
    name: string;
    unique_name: string;
    onprem_sid: string;
};
/**
 * For some reason we are unable to exchange the id token for user data.
 * Instead, we decode the access token get the user info from there
 * @param token
 * @return account {MadAccount} -- the logged-in user info
 */
export const decodeToken = (token: string | undefined) => {
    if (!token) return undefined;
    const decoded = jwtDecode<UserInfo>(token);
    const account: MadAccount = {
        name: decoded.name,
        username: decoded.unique_name,
        identifier: decoded.onprem_sid,
    };
    return account;
};
