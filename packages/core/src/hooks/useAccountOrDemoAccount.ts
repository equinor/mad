import { ExpoAuthSession, MadAccount, useAccount } from "@equinor/mad-auth";
import { useDemoMode } from "../store/demo-mode";
import { getConfig } from "../store";

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
    const msalAccount = useAccount();
    const expoAccount = ExpoAuthSession.useAccount();
    const account = getConfig().experimental?.useExpoAuthSession ? expoAccount : msalAccount;
    if (demoMode.isEnabled) return MAD_DEMO_USER;
    return account;
};
