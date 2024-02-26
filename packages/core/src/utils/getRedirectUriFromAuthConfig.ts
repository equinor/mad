import { Platform } from "react-native";

export const getRedirectUriFromAuthConfig = (
    redirectUri: string,
    redirectUriWeb?: string,
): string => {
    if (Platform.OS === "web") {
        if (!redirectUriWeb)
            throw new Error(
                "Looks like you started your application for web, but you have not registered a redirect URI for web. Please add a 'redirectUriWeb' to your mad config",
            );
        return redirectUriWeb;
    }
    return redirectUri;
};
