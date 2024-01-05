/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
    /**
     * Is the user a discipline responsible user.
     */
    isDisciplineResponsible?: boolean;
};

