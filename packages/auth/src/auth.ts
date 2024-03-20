import PublicClientApplication, {
    MSALAccount,
    MSALResult,
    MSALSilentParams,
} from "react-native-msal";
import type { MSALConfiguration } from "react-native-msal";
import { getMadAccount, getMadAuthenticationResult } from "./_internal/translationLayer";
import { MadAccount, MadAuthenticationResult } from "./types";

let pca: PublicClientApplication | null = null;

async function _getMsalAccount(): Promise<MSALAccount | null> {
    if (!pca) {
        throw new Error("Unable to authenticate, pca is null");
    }
    const accounts: MSALAccount[] = await pca.getAccounts();

    if (accounts.length > 0) {
        const account = accounts[0];
        return account;
    }

    return null;
}

async function _getMadAccountFromMSAL(): Promise<MadAccount | null> {
    const msalAccount = await _getMsalAccount();
    if (msalAccount) return getMadAccount(msalAccount);
    return null;
}

export type InitiateAuthenticationClientConfig = {
    clientId: string;
    redirectUri: string;
    authority?: string;
};

/**
 * Initiate the authentication client
 * @param {InitiateAuthenticationClientConfig} config
 */
export async function initiateAuthenticationClient({
    clientId,
    redirectUri,
    authority = "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/",
}: InitiateAuthenticationClientConfig): Promise<void> {
    if (authenticationClientExists()) return;
    const config: MSALConfiguration = {
        auth: {
            authority,
            clientId,
            redirectUri,
        },
        cache: { cacheLocation: "localStorage" },
    };
    pca = new PublicClientApplication(config);
    await pca.init();
}

/**
 * Check if the authentication client exists
 * @returns {boolean} whether the authentication client exists
 */
export function authenticationClientExists(): boolean {
    return !!pca;
}

/**
 * Authenticate interactively. This will open an in-app browser, or the Microsoft Authenticator app if the
 * user has it installed
 * @param scopes an array of scopes
 * @returns {MadAuthenticationResult | null} an object containing the access token and the account, or null
 */
export async function authenticateInteractively(
    scopes: string[],
): Promise<MadAuthenticationResult | null> {
    if (!pca) {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }
    const result: MSALResult | undefined = await pca.acquireToken({
        scopes,
    });
    if (!result) return null;
    return getMadAuthenticationResult(result);
}

export async function getAccount(): Promise<MadAccount | null> {
    return _getMadAccountFromMSAL();
}

/**
 * Authenticate silently.
 * @param scopes an array of scopes
 * @returns {MadAuthenticationResult | null} an object containing the access token and the account, or null
 */
export async function authenticateSilently(
    scopes: string[],
): Promise<MadAuthenticationResult | null> {
    if (!pca) {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }

    const msalAccount = await _getMsalAccount();

    if (msalAccount) {
        const params: MSALSilentParams = {
            account: msalAccount,
            scopes,
            forceRefresh: false,
        };
        const result: MSALResult | undefined | void = await pca
            .acquireTokenSilent(params)
            .catch(e => {
                console.log("Error while fetching token silently", e);
            })
            .then(res => res);
        if (!result) return null;

        return getMadAuthenticationResult(result);
    }

    return null;
}

/**
 * Sign out the account.
 * @returns {boolean} whether we successfully signed out.
 */
export async function signOut(): Promise<boolean> {
    if (!pca) {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }
    const account = await _getMsalAccount();

    if (account) {
        const success: boolean = await pca.removeAccount(account);
        return success;
    }

    return false;
}

/**
 *
 */
export function _reset() {
    pca = null;
}
