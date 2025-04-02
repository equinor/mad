/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertificationReportBasic } from '../models/CertificationReportBasic';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { PSVCertificationReportCreate } from '../models/PSVCertificationReportCreate';
import type { WorkOrderOperationForSearchFull } from '../models/WorkOrderOperationForSearchFull';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UpcomingNewEndpointsService {

    /**
     * @deprecated
     * Work order operations - Search
     * ### Deprecated
     * This endpoint is marked as deprecated due to currently being unavailable. This endpoint is only a draft. Calling the endpoint until available will result in a `404- Not Found`. Deprecation will be removed when the endpoint is available.
     *
     * ### Overview
     * Search for work order operations from any work order type.
     *
     * ### Query parameter filters
     *
     * The following query parameters are supported for filtering the work order operations.
     * All the query parameters are optional, but at least one must be provided to get a response.
     *
     * Parameters:
     * - `work-center-id-any-of`
     * - `plant-id`
     * - `changed-since-datetime`
     * - `changed-before-datetime`
     * - `operation-id-any-of`
     * - `work-order-ids-any-of`
     *
     * @returns WorkOrderOperationForSearchFull Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchWorkOrderOperations({
        plantId,
        changedSinceDatetime,
        changedBeforeDatetime,
        workCenterIdAnyOf,
        workOrderIdsAnyOf,
        operationIdAnyOf,
        includeMaterials = false,
        includeAttachments = false,
        includeSafetyMeasures = false,
        perPage = 100,
        page = 1,
    }: {
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Earliest `changedOnDate` to return work order operations for
         */
        changedSinceDatetime?: string,
        /**
         * Limit the response to only work order operations changed after `changed-since-datetime` but before this datetime
         */
        changedBeforeDatetime?: string,
        /**
         * Comma-separated list of `work-center-id`. Wildcard endings are supported
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of `work-order-id`.
         */
        workOrderIdsAnyOf?: string,
        /**
         * Comma-separated list of `operation-id`.
         */
        operationIdAnyOf?: string,
        /**
         * Include materials for Work order operations
         */
        includeMaterials?: boolean,
        /**
         * Include attachments for Work order operations
         */
        includeAttachments?: boolean,
        /**
         * Include safety measures for Work order operations
         */
        includeSafetyMeasures?: boolean,
        /**
         * Results to return per page
         */
        perPage?: number,
        /**
         * Page to fetch
         */
        page?: number,
    }): CancelablePromise<Array<WorkOrderOperationForSearchFull> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-order-operations',
            query: {
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'changed-before-datetime': changedBeforeDatetime,
                'work-center-id-any-of': workCenterIdAnyOf,
                'work-order-ids-any-of': workOrderIdsAnyOf,
                'operation-id-any-of': operationIdAnyOf,
                'include-materials': includeMaterials,
                'include-attachments': includeAttachments,
                'include-safety-measures': includeSafetyMeasures,
                'per-page': perPage,
                'page': page,
            },
            errors: {
                400: `Request is missing required parameters`,
            },
        });
    }

    /**
     * @deprecated
     * Certification report - Create PSV Certification Report
     * ### Deprecated
     * This endpoint is marked as deprecated due to currently being unavailable. This endpoint is only a draft. Calling the endpoint until available will result in a `404- Not Found`. Deprecation will be removed when the endpoint is available.
     *
     * ### Overview
     * Create new Certification report through Technical Feedback, also known as a PSV Certification.
     *
     * ### Important information
     * This endpoint is only applicable if you have a valid work order. Using this endpoint will also set the status of a technical feedback to `Done`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns CertificationReportBasic Created
     * @throws ApiError
     */
    public static createPsvCertificationReport({
        operationId,
        requestBody,
    }: {
        /**
         * The operationId of the technical feedback
         */
        operationId: string,
        /**
         * PSV certification report to create
         */
        requestBody: PSVCertificationReportCreate,
    }): CancelablePromise<ProblemDetails | CertificationReportBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/certification-reports/psv/{operation-id}',
            path: {
                'operation-id': operationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a PSV certification report`,
            },
        });
    }

}
