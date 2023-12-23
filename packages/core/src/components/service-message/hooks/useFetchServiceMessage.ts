import { useEffect, useRef, useState } from "react";
import { ServiceMessage } from "../types";
import { getConfig } from "../../../store/mad-config";
import { getMadCommonBaseUrl } from "../../../utils/madCommonUtils";

export const useFetchServiceMessage = () => {
    const [serviceMessage, setServiceMessage] = useState<ServiceMessage>();
    const [isDismissed, setIsDismissed] = useState(false);
    const [expansionEnabled, setExpansionEnabled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isError, setIsError] = useState(false);

    const lastInterval = useRef<NodeJS.Timeout>();

    useEffect(() => {
        function fetchServiceMessage() {
            const { currentEnvironment, servicePortalName } = getConfig();
            fetch(`${getMadCommonBaseUrl(currentEnvironment)}/ServiceMessage/${servicePortalName}`)
                .then(res =>
                    res.json().then((data: ServiceMessage) => {
                        if (!data.message) return;
                        if (!serviceMessage || data.alertName !== serviceMessage.alertName) {
                            setServiceMessage(data);
                            setIsDismissed(false);
                            setExpansionEnabled(false);
                            setIsExpanded(false);
                            setIsError(false);
                        }
                    }),
                )
                .catch(() => {
                    setIsError(true);
                });
        }

        if (!lastInterval.current) fetchServiceMessage();
        if (lastInterval.current) clearInterval(lastInterval.current);
        lastInterval.current = setInterval(() => {
            fetchServiceMessage();
        }, 60000);

        return () => {
            clearInterval(lastInterval.current);
        };
    }, [serviceMessage]);
    return {
        serviceMessage,
        isDismissed,
        setIsDismissed,
        expansionEnabled,
        setExpansionEnabled,
        isExpanded,
        setIsExpanded,
        isError,
    };
};
