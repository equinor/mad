/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CatalogProfile } from '../models/CatalogProfile';
import type { CatalogProfileWithText } from '../models/CatalogProfileWithText';
import type { CodeGroup } from '../models/CodeGroup';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MasterDataForCatalogsService {

    /**
     * Code Group - Search
     * ### Overview
     * Returns a list of codeGroups that belong in the catalog.
     *
     * The catalog-id can be any of the following:
     * | catalogId      |  Description                                                         |
     * |-----------------------|-----------------------------------------------------------------------|
     * | 1                     |  Characteristic attribute       |
     * | 2                     |  Tasks                          |
     * | 5                     |  Failure mechanism              |
     * | C                     |  Failure mode                   |
     * | V                     |  Measuring points               |
     * | D                     |  Coding                         |
     *
     * ### Update release 1.28.0
     * Added catalog for coding to be used for general classification of maintenance records.
     *
     * @returns CodeGroup Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCodeGroup({
        catalogId,
    }: {
        catalogId: '1' | '2' | '5' | 'C' | 'D' | 'V',
    }): CancelablePromise<Array<CodeGroup> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/catalogs/{catalog-id}/code-groups',
            path: {
                'catalog-id': catalogId,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Catalog Profiles - Search
     * ### Overview
     * Returns a list of Catalog Profiles for the given `catalog-profile-id`s. This endpoint allows for including the following multi-line `helpText` properties if `include-text=true` is set in the request:
     * - `failureModeHelpText` for `failureModes`
     * - `detectionMethodHelpText` for `detectionMethods`
     * - `failureMechanismHelpText` for `failureMechanisms`
     *
     * These are not included by default due to their detrimental effect on the performance of this endpoint.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCatalogProfiles({
        catalogProfileId,
        includeText = false,
    }: {
        /**
         * List of `catalog-profile-id`s to search for
         */
        catalogProfileId: string,
        /**
         * Include helpText properties for failureModes, detectionMethods and failureMechanisms in the response. Affects performance.
         */
        includeText?: boolean,
    }): CancelablePromise<Array<(CatalogProfile | CatalogProfileWithText)> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/catalogs/profiles',
            query: {
                'catalog-profile-id': catalogProfileId,
                'include-text': includeText,
            },
            errors: {
                400: `The request was malformed or contained invalid parameters.`,
                404: `The specified resource was not found`,
            },
        });
    }

}
