import { getConfig } from "./mockConfig";

const getAccount = () => ({
    identifier: "mock-identifier",
    tenantId: "mock-tenantId",
    username: "mock-username",
    claims: {
        name: getConfig().accountShouldContainName ? "mock-name" : undefined,
    },
});

const getResult = () => ({
    // file deepcode ignore HardcodedNonCryptoSecret: this is mock data used purely for testing
    accessToken: "mock-token",
    account: getAccount(),
    expiresOn: 0,
    scopes: ["mock-scope"],
});

export const mocks = {
    getMSALResult: getResult,
    getMSALAccount: getAccount,
};
