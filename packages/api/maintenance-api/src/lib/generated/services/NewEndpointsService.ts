/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceRecordActivity } from '../models/MaintenanceRecordActivity';
import type { MaintenanceRecordChangeFailureImpact } from '../models/MaintenanceRecordChangeFailureImpact';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { RelationshipToEquipmentAdd } from '../models/RelationshipToEquipmentAdd';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

    /**
     * Work order relationships - Add related equipment
     * ### Overview
     * Add new relationship between a work order and an equipment.
     *
     * This endpoint returns no response data. Perform a lookup request for the specific work order type to get updated information. This is currently not possible for technical feedback, but is expected to be added in the future.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addRelationshipFromWorkOrderToEquipment({
        workOrderId,
        requestBody,
    }: {
        /**
         * Id of the work order (can be any type)
         */
        workOrderId: string,
        /**
         * Define equipment to add relationship to
         */
        requestBody: RelationshipToEquipmentAdd,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/work-order-relationships/{work-order-id}/related-equipment',
            path: {
                'work-order-id': workOrderId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to work order`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Change failure impact
     * ### Overview
     * Change failure impact of the failure report.
     * This endpoint should only be executed by people with access to the 'action box' in Equinor's ERP system.
     *
     * Client applications should take special care in ensuring the business process of Equinor is followed when using this endpoint.
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
