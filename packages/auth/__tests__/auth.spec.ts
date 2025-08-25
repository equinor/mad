import { AuthRequestConfig } from "expo-auth-session";
import { useAuth } from "../src/Expo-AuthSession";
import * as auth from "../src/Expo-AuthSession/authenticationHandler/auth";
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

const resetConfig = () => useAuth.getState().resetConfig();
const setConfig = (config: AuthRequestConfig) => useAuth.getState().setConfig(config);

const reset = () => {
    auth.reset();
    resetConfig();
};

describe("authenticationClientExists", () => {
    afterEach(reset);

    it("should return false if authentication client has not been initialized", () => {
        expect(auth.authenticationClientExists()).toBe(false);
    });

    it("should return true if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        expect(auth.authenticationClientExists()).toBe(true);
    });
});

describe("authenticateInteractively", () => {
    afterEach(reset);

    it("should throw an error if authentication client has not been initialized", () => {
        expect(auth.authenticateInteractively()).resolves.toBe(null);
    });

    it("should not throw an error if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "mock-redirect-uri" }, {});
        expect(auth.authenticateInteractively()).resolves;
    });

    it("should return a result if successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "mock-redirect-uri" }, {});
        expect(await auth.authenticateInteractively()).toStrictEqual(null);
    });

    it("should return null if not successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        setConfig({ clientId: "test", redirectUri: "mock-redirect-uri" });
        expect(await auth.authenticateInteractively()).toBe(null);
    });
});

describe("authenticateSilently", () => {
    afterEach(reset);

    it("should throw an error if authentication client has not been initialized", () => {
        expect(auth.authenticateSilently()).resolves.toBeNull();
    });

    it("should not throw an error if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        expect(auth.authenticateSilently()).resolves.toBeDefined();
    });

    it("should return a result if successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        expect(await auth.authenticateSilently()).toStrictEqual(null);
    });

    it("should return null if not successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        setConfig({ clientId: "test", redirectUri: "mock-redirect-uri" });
        expect(await auth.authenticateSilently()).toBe(null);
    });
});

describe("getAccount", () => {
    afterEach(reset);
    it("should throw an error if authentication client has not been initialized", () => {
        expect(auth.getAccount()).toBeNull();
    });

    it("should not throw an error if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        expect(auth.getAccount()).toBeNull();
    });

    it("should return an account if successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        const result = await auth.getAccount();
        expect(result).toBeNull();
    });

    it("should return null if not successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        setConfig({ clientId: "test", redirectUri: "mock-redirect-uri" });
        const result = await auth.getAccount();
        expect(result).toBe(null);
    });
});

describe("signOut", () => {
    afterEach(reset);
    it("should throw an error if authentication client has not been initialized", () => {
        try {
            auth.signOut();
        } catch (error) {
            expect(error.message).toBe(
                "Unable to authenticate, authentication client does not exist",
            );
        }
    });

    it("should not throw an error if authentication client has been initialized", () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        expect(auth.signOut()).toBeTruthy();
    });

    it("should return true if successful", async () => {
        auth.initiateAuthenticationClient({ clientId: "", redirectUri: "" }, {});
        const result = await auth.signOut();
        expect(result).toBe(true);
    });
});
