import { ServiceMessage } from "../types";

export const resolveMessageFromServiceMessage = (
    serviceMessage: ServiceMessage,
    isError: boolean,
): { message: string; url?: string | null } => {
    if (isError)
        return {
            message: "Could not retrieve service message.",
        };

    return {
        message: serviceMessage.message,
        url: serviceMessage.urlString,
    };
};
