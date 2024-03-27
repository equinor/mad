/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceRecordActivity } from '../models/MaintenanceRecordActivity';
import type { MaintenanceRecordChangeFailureImpact } from '../models/MaintenanceRecordChangeFailureImpact';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModifiedEndpointsService {

    /**
     * Failure report - Change failure impact
     * ### Overview
     * Change failure impact of the failure report.
     * This endpoint should only be executed by persons which have access to the 'action box' in Equinor's ERP system.
     *
     * Client applications should take special care in ensuring the business process of Equinor is followed in advance of calling this endpoint.
     *
     * An activity for the failure report will be created by this call and the `priorityId`, `requiredStartDate`, and `requiredEndDate` will be recalculated.
     *
     * ### Important information
     * Most users will not have sufficient authorizations to execute this endpoint. If a request fails due to missing authorizations, the response code will be HTTP 403.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordActivity Success
     * @throws ApiError
     */
    public static failureReportChangeFailureImpact({
        recordId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string,
        /**
         * New failure impact - activity to be created on the failure report.
         */
        requestBody: MaintenanceRecordChangeFailureImpact,
    }): CancelablePromise<ProblemDetails | MaintenanceRecordActivity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/failure-reports/{record-id}/failure-impact-change',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to execute this endpoint`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

}
