import { Platform } from "react-native";
import { MadConfig } from "../types";

export const getRedirectUriFromAuthConfig = (authConfig: MadConfig["authentication"]): string => {
    const {redirectUriWeb, redirectUri} = authConfig;
    if (Platform.OS === "web") {
        if (!redirectUriWeb) throw new Error("Looks like you started your application for web, but you have not registered a redirect URI for web. Please add a 'redirectUriWeb' to your mad config")
        return redirectUriWeb;
    }
    return redirectUri;

}