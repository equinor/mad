import { MadAccount, useAccount } from "@equinor/mad-auth";
import { useDemoMode } from "../store/demo-mode";

const MAD_DEMO_USER: MadAccount = {
    name: "Demo user",
    username: "demo.user@example.com",
    identifier: "-1",
};

/**
 * If demo mode is enabled, this will return a mock account.
 * Otherwise returns the result from `mad-auth`'s `useAccount` hook.
 * @returns account if it exists
 */
export const useAccountOrDemoAccount = () => {
    const demoMode = useDemoMode();
    const account = useAccount();
    if (demoMode.isEnabled) return MAD_DEMO_USER;
    return account;
};
