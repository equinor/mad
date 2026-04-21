import { Platform } from "react-native";
import {
    signOutWeb,
    authenticateInteractivelyWeb,
    authenticateSilentlyWeb,
    initiateAuthenticationClientWeb,
    authenticationClientExistsWeb,
    getAccountWeb,
} from "./web";
export { getAccountWeb, MSALAccount, MSALResult } from "./web";
import {
    signOut as signOutNative,
    authenticateSilently as authenticateSilentlyNative,
    authenticateInteractively as authenticateInteractivelyNative,
    initiateAuthenticationClient as initiateAuthenticationClientNative,
    authenticationClientExists as authenticationClientExistsNative,
    getAccount as getAccountNative
} from "./auth";
import { AuthRequestConfig, DiscoveryDocument } from "expo-auth-session";

export const signOut = () => (Platform.OS === "web" ? signOutWeb() : signOutNative());

export const authenticateSilently = (scopes?: string[]) =>
    Platform.OS === "web" ? authenticateSilentlyWeb(scopes) : authenticateSilentlyNative(scopes);

export const authenticateInteractively = (scopes?: string[]) =>
    Platform.OS === "web"
        ? authenticateInteractivelyWeb(scopes)
        : authenticateInteractivelyNative(scopes);

export const initiateAuthenticationClient = (
    config: AuthRequestConfig,
    discovery: DiscoveryDocument,
) =>
    Platform.OS === "web"
        ? initiateAuthenticationClientWeb({
            clientId: config.clientId,
            redirectUri: config.redirectUri,
        })
        : initiateAuthenticationClientNative(config, discovery);

export const authenticationClientExists = () =>
    Platform.OS === "web" ? authenticationClientExistsWeb() : authenticationClientExistsNative();

export const getAccount = () =>
    Platform.OS === "web" ? getAccountWeb() : Promise.resolve(getAccountNative());
