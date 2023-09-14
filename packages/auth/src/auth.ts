import PublicClientApplication, {
    MSALAccount,
    MSALResult,
    MSALSilentParams,
} from "react-native-msal";
import type { MSALConfiguration } from "react-native-msal";
import {
    getMadAccount,
    getMadAuthenticationResult,
} from "./_internal/translation-layer/translationLayer";
import { MadAccount, MadAuthenticationResult } from "./types";
import { DEMO_USER, disableDemoMode, getIsDemoModeEnabled } from "./demo-mode";

let pca: PublicClientApplication | null = null;

async function _getInternalAccount(): Promise<MSALAccount | null> {
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
    const msalAccount = await _getInternalAccount();
    if (msalAccount) return getMadAccount(msalAccount);
    return null;
}

export type InitiateAuthenticationClientConfig = {
    clientId: string;
    redirectUri: string;
    authority?: string;
};

/**
 *
 * @param {InitiateAuthenticationClientConfig} config
 */
export async function initiateAuthenticationClient({
    clientId,
    redirectUri,
    authority = "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/",
}: InitiateAuthenticationClientConfig): Promise<void> {
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

export function authenticationClientExists(): boolean {
    return !!pca;
}

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
    if (getIsDemoModeEnabled()) return DEMO_USER;
    return _getMadAccountFromMSAL();
}

export async function authenticateSilently(
    scopes: string[],
): Promise<MadAuthenticationResult | null> {
    if (!pca) {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }

    const msalAccount = await _getInternalAccount();

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

export async function signOut(): Promise<boolean> {
    if (getIsDemoModeEnabled()) {
        disableDemoMode();
        return true;
    }
    if (!pca) {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }
    const account = await _getInternalAccount();

    if (account) {
        const success: boolean = await pca.removeAccount(account);
        return success;
    }

    return false;
}
