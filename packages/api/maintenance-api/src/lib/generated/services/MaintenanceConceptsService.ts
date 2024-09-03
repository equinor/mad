/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceConcept } from '../models/MaintenanceConcept';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MaintenanceConceptsService {

    /**
     * Maintenance Concept - Lookup
     * ### Overview
     * Lookup single maintenance concept
     *
     * ### Update release 1.7.0
     * Added property conceptInstructions to maintenance concept and property text for maintenance activity.
     *
     * ### Update release 1.9.0
     * Extended support for durations, now displaying durations for all formats in SAP. This change
     * is implemented on all the duration fields; `recommendedInterval`, `maxInterval` and `initialInterval`.
     *
     * Weeks (WCH) will be represented as days, e.g `WCH=5` will be converted to `P35D`
     *
     * @returns MaintenanceConcept Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getMaintenanceConcept({
        conceptId,
    }: {
        conceptId: string,
    }): CancelablePromise<MaintenanceConcept | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-concepts/{concept-id}',
            path: {
                'concept-id': conceptId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

}
