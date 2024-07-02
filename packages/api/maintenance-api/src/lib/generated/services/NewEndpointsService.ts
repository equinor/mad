/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConceptActivities } from '../models/ConceptActivities';
import type { DocumentRelationshipToBusinessObjectsAdd } from '../models/DocumentRelationshipToBusinessObjectsAdd';
import type { MaintenanceRecordActivity } from '../models/MaintenanceRecordActivity';
import type { MaintenanceRecordOverridePriority } from '../models/MaintenanceRecordOverridePriority';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { WorkOrderMaterialJsonPatch } from '../models/WorkOrderMaterialJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NewEndpointsService {

    /**
     * Documents - Add new relationships to a document
     * ### Overview
     * Add new relationships between a single document and one or more business objects.
     *
     * Example url: `/documents/10004099768-A01-000-00?api-version=v1`
     *
     * This endpoint returns no response data.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addRelationshipBetweenBusinessObjectsAndSingleDocument({
        documentId,
        requestBody,
    }: {
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId: string,
        /**
         * Business objects to add a relationship to from the specified `documentId`
         */
        requestBody: Array<DocumentRelationshipToBusinessObjectsAdd>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/documents/{document-id}/relationships',
            path: {
                'document-id': documentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update document`,
                404: `The specified resource was not found`,
                409: `Document is locked by other user`,
            },
        });
    }

    /**
     * Work order operation - Update material
     * ### Overview
     * Update a material in a work order operation (of any work order type).
     *
     * The ´operation-id´ parameter to use in the url can be found using the various lookup and search endpoints for work orders. ´operation-id´ consist of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * The ´reservation-id´ parameter to use in the url can be found using the include-materials query parameter to work order lookup.
     *
     * The following fields are possible to update:
     *
     * - `finalLocation`
     * - `temporaryLocation`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateMaterialInWorkOrderOperation({
        operationId,
        reservationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Reservation id for the material found through work order lookup with include-materials
         */
        reservationId: string,
        /**
         * Update material details
         */
        requestBody: Array<WorkOrderMaterialJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-operations/{operation-id}/materials/{reservation-id}',
            path: {
                'operation-id': operationId,
                'reservation-id': reservationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Override priority
     * ### Overview
     * Override the `priorityId` value of a failure report.
     * The `priorityId` was initially calculated based on `failureImpactId` and the `ABCId` of the tag/equipment when the failure report was created. See [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocIndex.html?DOCVIEW=FALSE?DOCID=1046023) for more details.
     *
     * This endpoint should only be executed by people with access to the 'action box' in Equinor's ERP system.
     *
     * Client applications should take special care in ensuring the business process of Equinor is followed when using this endpoint.
     *
     * The activityCodeId defines the reason for overriding the priority
     * - `A111` = Incorrect ABC
     * - `A112` = Abnormal situation
     * - `A113` = Dummy FL/Missing FL
     *
     * An activity for the failure report will be created by this call.
     *
     * ### Important information
     * Most users will not have sufficient authorizations to execute this endpoint. If a request fails due to missing authorizations, the response code will be HTTP 403.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordActivity Success
     * @throws ApiError
     */
    public static overrideFailureReportPriority({
        recordId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string,
        /**
         * Extended end date-activity to be created on the failure report.
         */
        requestBody: MaintenanceRecordOverridePriority,
    }): CancelablePromise<ProblemDetails | MaintenanceRecordActivity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/failure-reports/{record-id}/override-priority',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to override priority`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

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
