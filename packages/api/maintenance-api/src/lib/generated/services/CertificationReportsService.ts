/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertificationReport } from '../models/CertificationReport';
import type { CertificationReportSimple } from '../models/CertificationReportSimple';
import type { ProblemDetails } from '../models/ProblemDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CertificationReportsService {

    /**
     * Certification report - Lookup
     * ### Overview
     * Lookup a single certification report.
     *
     * The certification report represents the results of PSV or lifting certification.
     *
     * For PSV certification, details are reported as measurements for 33 predefined measuring points.
     * For lifting certification, details are stored in attachment and possibly as characteristics on the tag/equipment.
     *
     * ### Update release 1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release 1.11.0
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release 1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.21.0
     * Added property `area` to tag details.
     *
     * ### Update release 1.24.0
     * `attachments` now include the property `documentCreatedDate`
     *
     * ### Update release 1.26.0
     * `tagDetails` object now includes the new field `maintenanceConceptId`
     *
     * ### Update release 1.27.0
     * Added `maintenanceRecordTypeId` to the response.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns CertificationReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupCertification({
        recordId,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeAttachments = false,
        includeMeasuringPoints = false,
        includeLastMeasurement = false,
        includeCreatedByDetails = false,
    }: {
        /**
         * The recordId of the certification report
         */
        recordId: string,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include details about tag for failure report
         */
        includeTagDetails?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include measuring points related to tagId/equipmentId
         */
        includeMeasuringPoints?: boolean,
        /**
         * Include last measurement for the measuring points
         */
        includeLastMeasurement?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
    }): CancelablePromise<CertificationReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/certification-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-tag-details': includeTagDetails,
                'include-attachments': includeAttachments,
                'include-measuring-points': includeMeasuringPoints,
                'include-last-measurement': includeLastMeasurement,
                'include-created-by-details': includeCreatedByDetails,
            },
            errors: {
                301: `The specified resource exists in another location
                This can occur when requesting a resource which type does not match the route you are using.

                Example: \`/maintenance-api/resource-a/{resource-b-id}/\` gives \`301\` response.
                `,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Certification report - Search
     * ### Overview
     * Search for certification reports through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each certification report.
     * Use lookup of certification report to retrieve additional details.
     *
     *
     * ### Filter: recent-status-activations
     * Certification reports based on recent status activations
     * Parameters:
     * - status-id
     * - plant-id
     * - max-days-since-activation
     *
     * Example request: `/maintenance-records/certification-reports?api-version=v1&filter=recent-status-activations&status-id=CRTE&plant-id=1100&max-days-since-activation=10`
     *
     * ### Filter: by-tag
     * Find certification reports by tag with possibility of not including completed ones. `/plants/{plant-id}/tags/{tag-id}?include-maintenance-records=true` may also be used for a similar effect.
     * Parameters:
     * - plant-id
     * - tag-id
     * - include-completed (optional)
     * - created-after-datetime (optional)
     *
     * Example request: `/maintenance-records/certification-reports?api-version=v1&filter=by-tag&plant-id=1100&tag-id=DV50100&created-after-datetime=2020-11-01T00%3A00%3A00Z&include-completed=true`
     *
     * ### Filter: by-equipment
     * Find certification reports by equipment with possibility of not including completed ones. `/plants/{plant-id}/tags/{tag-id}?include-maintenance-records=true` may also be used for a similar effect.
     * Parameters:
     * - equipment-id
     * - include-completed (optional)
     * - created-after-datetime (optional)
     *
     * Example request: `/maintenance-records/certification-reports?api-version=v1&filter=by-equipment&equipment-id=10255408&include-completed=false`
     *
     * @returns CertificationReportSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCertificationReports({
        filter,
        statusId,
        plantId,
        maxDaysSinceActivation,
        createdAfterDatetime,
        includeCompleted = false,
    }: {
        /**
         * Filter to limit the certification reports by
         */
        filter: 'recent-status-activations' | 'by-tag' | 'by-equipment',
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
        /**
         * Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
         */
        createdAfterDatetime?: string,
        /**
         * Filter based on if it's completed or open
         */
        includeCompleted?: boolean,
    }): CancelablePromise<Array<CertificationReportSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/certification-reports',
            query: {
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'max-days-since-activation': maxDaysSinceActivation,
                'created-after-datetime': createdAfterDatetime,
                'include-completed': includeCompleted,
            },
        });
    }

}
