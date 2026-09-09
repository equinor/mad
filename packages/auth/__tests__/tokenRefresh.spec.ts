import { TokenResponse } from "expo-auth-session";
import * as authStore from "../src/Expo-AuthSession/store/authStore";
import { tokenRefresh } from "../src/Expo-AuthSession/utils/tokenRefresh";

jest.mock("../src/Expo-AuthSession/store/authStore");

const store = jest.mocked(authStore);

beforeEach(() => {
    jest.clearAllMocks();
    store.getDiscovery.mockReturnValue({
        tokenEndpoint: "https://mock/token",
    });
});

describe("tokenRefresh", () => {
    it("uses request scopes without mutating the shared config", async () => {
        const config = {
            clientId: "client",
            redirectUri: "redirect",
            scopes: ["default-scope"],
        };
        const refreshAsync = jest.fn().mockResolvedValue(undefined);
        const token = { refreshAsync } as unknown as TokenResponse;
        store.getConfig.mockReturnValue(config);

        await tokenRefresh(token, ["requested-scope"]);

        expect(refreshAsync).toHaveBeenCalledWith(
            { ...config, scopes: ["requested-scope"] },
            expect.any(Object),
        );
        expect(config.scopes).toEqual(["default-scope"]);
    });

    it("uses the configured scopes when request scopes are omitted", async () => {
        const config = {
            clientId: "client",
            redirectUri: "redirect",
            scopes: ["default-scope"],
        };
        const refreshAsync = jest.fn().mockResolvedValue(undefined);
        const token = { refreshAsync } as unknown as TokenResponse;
        store.getConfig.mockReturnValue(config);

        await tokenRefresh(token);

        expect(refreshAsync).toHaveBeenCalledWith(config, expect.any(Object));
    });
});
