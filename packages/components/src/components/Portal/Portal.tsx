import { PropsWithChildren, useContext, useEffect } from "react";
import { PortalContext } from "./PortalContext";

export type PortalProps = {
    /**
     * The name of the portal. The name will be registered and available for all components to route to.
     */
    name: "root" | Omit<string, "root">;
};

export const Portal = ({ name, children }: PropsWithChildren<PortalProps>) => {
    const { registerHost, bindNode } = useContext(PortalContext);

    useEffect(() => {
        registerHost(name as string);
        bindNode(name as string, children);
    }, [children, name]);

    useEffect(() => {
        return () => {
            bindNode(name as string, null);
        };
    }, [name]);

    return null;
};
