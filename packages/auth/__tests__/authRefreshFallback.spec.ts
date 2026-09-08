import { AuthRequest, exchangeCodeAsync, refreshAsync, TokenResponse } from "expo-auth-session";
import * as auth from "../src/Expo-AuthSession/authenticationHandler/auth";
import * as authenticationHandler from "../src/Expo-AuthSession/authenticationHandler";
import * as authStore from "../src/Expo-AuthSession/store/authStore";
import { decodeToken } from "../src/Expo-AuthSession/utils/decodeToken";
import { tokenRefresh } from "../src/Expo-AuthSession/utils/tokenRefresh";
import { MadAccount } from "../src/types";

const mockPromptAsync = jest.fn().mockResolvedValue({
    type: "success",
    params: { code: "mock-code" },
});

jest.mock("../src/Expo-AuthSession/store/authStore");
jest.mock("../src/Expo-AuthSession/utils/tokenRefresh");
jest.mock("../src/Expo-AuthSession/utils/decodeToken");
jest.mock("expo-auth-session", () => ({
    AuthRequest: jest.fn().mockImplementation(() => ({
        codeVerifier: "mock-verifier",
        promptAsync: mockPromptAsync,
    })),
    exchangeCodeAsync: jest.fn().mockResolvedValue({
        accessToken: "interactive-access-token",
        idToken: "mock-id-token",
        refreshToken: "interactive-refresh-token",
    }),
    refreshAsync: jest.fn(),
    TokenResponse: { isTokenFresh: jest.fn() },
}));

const mockAccount: MadAccount = {
    identifier: "mock-id",
    name: "Test User",
    username: "test",
};

const store = jest.mocked(authStore);
const mockedTokenRefresh = jest.mocked(tokenRefresh);
const mockedDecodeToken = jest.mocked(decodeToken);
const MockedAuthRequest = jest.mocked(AuthRequest);
const mockedExchangeCodeAsync = jest.mocked(exchangeCodeAsync);
const mockedRefreshAsync = jest.mocked(refreshAsync);
const mockedIsTokenFresh = TokenResponse.isTokenFresh as jest.Mock;

beforeEach(() => {
    jest.clearAllMocks();
    mockPromptAsync.mockResolvedValue({
        type: "success",
        params: { code: "mock-code" },
    });
    store.getUserData.mockReturnValue(mockAccount);
    store.getConfig.mockReturnValue({
        clientId: "client",
        redirectUri: "redirect",
        scopes: ["login-resource-scope", "openid", "profile", "offline_access"],
    });
    store.getDiscovery.mockReturnValue({
        authorizationEndpoint: "https://mock/auth",
        tokenEndpoint: "https://mock/token",
    });
    mockedDecodeToken.mockReturnValue(mockAccount);
});

describe("authenticateSilently with an expired access token", () => {
    beforeEach(() => {
        store.getToken.mockReturnValue({ accessToken: "stale" } as TokenResponse);
        mockedIsTokenFresh.mockReturnValue(false);
    });

    it("returns null without opening interactive auth when tokenRefresh throws", async () => {
        mockedTokenRefresh.mockRejectedValue(
            new Error("AADSTS70043: The refresh token has expired"),
        );

        const result = await auth.authenticateSilently(["api://mock/scope"]);

        expect(mockedTokenRefresh).toHaveBeenCalledTimes(1);
        expect(MockedAuthRequest).not.toHaveBeenCalled();
        expect(result).toBeNull();
    });

    it("does not reject when the refresh call throws", async () => {
        mockedTokenRefresh.mockRejectedValue(new Error("boom"));
        await expect(auth.authenticateSilently(["scope"])).resolves.toBeDefined();
    });

    it("returns null without opening interactive auth when tokenRefresh resolves null", async () => {
        mockedTokenRefresh.mockResolvedValue(undefined);

        const result = await auth.authenticateSilently(["scope"]);

        expect(MockedAuthRequest).not.toHaveBeenCalled();
        expect(result).toBeNull();
    });

    it("does not persist or return an expired refreshed token", async () => {
        const refreshedToken = {
            accessToken: "still-stale",
            refreshToken: "rotated-refresh-token",
        } as TokenResponse;
        mockedTokenRefresh.mockResolvedValue(refreshedToken);

        const result = await auth.authenticateSilently(["scope"]);

        expect(mockedIsTokenFresh).toHaveBeenCalledWith(refreshedToken);
        expect(store.setToken).not.toHaveBeenCalled();
        expect(store.setRefreshToken).not.toHaveBeenCalled();
        expect(result).toBeNull();
    });

    it("persists and returns a fresh refreshed token", async () => {
        const refreshedToken = {
            accessToken: "fresh",
            refreshToken: "rotated-refresh-token",
        } as TokenResponse;
        mockedTokenRefresh.mockResolvedValue(refreshedToken);
        mockedIsTokenFresh.mockReturnValueOnce(false).mockReturnValueOnce(true);

        const result = await auth.authenticateSilently(["scope"]);

        expect(store.setToken).toHaveBeenCalledWith(refreshedToken);
        expect(store.setRefreshToken).toHaveBeenCalledWith("rotated-refresh-token");
        expect(result).toEqual({ account: mockAccount, accessToken: "fresh" });
    });
});

