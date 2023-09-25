import { MSALAccount, MSALResult } from "react-native-msal";
import { MadAccount, MadAuthenticationResult } from "../types";

export const getMadAccount = (account: MSALAccount): MadAccount => {
    return {
        username: account.username,
        name: (account.claims as IClaims).name || undefined,
        identifier: account.identifier,
    };
};

export const getMadAuthenticationResult = (result: MSALResult): MadAuthenticationResult => {
    return { account: getMadAccount(result.account), accessToken: result.accessToken };
};

interface IClaims {
    alg: string;
    aud: string;
    exp: number;
    iat: number;
    iss: string;
    kid: string;
    name: string;
    nbf: number;
    oid: string;
    preferred_username: string;
    rh: string;
    sub: string;
    tid: string;
    typ: string;
    uti: string;
    ver: string;
}
