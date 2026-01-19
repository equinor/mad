import { MSALAccount, MSALConfiguration, MSALResult, MSALSilentParams } from "./types";
import { PublicClientApplication } from "./publicClientApplication";
import { getMadAccount, getMadAuthenticationResult } from "../../../_internal/translationLayer";
import { MadAccount, MadAuthenticationResult } from "../../../types";
import { getWebConfig, setWebConfig } from "../../store/authStore";

let pca: PublicClientApplication | null = null;

let initPca: Promise<PublicClientApplication> | null = null;

async function _getMsalAccount(): Promise<MSALAccount | null> {
    if (!pca) {
        throw new Error("Unable to authenticate, pca is null");
    }
    const accounts: MSALAccount[] = await pca.getAccounts();

    if (accounts.length > 0) {
        return accounts[0];
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
export function initiateAuthenticationClientWeb({
    clientId,
    redirectUri,
    authority = "https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/",
}: InitiateAuthenticationClientConfig) {
    if (authenticationClientExistsWeb()) return;
    const config: MSALConfiguration = {
        auth: {
            authority,
            clientId,
            redirectUri,
        },
        cache: { cacheLocation: "localStorage" },
    };
    pca = new PublicClientApplication(config);
    setWebConfig({ clientId, redirectUri, authority });
}

export function ensurePcaInitialized(): Promise<PublicClientApplication> | null {
    if (!pca) {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }
    if (!initPca) {
        initPca = pca.init();
    }
    return initPca;
}

/**
 * Check if the authentication client exists
 * @returns {boolean} whether the authentication client exists
 */
export function authenticationClientExistsWeb(): boolean {
    return !!pca;
}

/**
 * Authenticate interactively. This will open an in-app browser, or the Microsoft Authenticator app if the
 * user has it installed
 * @param scopes an array of scopes
 * @returns {MadAuthenticationResult | null} an object containing the access token and the account, or null
 */
export async function authenticateInteractivelyWeb(
    scopes?: string[],
): Promise<MadAuthenticationResult | null> {
    if (!pca) {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }
    if (!scopes) {
        throw new Error("Unable to authenticate, scopes are not defined");
    }
    await ensurePcaInitialized();
    const result: MSALResult | undefined = await pca.acquireToken({
        scopes,
    });
    if (!result) return null;
    return getMadAuthenticationResult(result);
}

export async function getAccountWeb(): Promise<MadAccount | null> {
    return _getMadAccountFromMSAL();
}

/**
 * Authenticate silently.
 * @param scopes an array of scopes
 * @returns {MadAuthenticationResult | null} an object containing the access token and the account, or null
 */
export async function authenticateSilentlyWeb(
    scopes?: string[],
): Promise<MadAuthenticationResult | null> {
    const webConfig = getWebConfig();
    if (!pca) {
        if (webConfig) {
            initiateAuthenticationClientWeb(webConfig);
        } else {
            throw new Error("Unable to authenticate, authentication client does not exist");
        }
    }

    if (pca) {
        await ensurePcaInitialized();
        const msalAccount = await _getMsalAccount();

        if (msalAccount && scopes) {
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

        throw new Error("Unable to authenticate, authentication client does not exist");
    } else {
        throw new Error("Unable to authenticate, authentication client does not exist");
    }
}

/**
 * Sign out the account.
 * @returns {boolean} whether we successfully signed out.
 */
export async function signOutWeb(): Promise<boolean> {
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
export function _resetWeb() {
    pca = null;
}
