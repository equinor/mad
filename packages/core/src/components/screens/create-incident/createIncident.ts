import { authenticateSilently } from "@equinor/mad-auth";
import { getMadCommonBaseUrl, getMadCommonScopes } from "../../../utils/madCommonUtils";
import { Environment } from "../../../types";

type IncidentData = {
    callerEmail: string | undefined;
    title: string | undefined;
    description: string;
};

export type CreateIncidentResponse = {
    result: {
        status: string;
        details: {
            number: string;
        };
    };
};

export const createIncident = async (
    data: IncidentData,
    env: Environment,
    serviceNow: string | undefined,
): Promise<CreateIncidentResponse> => {
    const baseUrl = getMadCommonBaseUrl(env);
    const scopes = getMadCommonScopes(env);
    const authenticationResponse = await authenticateSilently(scopes);
    if (!authenticationResponse) throw new Error("Unable to authenticate silently");
    const fetchResponse = await fetch(`${baseUrl}/ServiceNow/apps/${serviceNow}/incidents`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authenticationResponse.accessToken}`,
        }),
    });
    return await fetchResponse
        .json()
        .then((result: string) => JSON.parse(result) as CreateIncidentResponse);
};
