import React, { PropsWithChildren, useContext, useEffect } from "react";
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
		registerHost(name);
		bindNode(name, children);
	}, [children]);

	useEffect(() => {
		return () => {
			bindNode(name, null);
		};
	}, []);

	return null;
};
