import { mockAuthResponse } from "./mockData";
import { mockDiscovery, mockRequestConfig } from "./mockConfig";

export class AuthRequest {
    config: any;
    constructor(config: any) {
        this.config = config;
    }

    async makeAuthUrlAsync(): Promise<string> {
        return "https://mock-auth.com/auth?client_id=mock-client-id";
    }

    async promptAsync(): Promise<any> {
        return {
            type: "success",
            params: {
                access_token: "mock-access-token",
                token_type: "Bearer",
                expires_in: 3600,
            },
        };
    }
}

export const useAuthRequest = jest.fn(() => {
    return [
        {
            url: "https://mock-auth.com/auth?client_id=mock-client-id",
            promptAsync: jest.fn().mockResolvedValue(mockAuthResponse),
        },
        mockAuthResponse,
        mockRequestConfig,
    ];
});

export const makeRedirectUri = jest.fn(() => "mock-redirect-uri");

export const ResponseType = {
    Token: "token",
};

export const useAutoDiscovery = jest.fn(() => mockDiscovery);

export const exchangeCodeAsync = jest.fn(async () => {
    return {
        accessToken: "mock-access-token",
        tokenType: "Bearer",
        expiresIn: 3600,
        refreshToken: "mock-refresh-token",
    };
});
