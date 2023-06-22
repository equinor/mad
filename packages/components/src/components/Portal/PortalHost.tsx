import React, { PropsWithChildren, memo, useContext, useEffect, useMemo } from "react";
import { PortalContext } from "./PortalContext";
import { View, ViewProps } from "react-native";

export type PortalHostProps = {
    /**
     * Identifier for portals to push content to.
     */
    name: "root" | string;
    /**
     * Determines whether or not the portal content is rendered before or after the children of the portal host
     */
    renderPortalsFirst?: boolean
};

const PortalHostComponent = ({
    name,
    children,
    renderPortalsFirst = true
}: PropsWithChildren<PortalHostProps & ViewProps>) => {
    const {
        registerHost,
        unregisterHost,
        hosts,
        ...rest
    } = useContext(PortalContext);

    useEffect(() => {
        registerHost(name);
        return () => unregisterHost(name);
    }, [name]);

    const host = useMemo(() => hosts.find(host => host.name === name), [hosts])
    return (
        <View {...rest}>
            {renderPortalsFirst && host?.node}
            {children}
            {!renderPortalsFirst && host?.node}
        </View>);
};
export const PortalHost = memo(PortalHostComponent);
PortalHost.displayName = "Portal.Host";