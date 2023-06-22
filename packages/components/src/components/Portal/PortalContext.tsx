import React, { PropsWithChildren, ReactNode, createContext, useState } from "react";

export type PortalContextType = {
    registerHost: (name: string) => void;
    unregisterHost: (name: string) => void;
    bindNode: (name: string, node: ReactNode) => void;
    hosts: PortalHostType[];

}

export type PortalHostType = {
    name: string;
    node?: ReactNode;
}

export const PortalContext = createContext<PortalContextType>({
    registerHost: () => null,
    unregisterHost: () => null,
    bindNode: () => null,
    hosts: [],
});

export const PortalProvider = ({
    children
}: PropsWithChildren) => {
    const [hosts, setHosts] = useState<PortalHostType[]>([]);

    const contextOptions: PortalContextType = ({
        registerHost(name) {
            if (hosts.find(host => host.name === name)) return;
            setHosts(state => [...state, { name: name }]);
        },
        unregisterHost(name) {
            setHosts(state => state.filter(host => host.name !== name));
        },
        bindNode(name, node) {
            setHosts((state) => state.map((host) => {
                if (host.name === name) {
                    return {
                        ...host,
                        node: node,
                    };
                } else {
                    return host;
                }
            }));
        },
        hosts,
    });

    return (
        <PortalContext.Provider value={contextOptions}>
            {children}
        </PortalContext.Provider>
    )
}