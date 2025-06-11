/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CertificationReport } from '../models/CertificationReport';
import type { CertificationReportBasic } from '../models/CertificationReportBasic';
import type { CertificationReportCreate } from '../models/CertificationReportCreate';
import type { CertificationReportSimple } from '../models/CertificationReportSimple';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { PSVCertificationReportCreate } from '../models/PSVCertificationReportCreate';

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
     * ### Update release 1.32.0
     * Added `changedDateTime` for attachments.
     *
     * Added properties `failureStartDateTime` and `failureEndDateTime` to response.
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
     * Certification report - Attachment upload
     * Upload attachment for certification report
     *
     * Limitations of Attachment upload endpoints:
     * - No support for parallel calls (uploading multiple attachments at once).
     * - Maximum file size is 60 MB. Files between 60.0MB - 99.9MB will give a 400 error. Files larger than 100MB will result in a `413 Request Entity Too Large' Error in HTML. This is due to constraints in the underlying system and is outside of our control.
     *
     * ### Important information
     * If `documentTitle` is supplied, the title is added to all files that are sent
     * in the current request. If different titles are wanted for different files, they have to be sent in separately
     * (one file, one document title per request). When supplying a document-title, a new document will always be created for the attachment
     *
     * If documentTitle is supplied both as form-data and query parameter, the query parameter
     * will take precedence.
     *
     * If `document-id` is supplied, the attachment will be uploaded specifically to this document. `document-title` and `document-id` cannot be supplied together.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadCertificationReportAttachment({
        recordId,
        documentTitle = null,
        documentId = null,
        formData,
    }: {
        recordId: string,
        documentTitle?: string | null,
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId?: string | null,
        formData?: {
            files: Array<Blob>;
            'document-title'?: string | null;
        },
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/certification-reports/{record-id}/attachments',
            path: {
                'record-id': recordId,
            },
            query: {
                'document-title': documentTitle,
                'document-id': documentId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
                413: `Request Entity Too Large.
                This error occurs when the size of an attachment exceeds 100MB.
                `,
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

    /**
     * Certification report - Create
     * Create new certification report.
     *
     * The following endpoints can be used to find possible values for input:
     * 1. `workCenterId` - [/plants/{plant-id}?include-work-centers](#operation/LookupPlant)
     * 1. `plannerGroupId` - [/plants/{plant-id}?include-planner-groups=true](#operation/LookupPlant)
     * 1. `locationId` - [/plants/{plant-id}?include-locations=true](#operation/LookupPlant)
     * 1. `detectionMethodId`, `failureMechanismId`, `failureModeId` - [/plants/{plant-id}/tags/{tag-id}?include-catalog-profile-details=true](#operation/LookupTag) or [/equipment/{equipment-id}?include-catalog-profile-details=true](#operation/LookupEquipment)
     *
     * ### Important information
     * It is possible to create certification report for either tagId or equipmentId.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns CertificationReportBasic Created
     * @throws ApiError
     */
    public static createCertificationReport({
        requestBody,
    }: {
        /**
         * Certification report to create
         */
        requestBody: CertificationReportCreate,
    }): CancelablePromise<ProblemDetails | CertificationReportBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/certification-reports',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a failure report`,
            },
        });
    }

    /**
     * Certification report - Create PSV Certification Report
     * ### Overview
     * Create new Certification report through Technical Feedback, also known as a PSV Certification.
     *
     * ### Important information
     * This endpoint is only applicable if you have a valid work order. Using this endpoint will also set the status of a technical feedback to `Done`.
     *
     * This endpoint is restricted to only work with approved systems. Reach out to the APIphany team if you require access.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns CertificationReportBasic Created
     * @throws ApiError
     */
    public static createPsvCertificationReport({
        requestBody,
    }: {
        /**
         * PSV certification report to create
         */
        requestBody: PSVCertificationReportCreate,
    }): CancelablePromise<ProblemDetails | CertificationReportBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/certification-reports/psv',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a PSV certification report`,
            },
        });
    }

}
