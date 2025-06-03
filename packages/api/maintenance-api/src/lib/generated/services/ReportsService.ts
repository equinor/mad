/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConceptActivities } from '../models/ConceptActivities';
import type { EqHubAndSemiUsage } from '../models/EqHubAndSemiUsage';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReportsService {

    /**
     * Concept activities - Get
     * ### Overview
     *
     * Get the list of Maintenance Items implemented to a tag.
     *
     * @returns ConceptActivities Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getConceptActivities({
        plantId,
        tagId,
        includeItemCalls = true,
    }: {
        /**
         * Plant identifier
         */
        plantId: string,
        tagId: string,
        /**
         * Include calls to maintenance plan item
         */
        includeItemCalls?: boolean,
    }): CancelablePromise<Array<ConceptActivities> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reports/concept-activities',
            query: {
                'plant-id': plantId,
                'tag-id': tagId,
                'include-item-calls': includeItemCalls,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Report for EqHub and SEMI usage - Get
     * ### Overview
     *
     * Get the list of EqHub and SEMI usage. T-code in backend system `ZOMPM_SEMI_USAGE`.
     *
     * ### Update release 1.38.0
     * Added filter `changed-since-date` and `changed-before-date`.
     *
     * @returns EqHubAndSemiUsage Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getEqHubAndSemiUsage({
        eqhubIdAnyOf,
        semiIdAnyOf,
        filter,
        includeStatus = false,
        changedSinceDate,
        changedBeforeDate,
        perPage = 100,
        page = 1,
    }: {
        /**
         * Comma-separated List of eqhub id's
         */
        eqhubIdAnyOf?: string,
        /**
         * Comma-separated List of SEMI id's
         */
        semiIdAnyOf?: string,
        /**
         * Filter between eqhub or SEMI
         */
        filter?: 'eqhub' | 'SEMI',
        /**
         * Include status in response
         */
        includeStatus?: boolean,
        /**
         * Earliest date to return EqHub and SEMI usage for.
         */
        changedSinceDate?: string,
        /**
         * Latest date to return EqHub and SEMI usage for.
         */
        changedBeforeDate?: string,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<EqHubAndSemiUsage> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reports/eqhub-and-semi-usage',
            query: {
                'eqhub-id-any-of': eqhubIdAnyOf,
                'SEMI-id-any-of': semiIdAnyOf,
                'filter': filter,
                'include-status': includeStatus,
                'changed-since-date': changedSinceDate,
                'changed-before-date': changedBeforeDate,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                403: `User does not have sufficient rights to use T-code ZOMPM_SEMI_USAGE`,
            },
        });
    }

}
