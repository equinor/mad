/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacteristicForSearch } from '../models/CharacteristicForSearch';
import type { CostCategory } from '../models/CostCategory';
import type { EqHubAndSemiUsage } from '../models/EqHubAndSemiUsage';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

    /**
     * Search characteristics
     * ### Overview
     * Search for characteristics by class type and class id.
     *
     * The class-type can be any of the following:
     * | class-type            |  Description                    |
     * |-----------------------|---------------------------------|
     * | 002                   |  Equipment                      |
     * | 003                   |  Tags                           |
     * | 015                   |  Notification Item              |
     * | 017                   |  Equipment                      |
     * | 037                   |  Measuring Point                |
     *
     * @returns CharacteristicForSearch Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCharacteristics({
        filter,
        classType,
        characteristicIdsAnyOf,
        classTypeKeyPrefix,
        perPage = 100,
        page = 1,
    }: {
        filter: 'by-characteristic-ids-any-of',
        classType: '002' | '003' | '015' | '037',
        /**
         * Required if filter is `by-characteristic-id-any-of`
         *
         */
        characteristicIdsAnyOf?: string,
        /**
         * Pre-fix of the object key, if searching for class type "003" (Tags) this may be set to "1100" to fetch all
         * characteristics from Tags starting with 1100, which would mean all tags for this plant.
         *
         */
        classTypeKeyPrefix?: string,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<CharacteristicForSearch> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/characteristics',
            query: {
                'filter': filter,
                'characteristic-ids-any-of': characteristicIdsAnyOf,
                'class-type-key-prefix': classTypeKeyPrefix,
                'class-type': classType,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Work orders - Get cost categories
     * ### Overview
     * Get a list of cost categories. They can be added to a work order when it requires special cost tracking.
     *
     * @returns CostCategory Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getCostCategories(): CancelablePromise<Array<CostCategory> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders/cost-categories',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
            },
        });
    }

    /**
     * Report for EqHub and SEMI usage - Get
     * ### Overview
     *
     * Get the list of EqHub and SEMI usage. T-code in backend system `ZOMPM_SEMI_USAGE`.
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
                'per-page': perPage,
                'page': page,
            },
            errors: {
                403: `User does not have sufficient rights to use T-code ZOMPM_SEMI_USAGE`,
            },
        });
    }

}
