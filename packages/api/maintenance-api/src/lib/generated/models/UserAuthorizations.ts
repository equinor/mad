/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserAuthorizations = {
    /**
     * Overall indicator if the logged in user has the necessary access to use the API
     */
    hasAccessToAPI: boolean;
    details: {
        /**
         * Azure AD access is one of the required access for a user in order to use the API
         */
        hasAzureADAccess: boolean;
        /**
         * ERP Gateway access is one of the required access for a user in order to use the API
         */
        hasERPGatewayAccess: boolean;
        /**
         * ERP access is one of the required access for a user in order to use the API
         */
        hasERPAccess: boolean | null;
    };
};

