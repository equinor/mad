import { jwtDecode } from "jwt-decode";
import { MadAccount } from "../types";

type UserInfo = {
    name: string;
    unique_name: string;
    onprem_sid: string;
};
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
