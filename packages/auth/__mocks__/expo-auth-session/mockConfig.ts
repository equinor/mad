export const mockDiscovery = {
    authorizationEndpoint: "https://mock-auth.com/auth",
    tokenEndpoint: "https://mock-auth.com/token",
    revocationEndpoint: "https://mock-auth.com/revoke",
};

export const mockRequestConfig = {
    clientId: "mock-client-id",
    redirectUri: "mock-redirect-uri",
    scopes: ["profile", "email"],
    responseType: "token",
};
