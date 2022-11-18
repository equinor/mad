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
     * ### Update release v1.5.0
     * Added createdDateTime for attachments.
     *
     * ### Update release v1.6.0
     * Added `301` response.
     *
     * ### Update release v1.11.0
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * @param recordId The recordId of the certification report
     * @param includeStatusDetails Include detailed information for statuses (both active and non-active)
     * @param includeTagDetails Include details about tag for failure report
     * @param includeAttachments Include attachments
     * @param includeMeasuringPoints Include measuring points related to tagId/equipmentId
     * @param includeLastMeasurement Include last measurement for the measuring points
     * @param includeCreatedByDetails Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
     * @returns CertificationReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupCertification(
        recordId: string,
        includeStatusDetails: boolean = false,
        includeTagDetails: boolean = false,
        includeAttachments: boolean = false,
        includeMeasuringPoints: boolean = false,
        includeLastMeasurement: boolean = false,
        includeCreatedByDetails: boolean = false,
    ): CancelablePromise<CertificationReport | ProblemDetails> {
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
     * @param filter Filter to limit the certification reports by
     * @param statusId Status
     * @param plantId Plant
     * @param maxDaysSinceActivation Define how many days from the current day to include results for. 0 if only include for today
     * @param createdAfterDatetime Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
     * @param includeCompleted Filter based on if it's completed or open
     * @returns CertificationReportSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchCertificationReports(
        filter: 'recent-status-activations' | 'by-tag' | 'by-equipment',
        statusId?: string,
        plantId?: string,
        maxDaysSinceActivation?: number,
        createdAfterDatetime?: string,
        includeCompleted: boolean = false,
    ): CancelablePromise<Array<CertificationReportSimple> | ProblemDetails> {
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
