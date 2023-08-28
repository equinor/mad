import PublicClientApplication, {
  MSALAccount,
  MSALResult,
  MSALSilentParams,
} from 'react-native-msal';
import type { MSALConfiguration } from 'react-native-msal';

export let pca: PublicClientApplication | null = null;

export async function msalInit(
  clientId: string,
  redirectUri: string,
  authority = 'https://login.microsoftonline.com/statoilsrm.onmicrosoft.com/'
) {
  const config: MSALConfiguration = {
    auth: {
      authority,
      clientId,
      redirectUri,
    },
    cache: { cacheLocation: 'localStorage' },
  };
  pca = new PublicClientApplication(config);
  await pca.init().catch((e) => console.warn(e));
}

export function isMsalConnected(): boolean {
  return !!pca;
}

export async function msalLogin(scopes: string[]) {
  if (!pca) {
    throw new Error('Unable to authenticate, pca is null');
  }
  const result: MSALResult | undefined = await pca.acquireToken({
    scopes,
  });
  return { ...result?.account, userId: result?.account.username };
}

export async function getAccount() {
  if (!pca) {
    throw new Error('Unable to authenticate, pca is null');
  }
  const accounts: MSALAccount[] = await pca.getAccounts();

  if (accounts.length > 0) {
    const account = accounts[0];
    return account;
  }

  return null;
}
export async function authenticateSilently(scopes: string[]) {
  if (!pca) {
    throw new Error('Unable to authenticate, pca is null');
  }

  const accounts: MSALAccount[] | void = await pca
    .getAccounts()
    .catch((e) => console.warn(e))
    .then((accounts) => accounts);

  if (accounts && accounts.length > 0) {
    const account = accounts[0];
    const params: MSALSilentParams = {
      account: accounts[0],
      scopes,
      forceRefresh: false,
    };
    const result: MSALResult | undefined | void = await pca
      .acquireTokenSilent(params)
      .catch((e) => {
        console.log('Error while fetching token silently', e);
      })
      .then((res) => res);
    if (!result) return null;

    const authResult = { ...result, userId: account.username };

    return authResult;
  }

  throw Error("No refresh token, can't authenticate silently");
}

export const errorCodes = {};

export async function logout() {
  if (!pca) {
    throw new Error('Unable to logout, pca is null');
  }
  const accounts: MSALAccount[] = await pca.getAccounts();

  if (accounts.length > 0) {
    const success: boolean = await pca.removeAccount(accounts[0]);
    return success;
  }

  return false;
}
export interface IClaims {
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
