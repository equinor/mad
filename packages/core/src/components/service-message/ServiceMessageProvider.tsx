import React, { PropsWithChildren, useContext } from "react";
import { useFetchServiceMessage } from "./hooks/useFetchServiceMessage";

const ServiceMessageContext = React.createContext<ReturnType<typeof useFetchServiceMessage>>({
    serviceMessage: undefined,
    isDismissed: false,
    setIsDismissed: () => undefined,
    expansionEnabled: false,
    setExpansionEnabled: () => undefined,
    isExpanded: false,
    setIsExpanded: () => undefined,
    isError: false,
});

export const ServiceMessageProvider = ({ children }: PropsWithChildren) => {
    const serviceMessageState = useFetchServiceMessage();

    return (
        <ServiceMessageContext.Provider value={serviceMessageState}>
            {children}
        </ServiceMessageContext.Provider>
    );
};

export const useServiceMessageState = () => useContext(ServiceMessageContext);
