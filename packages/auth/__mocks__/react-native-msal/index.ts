import {
    MSALAccount,
    MSALConfiguration,
    MSALInteractiveParams,
    MSALResult,
    MSALSignoutParams,
    MSALSilentParams,
} from "react-native-msal";
import { mocks } from "./mockData";
import { getConfig } from "./mockConfig";

class PublicClientApplication {
    constructor(config: MSALConfiguration) {}

    init = jest.fn((): Promise<PublicClientApplication> => {
        return Promise.resolve(this);
    });

    acquireToken = jest.fn((params: MSALInteractiveParams): Promise<MSALResult | undefined> => {
        if (getConfig().shouldFail) return Promise.resolve(undefined);
        return Promise.resolve(mocks.getMSALResult());
    });

    acquireTokenSilent = jest.fn((params: MSALSilentParams): Promise<MSALResult | undefined> => {
        if (getConfig().shouldFail) return Promise.resolve(undefined);
        return Promise.resolve(mocks.getMSALResult());
    });

    getAccounts = jest.fn((): Promise<MSALAccount[]> => {
        if (getConfig().shouldFail) return Promise.resolve([]);
        return Promise.resolve([mocks.getMSALAccount()]);
    });

    getAccount = jest.fn((): Promise<MSALAccount | undefined> => {
        if (getConfig().shouldFail) return Promise.resolve(undefined);
        return Promise.resolve(mocks.getMSALAccount());
    });

    removeAccount = jest.fn((account: MSALAccount): Promise<boolean> => {
        if (getConfig().shouldFail) return Promise.resolve(false);
        return Promise.resolve(true);
    });

    signOut = jest.fn((params: MSALSignoutParams): Promise<boolean> => {
        if (getConfig().shouldFail) return Promise.resolve(false);
        return Promise.resolve(true);
    });
}

export default PublicClientApplication;