describe("authenticateSilently with only a corrupted refresh token", () => {
    it("returns null without opening interactive auth", async () => {
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken.mockReturnValue("CORRUPTED TOKEN");
        mockedRefreshAsync.mockRejectedValue(new Error("invalid refresh token"));

        const result = await auth.authenticateSilently(["api://mock/scope"]);

        expect(mockedRefreshAsync).toHaveBeenCalledWith(
            expect.objectContaining({ scopes: ["api://mock/scope"] }),
            expect.any(Object),
        );
        expect(MockedAuthRequest).not.toHaveBeenCalled();
        expect(store.resetRefreshToken).toHaveBeenCalledTimes(1);
        expect(result).toBeNull();
    });

    it("does not clear a newer refresh token after an older refresh fails", async () => {
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken
            .mockReturnValueOnce("CORRUPTED TOKEN")
            .mockReturnValueOnce("new-refresh-token");
        mockedRefreshAsync.mockRejectedValue(new Error("invalid refresh token"));

        const result = await auth.authenticateSilently(["api://mock/scope"]);

        expect(store.resetRefreshToken).not.toHaveBeenCalled();
        expect(result).toBeNull();
    });

    it("does not persist or return an expired refreshed token", async () => {
        const refreshedToken = {
            accessToken: "still-stale",
            refreshToken: "rotated-refresh-token",
        } as TokenResponse;
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken.mockReturnValue("refresh-token");
        mockedRefreshAsync.mockResolvedValue(refreshedToken);
        mockedIsTokenFresh.mockReturnValue(false);

        const result = await auth.authenticateSilently(["scope"]);

        expect(mockedIsTokenFresh).toHaveBeenCalledWith(refreshedToken);
        expect(store.setToken).not.toHaveBeenCalled();
        expect(store.setRefreshToken).not.toHaveBeenCalled();
        expect(result).toBeNull();
    });

    it("persists and returns a fresh refreshed token", async () => {
        const refreshedToken = {
            accessToken: "fresh",
            refreshToken: "rotated-refresh-token",
        } as TokenResponse;
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken.mockReturnValue("refresh-token");
        mockedRefreshAsync.mockResolvedValue(refreshedToken);
        mockedIsTokenFresh.mockReturnValue(true);

        const result = await auth.authenticateSilently(["scope"]);

        expect(store.setToken).toHaveBeenCalledWith(refreshedToken);
        expect(store.setRefreshToken).toHaveBeenCalledWith("rotated-refresh-token");
        expect(result).toEqual({ account: mockAccount, accessToken: "fresh" });
    });
});

