export type MadAccount = {
    username: string;
    name: string | undefined;
    identifier: string;
};

export type MadAuthenticationResult = {
    account: MadAccount;
    accessToken: string;
};
