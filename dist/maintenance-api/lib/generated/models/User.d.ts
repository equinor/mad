import type { UserAuthorizations } from './UserAuthorizations';
export type User = {
    /**
     * The id of the logged on user
     */
    userId: string | null;
    userType: 'EQUINOR' | 'SYSTEM' | 'AFFILIATED' | 'UNKNOWN';
    /**
     * Is the user type supported for the API. Affiliated and unknown user types are not supported currently.
     */
    isUserTypeSupported: boolean;
    authorization?: UserAuthorizations;
};
