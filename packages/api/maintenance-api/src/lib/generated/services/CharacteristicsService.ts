/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacteristicForSearch } from '../models/CharacteristicForSearch';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CharacteristicsService {

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

}
