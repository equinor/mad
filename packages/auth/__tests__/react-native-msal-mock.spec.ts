import PublicClientApplication, { MSALConfiguration } from "react-native-msal";
import { mocks } from "../__mocks__/react-native-msal/mockData";
import { resetConfig, setConfig } from "../__mocks__/react-native-msal/mockConfig";
const testMsalConfig: MSALConfiguration = {
    auth: {
        clientId: "1234",
    },
};

describe("PublicClientApplication Mock", () => {
    const MockedPCA = PublicClientApplication as jest.MockedClass<typeof PublicClientApplication>;
    it("Can call native function `acquireToken` without error", async () => {
        const pca = new MockedPCA(testMsalConfig);
        const result = await pca.acquireToken({ scopes: [] });
        expect(pca.acquireToken).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(mocks.getMSALResult());

        setConfig({ shouldFail: true });
        const failedResult = await pca.acquireToken({
            scopes: [],
        });
        expect(failedResult).toBe(undefined);
    });
    it("Can call native function `acquireTokenSilent` without error", async () => {
        const pca = new MockedPCA(testMsalConfig);
        const result = await pca.acquireTokenSilent({
            account: mocks.getMSALAccount(),
            scopes: [],
        });
        expect(pca.acquireTokenSilent).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(mocks.getMSALResult());

        setConfig({ shouldFail: true });
        const failedResult = await pca.acquireTokenSilent({
            account: mocks.getMSALAccount(),
            scopes: [],
        });
        expect(failedResult).toBe(undefined);
    });
    it("Can call native function `getAccounts` without error", async () => {
        const pca = new MockedPCA(testMsalConfig);
        const result = await pca.getAccounts();
        expect(pca.getAccounts).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual([mocks.getMSALAccount()]);

        setConfig({ shouldFail: true });
        const failedResult = await pca.getAccounts();
        expect(failedResult).toStrictEqual([]);
    });
    it("Can call native function `getAccount` without error", async () => {
        const pca = new MockedPCA(testMsalConfig);
        const result = await pca.getAccount("");
        expect(pca.getAccount).toHaveBeenCalledTimes(1);
        expect(result).toStrictEqual(mocks.getMSALAccount());

        setConfig({ shouldFail: true });
        const failedResult = await pca.getAccount("");
        expect(failedResult).toStrictEqual(undefined);
    });
    it("Can call native function `removeAccount` without error", async () => {
        const pca = new MockedPCA(testMsalConfig);
        const result = await pca.removeAccount(mocks.getMSALAccount());
        expect(pca.removeAccount).toHaveBeenCalledTimes(1);
        expect(result).toBe(true);

        setConfig({ shouldFail: true });
        const failedResult = await pca.removeAccount(mocks.getMSALAccount());
        expect(failedResult).toBe(false);
    });
    it("Can call native function `signOut` without error", async () => {
        const pca = new MockedPCA(testMsalConfig);
        const result = await pca.signOut({ account: mocks.getMSALAccount() });
        expect(pca.signOut).toHaveBeenCalledTimes(1);
        expect(result).toBe(true);

        setConfig({ shouldFail: true });
        const failedResult = await pca.signOut({ account: mocks.getMSALAccount() });
        expect(failedResult).toBe(false);
    });
    it("Can call native function `init` without error", async () => {
        const pca = new MockedPCA(testMsalConfig);
        const reference = await pca.init();
        expect(pca.init).toHaveBeenCalledTimes(1);
        expect(reference).toBe(pca);
    });

    // name is available automatically on iOS, but not on web. We want to be able to mock
    // both scenarios
    it("Should include name if enabled", async () => {
        const pca = new MockedPCA(testMsalConfig);
        const account = await pca.getAccount("");
        expect((account?.claims as any)?.name).toBe(undefined);

        setConfig({ accountShouldContainName: true });
        const account2 = await pca.getAccount("");
        expect((account2?.claims as any)?.name).toBe("mock-name");
    });

    afterEach(() => resetConfig());
});
