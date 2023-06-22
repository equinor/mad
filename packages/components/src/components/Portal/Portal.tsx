import React, { PropsWithChildren, useContext, useEffect } from "react";
import { PortalContext } from "./PortalContext";

export type PortalProps = {
    name: "root" | string;
}

export const Portal = ({
    name,
    children,
}: PropsWithChildren<PortalProps>) => {
    const {
        registerHost,
        bindNode,
    } = useContext(PortalContext);

    useEffect(() => {
        registerHost(name);
        bindNode(name, children);
    }, [children]);

    useEffect(() => {
        return () => {
            bindNode(name, null);
        }
    }, [])

    return null;
}