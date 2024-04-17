export type MadAccount = {
    username: string;
    name: string | undefined;
    identifier: string;
};

export type MadAuthenticationResult = {
    account: MadAccount;
    accessToken: string;
};
export type UserInfo = {
    name: string;
    unique_name: string;
    onprem_sid: string;
}