import { initiateAuthenticationClient as madAuthInitiateAuthenticationClient } from "@equinor/mad-auth";
import { getConfig } from "../store";
import { getRedirectUriFromAuthConfig } from "./getRedirectUriFromAuthConfig";

export const initiateAuthenticationClient = () => {
    const {
        authentication: { clientId, redirectUri: redirectUriIos, redirectUriWeb },
    } = getConfig();
    const redirectUri = getRedirectUriFromAuthConfig(redirectUriIos, redirectUriWeb);
    void madAuthInitiateAuthenticationClient({ clientId, redirectUri });
};
