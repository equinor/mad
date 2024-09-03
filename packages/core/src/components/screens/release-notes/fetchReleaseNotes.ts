import { authenticateSilently, ExpoAuthSession } from "@equinor/mad-auth";
import { getMadCommonBaseUrl, getMadCommonScopes } from "../../../utils/madCommonUtils";
import { Release } from "./ChangeLog";
import { Environment } from "../../../types";
import { getConfig } from "../../../store";

export const fetchReleaseNotes = async (
    env: Environment,
    servicePortalName: string,
    appVersion: string,
): Promise<Release> => {
    const scopes = getMadCommonScopes(env);
    const baseUrl = getMadCommonBaseUrl(env);
    const authenticationResponse = getConfig().experimental?.useExpoAuthSession
        ? await ExpoAuthSession.authenticateSilently(scopes)
        : await authenticateSilently(scopes);

    if (!authenticationResponse) throw new Error("Unable to authenticate silently");
    const fetchResponse = await fetch(`${baseUrl}/ReleaseNote/${servicePortalName}/${appVersion}`, {
        method: "GET",
        headers: new Headers({
            Authorization: `Bearer ${authenticationResponse.accessToken}`,
        }),
    });
    return (await fetchResponse.json()) as Release;
};

export const fetchAllReleaseNotes = async (
    env: Environment,
    servicePortalName: string,
): Promise<Release[]> => {
    const scopes = getMadCommonScopes(env);
    const baseUrl = getMadCommonBaseUrl(env);
    const authenticationResponse = getConfig().experimental?.useExpoAuthSession
        ? await ExpoAuthSession.authenticateSilently(scopes)
        : await authenticateSilently(scopes);
    if (!authenticationResponse) throw new Error("Unable to authenticate silently");
    const fetchResponse = await fetch(`${baseUrl}/ReleaseNote/${servicePortalName}/`, {
        method: "GET",
        headers: new Headers({
            Authorization: `Bearer ${authenticationResponse.accessToken}`,
        }),
    });
    const result = (await fetchResponse.json()) as Release[];
    return result;
};
