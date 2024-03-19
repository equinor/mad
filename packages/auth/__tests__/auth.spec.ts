import { resetConfig, setConfig } from "../__mocks__/react-native-msal/mockConfig";
import * as auth from "../src/auth";
import { MadAccount, MadAuthenticationResult } from "../src/types";

const mockMadAccount: MadAccount = {
    identifier: "mock-identifier",
    name: undefined,
    username: "mock-username",
};

const mockMadResult: MadAuthenticationResult = {
    accessToken: "mock-token",
    account: mockMadAccount,
};

const reset = () => {
    auth._reset();
    resetConfig();
};

describe("authenticationClientExists", () => {
    afterEach(reset);

    it("should return false if authentication client has not been initialized", () => {
        expect(auth.authenticationClientExists()).toBe(false);
    });

    it("should return true if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        expect(auth.authenticationClientExists()).toBe(true);
    });
});

describe("authenticateInteractively", () => {
    afterEach(reset);

    it("should throw an error if authentication client has not been initialized", () => {
        expect(auth.authenticateInteractively([])).rejects.toThrowError();
    });

    it("should not throw an error if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        expect(auth.authenticateInteractively([])).resolves.not.toThrowError();
    });

    it("should return a result if successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        expect(await auth.authenticateInteractively([])).toStrictEqual(mockMadResult);
    });

    it("should return null if not successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        setConfig({ shouldFail: true });
        expect(await auth.authenticateInteractively([])).toBe(null);
    });
});

describe("authenticateSilently", () => {
    afterEach(reset);

    it("should throw an error if authentication client has not been initialized", () => {
        expect(auth.authenticateSilently([])).rejects.toThrowError();
    });

    it("should not throw an error if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        expect(auth.authenticateSilently([])).resolves.not.toThrowError();
    });

    it("should return a result if successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        expect(await auth.authenticateSilently([])).toStrictEqual(mockMadResult);
    });

    it("should return null if not successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        setConfig({ shouldFail: true });
        expect(await auth.authenticateSilently([])).toBe(null);
    });
});

describe("getAccount", () => {
    afterEach(reset);
    it("should throw an error if authentication client has not been initialized", () => {
        expect(auth.getAccount()).rejects.toThrowError();
    });

    it("should not throw an error if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        expect(auth.getAccount()).resolves.not.toThrowError();
    });

    it("should return an account if successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        const result = await auth.getAccount();
        expect(result?.identifier).toBeTruthy();
        expect(result?.username).toBeTruthy();
        expect(result?.name).toBe(undefined);
    });

    it("should return null if not successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        setConfig({ shouldFail: true });
        const result = await auth.getAccount();
        expect(result).toBe(null);
    });

    it("should contain name if react-native-msal provides it", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        setConfig({ accountShouldContainName: true });
        const result = await auth.getAccount();
        expect(result?.name).toBe("mock-name");
    });
});

describe("signOut", () => {
    afterEach(reset);
    it("should throw an error if authentication client has not been initialized", () => {
        expect(auth.signOut()).rejects.toThrowError();
    });

    it("should not throw an error if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        expect(auth.signOut()).resolves.not.toThrowError();
    });

    it("should return true if successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        const result = await auth.signOut();
        expect(result).toBe(true);
    });

    it("should return false if not successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" });
        setConfig({ shouldFail: true });
        const result = await auth.signOut();
        expect(result).toBe(false);
    });
});