describe("authenticate", () => {
    it.each(["cancel", "dismiss"])(
        "reports %s when interactive fallback is cancelled",
        async responseType => {
            store.getToken.mockReturnValue(undefined);
            store.getRefreshToken.mockReturnValue(undefined);
            mockPromptAsync.mockResolvedValueOnce({ type: responseType });
            const onAuthenticationCancelled = jest.fn();

            const result = await authenticationHandler.authenticate(["scope"], {
                onAuthenticationCancelled,
            });

            expect(result).toBeNull();
            expect(onAuthenticationCancelled).toHaveBeenCalledTimes(1);
        },
    );

    it.each(["access_denied"])("reports OAuth %s responses as cancellation", async error => {
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken.mockReturnValue(undefined);
        mockPromptAsync.mockResolvedValueOnce({
            type: "error",
            params: { error },
            error: { code: error },
        });
        const onAuthenticationCancelled = jest.fn();

        const result = await authenticationHandler.authenticate(["scope"], {
            onAuthenticationCancelled,
        });

        expect(result).toBeNull();
        expect(onAuthenticationCancelled).toHaveBeenCalledTimes(1);
    });

    it("does not report other interactive failures as cancellation", async () => {
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken.mockReturnValue(undefined);
        mockPromptAsync.mockResolvedValueOnce({
            type: "error",
            params: { error: "server_error" },
            error: { code: "server_error" },
        });
        const onAuthenticationCancelled = jest.fn();

        const result = await authenticationHandler.authenticate(["scope"], {
            onAuthenticationCancelled,
        });

        expect(result).toBeNull();
        expect(onAuthenticationCancelled).not.toHaveBeenCalled();
    });

    it("keeps interactive authentication cancellation backward compatible", async () => {
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken.mockReturnValue(undefined);
        mockPromptAsync.mockResolvedValueOnce({ type: "cancel" });

        await expect(auth.authenticateInteractively(["scope"])).resolves.toBeNull();
    });

    it("falls back to correctly scoped interactive auth for a corrupted refresh token", async () => {
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken.mockReturnValue("CORRUPTED TOKEN");
        mockedRefreshAsync.mockRejectedValue(new Error("invalid refresh token"));

        const result = await authenticationHandler.authenticate(["api://mock/scope"]);

        expect(MockedAuthRequest).toHaveBeenCalledTimes(1);
        expect(MockedAuthRequest).toHaveBeenCalledWith(
            expect.objectContaining({
                scopes: ["api://mock/scope", "openid", "profile", "offline_access"],
            }),
        );
        expect(MockedAuthRequest).not.toHaveBeenCalledWith(
            expect.objectContaining({ scopes: expect.arrayContaining(["login-resource-scope"]) }),
        );
        expect(store.setRefreshToken).toHaveBeenCalledWith("interactive-refresh-token");
        expect(result).toEqual({
            account: mockAccount,
            accessToken: "interactive-access-token",
        });
    });

    it("does not open interactive auth when silent auth succeeds", async () => {
        store.getToken.mockReturnValue({ accessToken: "cached" } as TokenResponse);
        mockedIsTokenFresh.mockReturnValue(true);

        const result = await authenticationHandler.authenticate(["scope"]);

        expect(MockedAuthRequest).not.toHaveBeenCalled();
        expect(result).toEqual({ account: mockAccount, accessToken: "cached" });
    });

    it("opens one prompt for concurrent callers", async () => {
        store.getToken
            .mockReturnValueOnce(undefined)
            .mockReturnValueOnce(undefined)
            .mockReturnValue({ accessToken: "cached" } as TokenResponse);
        store.getRefreshToken.mockReturnValue(undefined);
        mockedIsTokenFresh.mockReturnValue(true);

        const [initiator, waiter] = await Promise.all([
            authenticationHandler.authenticate(["initiator-scope"]),
            authenticationHandler.authenticate(["waiter-scope"]),
        ]);

        expect(MockedAuthRequest).toHaveBeenCalledTimes(1);
        expect(MockedAuthRequest).toHaveBeenCalledWith(
            expect.objectContaining({
                scopes: ["initiator-scope", "openid", "profile", "offline_access"],
            }),
        );
        expect(store.getToken).toHaveBeenLastCalledWith(["waiter-scope"]);
        expect(initiator).toEqual({
            account: mockAccount,
            accessToken: "interactive-access-token",
        });
        expect(waiter).toEqual({ account: mockAccount, accessToken: "cached" });
    });

    it("shares the interactive result with concurrent callers requesting the same scopes", async () => {
        store.getToken.mockReturnValue(undefined);
        store.getRefreshToken.mockReturnValue(undefined);

        const [initiator, waiter] = await Promise.all([
            authenticationHandler.authenticate(["shared-scope"]),
            authenticationHandler.authenticate(["shared-scope"]),
        ]);

        expect(MockedAuthRequest).toHaveBeenCalledTimes(1);
        expect(store.getToken).toHaveBeenCalledTimes(2);
        expect(initiator).toEqual({
            account: mockAccount,
            accessToken: "interactive-access-token",
        });
        expect(waiter).toEqual(initiator);
    });

    it("clears an existing refresh token when interactive auth returns no replacement", async () => {
        mockedExchangeCodeAsync.mockResolvedValueOnce({
            accessToken: "interactive-access-token",
            idToken: "mock-id-token",
        } as TokenResponse);

        const result = await auth.authenticateInteractively(["scope"]);

        expect(result).toEqual({
            account: mockAccount,
            accessToken: "interactive-access-token",
        });
        expect(store.resetRefreshToken).toHaveBeenCalledTimes(1);
    });
});

describe("authenticateInteractively single-flight guard", () => {
    it("opens only one prompt for concurrent callers", async () => {
        store.getToken.mockReturnValue({ accessToken: "cached" } as TokenResponse);
        mockedIsTokenFresh.mockReturnValue(true);

        const [initiator, waiter] = await Promise.all([
            auth.authenticateInteractively(["initiator-scope"]),
            auth.authenticateInteractively(["waiter-scope"]),
        ]);

        expect(MockedAuthRequest).toHaveBeenCalledTimes(1);
        expect(MockedAuthRequest).toHaveBeenCalledWith(
            expect.objectContaining({
                scopes: ["initiator-scope", "openid", "profile", "offline_access"],
            }),
        );
        expect(store.getToken).toHaveBeenCalledWith(["waiter-scope"]);
        expect(initiator).toEqual({
            account: mockAccount,
            accessToken: "interactive-access-token",
        });
        expect(waiter).toEqual({ account: mockAccount, accessToken: "cached" });
    });
});
