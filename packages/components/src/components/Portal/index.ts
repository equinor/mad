import { Portal as _Portal, PortalProps } from "./Portal";
import { PortalHost, PortalHostProps } from "./PortalHost";

type PortalFamily = typeof _Portal & {
	Host: typeof PortalHost;
};

const Portal = _Portal as PortalFamily;
Portal.Host = PortalHost;

export { Portal, PortalProps, PortalHostProps };
