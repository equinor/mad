/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityReport } from '../models/ActivityReport';
import type { ActivityReportBasic } from '../models/ActivityReportBasic';
import type { ActivityReportCreate } from '../models/ActivityReportCreate';
import type { ActivityReportJsonPatch } from '../models/ActivityReportJsonPatch';
import type { CharacteristicsUpdate } from '../models/CharacteristicsUpdate';
import type { MaintenanceRecordActivityCreate } from '../models/MaintenanceRecordActivityCreate';
import type { MaintenanceRecordActivityJsonPatch } from '../models/MaintenanceRecordActivityJsonPatch';
import type { MaintenanceRecordItemMetadataCreate } from '../models/MaintenanceRecordItemMetadataCreate';
import type { MetadataAddClass } from '../models/MetadataAddClass';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdateJsonPatch } from '../models/StatusUpdateJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActivityReportsService {

    /**
     * Activity report - Lookup
     * ### Overview
     * Lookup a single activity report. The activity report represents work performed for a maintenance activity against a tag or an equipment.
     *
     * ### Update release 1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release v.1.6.0
     * Added `301` response.
     *
     * Added `isOpen` to lookup response.
     *
     * ### Update release 1.10.0
     * Added query parameter `include-url-references`.
     *
     * ### Update release 1.11.0
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release 1.15.0
     * Added property `documentTitle` to `urlReferences`.
     *
     * ### Update release 1.16.0
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.17.0
     * Added query parameter `include-measurements`.
     *
     * ### Update release 1.24.0
     * `urlReferences` and `attachments` now include the property `documentCreatedDate`
     *
     * ### Update release 1.26.0
     * Added query parameters `include-additional-metadata` and `include-additional-data-characteristics`
     * Added `additionalMetadata` to response
     *
     * ### Update release 1.27.0
     * Added `maintenanceRecordTypeId` to the response.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.31.0
     * Added `isReadonlyText` property to `activities` in the response.
     *
     * @returns ActivityReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupActivityReport({
        recordId,
        includeStatusDetails = false,
        includeActivities = false,
        includeAttachments = false,
        includeCreatedByDetails = false,
        includeUrlReferences = false,
        includeMeasurements = false,
    }: {
        /**
         * The recordId of the activity report.
         */
        recordId: string,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed information for activities
         */
        includeActivities?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
        /**
         * Include URL references for activity report. See `POST /maintenance-record-relationships/{record-id}/url-references`
         */
        includeUrlReferences?: boolean,
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean,
    }): CancelablePromise<ActivityReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/activity-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-activities': includeActivities,
                'include-attachments': includeAttachments,
                'include-created-by-details': includeCreatedByDetails,
                'include-url-references': includeUrlReferences,
                'include-measurements': includeMeasurements,
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
     * Activity report - Update
     * ## Overview
     * Update key fields of an activity report.
     *
     * ## Important information
     * To avoid accidentally overwriting the multi-line text property, the endpoint will reject any requests with an empty text property.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ActivityReportBasic Success, the activity report has been updated
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReport({
        recordId,
        requestBody,
    }: {
        /**
         * The recordId of the activity report.
         */
        recordId: string,
        /**
         * Details on how to update the Activity Report
         */
        requestBody: Array<ActivityReportJsonPatch>,
    }): CancelablePromise<ActivityReportBasic | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/activity-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request. For example that an empty value for text property was supplied`,
                403: `User does not have sufficient rights to update the activity report`,
            },
        });
    }

    /**
     * Activity report - Create
     * Create new activity report
     *
     * ### Important information
     * Equinor governing documents states that activity reports should be created at the lowest possible level in the tag hierachy.
     *
     * ### Update release 1.0.0
     * Added workCenterId, workCenterPlantId to create endpoint.
     *
     * Added activities to create endpoint.
     *
     * ### Update release 1.1.0
     * Added `relatedWorkOrder` to create endpoint. This will allow a relationship to be established on creation to either technical feedback or object list of a work order.
     *
     * ### Update release 1.6.0
     *
     * Added `isOpen` to create endpoint. isOpen set to true enables creation of activity report in status `OSNO - Outstanding Notification`. By default `isOpen` is set to false, and activity report is created with `NOCO - Notification Completed` status.
     *
     * ### Update release 1.26.0
     * Added `createdDateTime` to create endpoint.
     *
     * ### Update release 1.27.0
     * Added support for creating activity report for technical feedback with PSD.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.31.0
     * Removed requirement for providing `reasonId` as part of the `technicalFeedbackParameters` when `source` is `TechnicalFeedback`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ActivityReportBasic Created
     * @throws ApiError
     */
    public static createActivityReport({
        requestBody,
    }: {
        /**
         * Activity report to create
         */
        requestBody: ActivityReportCreate,
    }): CancelablePromise<ProblemDetails | ActivityReportBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/activity-reports',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create an activity report`,
            },
        });
    }

    /**
     * Activity report - Add additional metadata
     * ### Overview
     * Add additional metadata for an activity report.
     * This related to additional failure modes and detection modes for an activity report and only used in rare cases.
     *
     * The metadata-id available to update for a given activity report can be found by querying `/maintenance-records/activity-reports/{record-id}?include-additional-metadata=true`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addActivityReportAdditionalMetadata({
        recordId,
        requestBody,
    }: {
        /**
         * The recordId of the activity report.
         */
        recordId: string,
        /**
         * Update to make for metadata
         */
        requestBody: Array<MaintenanceRecordItemMetadataCreate>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/activity-reports/{record-id}/additional-metadata',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to update failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Activity report - Update status
     * Update status of activity report.
     *
     * The statuses available for the activity report can be found by querying `/maintenance-records/activity-reports/{record-id}?include-status-details=true`.
     *
     *
     * ### Important information
     * The endpoints supports status activation such as:
     *
     * - NOCO - Notification completed
     * - CANC - Cancelled
     * - EVCO - Evaluation Complete
     * - RECO - Results Recording Complete
     *
     * The endpoints supports status deactivation such as:
     *
     * - NOPR - Notification in process
     * - NOCO - Notification completed
     * - CANC - Cancelled
     * - EVCO - Evaluation Complete
     * - RECO - Results Recording Complete
     *
     * If the activity report has a relationship to a Work Order, the status `ORAS - Order assigned` will be set automatically on the activity report.
     *
     * When the activity report is completed, the status `NOCO - Notification completed` must be set.
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocIndex.html?DOCVIEW=FALSE?DOCID=1046023) provides some additional information.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReportStatus({
        recordId,
        statusId,
        requestBody,
    }: {
        /**
         * The recordId of the activity report.
         */
        recordId: string,
        statusId: string,
        /**
         * Activity report status to update
         */
        requestBody: Array<StatusUpdateJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/activity-reports/{record-id}/statuses/{status-id}',
            path: {
                'record-id': recordId,
                'status-id': statusId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                403: `User does not have sufficient rights to update activity report`,
                404: `The specified resource was not found`,
                409: `Activity report is locked by other user`,
            },
        });
    }

    /**
     * Activity report metadata - Add characteristics
     * Add new characteristics to an existing activity report metadata.
     *
     * Characteristics are grouped into a class such as `FL_MAINT_STRATEGY`.
     *
     * With this endpoint, the consumer can assign classes metadata and define initial values for some of the characteristics in the classes.
     *
     * Note that if a given characteristic has already been added to this metadata, repeated adding will result in overwriting of the characteristic value.
     * If you want to update a characteristic the `PATCH` endpoint can be used.
     *
     * ### Important information
     * Use `/maintenance-records/activity-reports/{record-id}?include-additional-metadata=true&include-additional-data-characteristics=true&api-version=v1` to view characteristics with value after using this endpoint.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addCharacteristicsToActivityReportMetadata({
        recordId,
        metadataId,
        requestBody,
    }: {
        recordId: string,
        metadataId: string,
        /**
         * Characteristics to add to metadata.
         */
        requestBody: Array<MetadataAddClass>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/activity-reports/{record-id}/additional-metadata/{metadata-id}/characteristics',
            path: {
                'record-id': recordId,
                'metadata-id': metadataId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `Request is missing required parameters or characteristicId is not part of class`,
                403: `User does not have sufficient rights to add characteristics to measuring point`,
            },
        });
    }

    /**
     * Activity report metadata - Update characteristic
     * Update existing values of characteristics on a activity report metadata. If the characteristics does not exist, a `404 - Not Found` is returned.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReportMetadataCharacteristics({
        recordId,
        metadataId,
        requestBody,
    }: {
        recordId: string,
        metadataId: string,
        /**
         * Characteristics to be updated, based on JsonPatch standard
         */
        requestBody: Array<CharacteristicsUpdate>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/activity-reports/{record-id}/additional-metadata/{metadata-id}/characteristics',
            path: {
                'record-id': recordId,
                'metadata-id': metadataId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to characteristics`,
                404: `The specified resource was not found`,
                409: `Characteristics is locked by other user`,
            },
        });
    }

    /**
     * Activity report - Add activities
     * ### Overview
     * Add activities for activity report.
     *
     * To find possible activityCodeGroupId and activityCodeId use the  `/maintenance-records/activity-codes?maintenance-record-id=...`.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addActivityReportActivities({
        recordId,
        requestBody,
    }: {
        /**
         * id of the activity report
         */
        recordId: string,
        /**
         * Activities to add to existing activity report
         */
        requestBody: Array<MaintenanceRecordActivityCreate>,
    }): CancelablePromise<ProblemDetails | string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/activity-reports/{record-id}/activities',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to add activities to activity report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Activity report - Update activity
     * ### Overview
     * Update existing activity for activity report
     *
     * To find possible activityCodeGroupId and activityCodeId use the  `/maintenance-records/activity-codes?maintenance-record-id=...`.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReportActivity({
        recordId,
        activityId,
        requestBody,
    }: {
        /**
         * id of the activity report
         */
        recordId: string,
        /**
         * id of the activity
         */
        activityId: string,
        /**
         * Activities to add to existing failure report
         */
        requestBody: Array<MaintenanceRecordActivityJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/activity-reports/{record-id}/activities/{activity-id}',
            path: {
                'record-id': recordId,
                'activity-id': activityId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to update activities to activity report`,
                404: `The specified resource was not found`,
                409: `Activity report is locked by other user`,
            },
        });
    }

    /**
     * Activity report - Attachment download
     * ### Overview
     * Download single attachment for activity report
     *
     * ### Known limitations
     * It's not possible to download attachments of type .txt which are stored in the GOS container of the ERP system.
     * Such requests will result in a `HTTP 404 Not found` response.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadActivityReportAttachment({
        recordId,
        attachmentId,
    }: {
        recordId: string,
        attachmentId: string,
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/activity-reports/{record-id}/attachments/{attachment-id}',
            path: {
                'record-id': recordId,
                'attachment-id': attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Activity report - Attachment upload
     * ### Overview
     * Upload attachment for activity report
     *
     * Limitations of Attachment upload endpoints:
     * - No support for parallel calls (uploading multiple attachments at once).
     * - Maximum file size is 60 MB. Files between 60.0MB - 99.9MB will give a 400 error. Files larger than 100MB will result in a `413 Request Entity Too Large' Error in HTML. This is due to constraints in the underlying system and is outside of our control.
     *
     * ### Update release 1.28.0
     * Added the optional parameter `document-id` as a query parameter.
     * If `document-id` is supplied, the attachment will be uploaded specifically to this document.
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadActivityReportAttachment({
        recordId,
        documentId = null,
        formData,
    }: {
        recordId: string,
        /**
         * Can be found by sending a GET request to: `/document-relationships/{relationship-type}/{source-id}`
         *
         */
        documentId?: string | null,
        formData?: {
            files?: Array<Blob>;
        },
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/activity-reports/{record-id}/attachments',
            path: {
                'record-id': recordId,
            },
            query: {
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

}
