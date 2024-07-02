/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConceptActivities } from '../models/ConceptActivities';
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

}
