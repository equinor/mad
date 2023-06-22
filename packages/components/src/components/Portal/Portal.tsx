import { PropsWithChildren, useContext, useEffect } from "react";
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
    }, [children])
    return null;
}