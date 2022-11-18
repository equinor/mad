/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityReport } from '../models/ActivityReport';
import type { ActivityReportBasic } from '../models/ActivityReportBasic';
import type { ActivityReportCreate } from '../models/ActivityReportCreate';
import type { ActivityReportJsonPatch } from '../models/ActivityReportJsonPatch';
import type { MaintenanceRecordActivityCreate } from '../models/MaintenanceRecordActivityCreate';
import type { MaintenanceRecordActivityJsonPatch } from '../models/MaintenanceRecordActivityJsonPatch';
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
     * ### Update release v1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release v.1.6.0
     * Added `301` response.
     *
     * Added `isOpen` to lookup response.
     *
     * ### Update release v1.10.0
     * Added query parameter `include-url-references`.
     *
     * ### Update release v1.11.0
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * @param recordId The recordId of the activity report.
     * @param includeStatusDetails Include detailed information for statuses (both active and non-active)
     * @param includeActivities Include detailed information for activities
     * @param includeAttachments Include attachments
     * @param includeCreatedByDetails Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
     * @param includeUrlReferences Include URL references for activity report. See `POST /maintenance-record-relationships/{record-id}/url-references`
     * @returns ActivityReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupActivityReport(
        recordId: string,
        includeStatusDetails: boolean = false,
        includeActivities: boolean = false,
        includeAttachments: boolean = false,
        includeCreatedByDetails: boolean = false,
        includeUrlReferences: boolean = false,
    ): CancelablePromise<ActivityReport | ProblemDetails> {
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
     * To avoid accidently overwriting the multi-line text property, the endpoint will reject any requests with an empty text property.
     *
     * @param recordId The recordId of the activity report.
     * @param requestBody activity report to create
     * @returns ActivityReportBasic Success, the activity report has been updated
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReport(
        recordId: string,
        requestBody: Array<ActivityReportJsonPatch>,
    ): CancelablePromise<ActivityReportBasic | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/activity-reports/{record-id}',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request. For example that an empty text property was supplied`,
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
     * @param requestBody Activity report to create
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns ActivityReportBasic Created
     * @throws ApiError
     */
    public static createActivityReport(
        requestBody: ActivityReportCreate,
    ): CancelablePromise<ProblemDetails | ActivityReportBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/activity-reports',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a activity report`,
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
     * @param recordId The recordId of the activity report.
     * @param statusId
     * @param requestBody Activity report status to update
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReportStatus(
        recordId: string,
        statusId: string,
        requestBody: Array<StatusUpdateJsonPatch>,
    ): CancelablePromise<ProblemDetails> {
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
     * Activity report - Add activities
     * ### Overview
     * Add activities for activity report.
     *
     * To find possible activityCodeGroupId and activityCodeId use the  `/maintenance-records/activity-codes?maintenance-record-id=...`.
     *
     * @param recordId id of the activity report
     * @param requestBody Activities to add to existing activity report
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Created - No body available for response. Use lookup from location header
     * @throws ApiError
     */
    public static addActivityReportActivities(
        recordId: string,
        requestBody: Array<MaintenanceRecordActivityCreate>,
    ): CancelablePromise<ProblemDetails | string> {
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
     * @param recordId id of the actuvity report
     * @param activityId id of the activity
     * @param requestBody Activities to add to existing failure report
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateActivityReportActivity(
        recordId: string,
        activityId: string,
        requestBody: Array<MaintenanceRecordActivityJsonPatch>,
    ): CancelablePromise<ProblemDetails> {
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
     * Download single attachment for activity report
     * @param recordId
     * @param attachmentId
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadActivityReportAttachment(
        recordId: string,
        attachmentId: string,
    ): CancelablePromise<Blob | ProblemDetails> {
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
     * Upload attachment for activity report
     * @param recordId
     * @param formData
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadActivityReportAttachment(
        recordId: string,
        formData?: {
            files?: Array<Blob>;
        },
    ): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/activity-reports/{record-id}/attachments',
            path: {
                'record-id': recordId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
            },
        });
    }

}
