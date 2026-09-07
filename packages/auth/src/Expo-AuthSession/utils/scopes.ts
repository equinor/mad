export const requiredAuthenticationScopes = ["openid", "profile", "offline_access"];

export const withRequiredAuthenticationScopes = (scopes: string[] = []) => [
    ...new Set([...scopes, ...requiredAuthenticationScopes]),
];
