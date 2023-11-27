import {authenticateSilently} from "@equinor/mad-auth";
import {getMadCommonBaseUrl, getMadCommonScopes} from "../../../utils/madCommonUtils";
import {Release} from "./ChangeLog";
import {Environment} from "../../../types";

export const fetchReleaseNotes = async (
    env: Environment,
    servicePortalName: string,
    appVersion: string,
): Promise<Release> => {
    const scopes = getMadCommonScopes(env);
    const baseUrl = getMadCommonBaseUrl(env);
    const authenticationResponse = await authenticateSilently(scopes);
    if (!authenticationResponse) throw new Error("Unable to authenticate silently");
    const fetchResponse = await fetch(`${baseUrl}/ReleaseNote/${servicePortalName}/${appVersion}`, {
        method: "GET",
        headers: new Headers({
            Authorization: `Bearer ${authenticationResponse.accessToken}`,
        }),
    });
    return await fetchResponse.json();
};

export const fetchAllReleaseNotes = async (
    env: Environment,
    servicePortalName: string,
): Promise<Release[]> => {
    const scopes = getMadCommonScopes(env);
    const baseUrl = getMadCommonBaseUrl(env);
    const authenticationResponse = await authenticateSilently(scopes);
    if (!authenticationResponse) throw new Error("Unable to authenticate silently");
    const fetchResponse = await fetch(`${baseUrl}/ReleaseNote/${servicePortalName}/`, {
        method: "GET",
        headers: new Headers({
            Authorization: `Bearer ${authenticationResponse.accessToken}`,
        }),
    });
    return await fetchResponse.json();
};