/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FailureReport } from "../models/FailureReport";
import type { FailureReportBasic } from "../models/FailureReportBasic";
import type { FailureReportCreate } from "../models/FailureReportCreate";
import type { FailureReportJsonPatch } from "../models/FailureReportJsonPatch";
import type { FailureReportSimple } from "../models/FailureReportSimple";
import type { MaintenanceRecordActivity } from "../models/MaintenanceRecordActivity";
import type { MaintenanceRecordActivityCreate } from "../models/MaintenanceRecordActivityCreate";
import type { MaintenanceRecordActivityJsonPatch } from "../models/MaintenanceRecordActivityJsonPatch";
import type { MaintenanceRecordExtendRequiredEnd } from "../models/MaintenanceRecordExtendRequiredEnd";
import type { MaintenanceRecordItemMetadataCreate } from "../models/MaintenanceRecordItemMetadataCreate";
import type { MaintenanceRecordItemMetadataJsonPatch } from "../models/MaintenanceRecordItemMetadataJsonPatch";
import type { MaintenanceRecordTask } from "../models/MaintenanceRecordTask";
import type { MaintenanceRecordTaskCreate } from "../models/MaintenanceRecordTaskCreate";
import type { MaintenanceRecordTaskUpdateJsonPatch } from "../models/MaintenanceRecordTaskUpdateJsonPatch";
import type { ProblemDetails } from "../models/ProblemDetails";
import type { StatusUpdateJsonPatch } from "../models/StatusUpdateJsonPatch";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class FailureReportsService {
    /**
     * Failure report - Lookup
     * ### Overview
     * Lookup a single failure report
     *
     * ### Update release 0.9.0
     * Added failureMechanismId,failureMechanismGroupId to additionalMetadata.
     *
     * ### Update release 1.0.0
     * Added tasks for failure reports through query option include-tasks.
     * Added properties plannerGroupId, plannerGroup and planningPlantId.
     *
     * ### Update release 1.1.0
     * Added isOpen and completedDateTime.
     *
     * Added hasUnsafeFailureMode and unsafeFailureModeStatus properties according to business process requirement `R-12137 - Give immediate warning of unsafe failure modes`.
     * ### Update release 1.3.0
     * Added `priorityId` to response.
     *
     * ### Update release 1.4.0
     * Added `workCenter` and `equipment` to response. Fields include descriptions of workCenterId and equipmentId
     *
     * ### Update release v1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release v1.6.0
     * Added `301` response.
     *
     * ### Update release v1.10.0
     * Added query parameter `include-url-references`.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release v1.15.0
     * Added property `documentTitle` to `urlReferences`.
     *
     * ### Update release v1.16.0
     * `urlReferences` and `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release v1.17.0
     * Added query parameter `include-measurements`.
     *
     * @returns FailureReport Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupFailureReport({
        recordId,
        includeStatusDetails = false,
        includeTagDetails = false,
        includeActivities = false,
        includeTasks = false,
        includeAttachments = false,
        includeAdditionalMetadata = false,
        includeCreatedByDetails = false,
        includeUrlReferences = false,
        includeMeasurements = false,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string;
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean;
        /**
         * Include details about tag for failure report
         */
        includeTagDetails?: boolean;
        /**
         * Include detailed information for activities
         */
        includeActivities?: boolean;
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean;
        /**
         * Include attachments
         */
        includeAttachments?: boolean;
        /**
         * Include extra metadata related to additional failure modes and detection modes. This is only used in rare cases
         */
        includeAdditionalMetadata?: boolean;
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean;
        /**
         * Include URL references for failure report. See `POST /maintenance-record-relationships/{record-id}/url-references`
         */
        includeUrlReferences?: boolean;
        /**
         * Include related measurements
         */
        includeMeasurements?: boolean;
    }): CancelablePromise<FailureReport | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/failure-reports/{record-id}",
            path: {
                "record-id": recordId,
            },
            query: {
                "include-status-details": includeStatusDetails,
                "include-tag-details": includeTagDetails,
                "include-activities": includeActivities,
                "include-tasks": includeTasks,
                "include-attachments": includeAttachments,
                "include-additional-metadata": includeAdditionalMetadata,
                "include-created-by-details": includeCreatedByDetails,
                "include-url-references": includeUrlReferences,
                "include-measurements": includeMeasurements,
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
     * Failure report - Update
     * ## Overview
     * Update key fields of a failure report.
     *
     * ## Important information
     * To avoid accidently overwriting the multi-line text property, the endpoint will reject any requests with an empty text property.
     *
     * ### Update release 1.0.0
     * Added possibility to update plannerGroupId.
     *
     * ### Update release 1.1.0
     * Added hasUnsafeFailureMode and unsafeFailureModeStatus properties to response according to business process requirement `R-12137 - Give immediate warning of unsafe failure modes`.
     *
     * ### Update release 1.3.0
     * Added `priorityId` to response.
     *
     * ### Update release 1.4.0
     * Added `workCenter` and `equipment` to response. Fields include descriptions of workCenterId and equipmentId
     *
     * @returns FailureReportBasic Success, the failure report has been updated
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateFailureReport({
        recordId,
        requestBody,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string;
        /**
         * Failure report to create
         */
        requestBody: Array<FailureReportJsonPatch>;
    }): CancelablePromise<FailureReportBasic | ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/maintenance-records/failure-reports/{record-id}",
            path: {
                "record-id": recordId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `Bad request. For example that an empty text property was supplied`,
                403: `User does not have sufficient rights to update the failure report`,
            },
        });
    }

    /**
     * Failure report - Update status
     * Update status of failure report.
     *
     * The statuses available for the failure report can be found by querying `/maintenance-records/failure-reports/{record-id}?include-status-details=true`.
     *
     *
     * ### Important information
     * When a failure report is created, it will have status `CRTE - Created` and `OSNO - Outstanding Notification`.
     *
     * Technical responsible (Norwegian: Fagansvarlig) will be responsible for initial evaluation of the failure report.
     * As part of this, the statuses `QAVE - Notification QA Verified` or `RIDO - Risk Assessment Done` can be set.
     *
     * The statuses `REJE - Rejected, Not Needed` or `CANC - Cancelled, Duplicate` can also be set at this stage. Clients should ensure text of failure report is updated with reasoning behind `REJE/CANC` status through PATCH request to `/maintenance-records/failure-reports/{record-id}`
     *
     * If the failure report fulfills the criteria for simplified maintenance, the status `NOSI - Exec. as Simpl. Maint.` can be set.
     *
     * When the failure report is ready to be approved and prioritized, the status `NOPR - Notification in process` must be set.
     *
     * When the failure report has been approved and prioritized, the status `RIVE - Risk Assesment Verified` can be set. In addition, the failure report will be assigned to a corrective work order (either in ERP system or through POST request to `/work-orders/corrective-work-orders`) and the status `ORAS - Order assigned` will be set automatically on the failure report.
     *
     * When the failure report is completed, the status `NOCO - Notification completed` must be set. This will typically be set automatically for the failure report when the corrective work order is set to status `TECO - Technical Complete` (either in ERP system or through PATCH request to `/work-orders/corrective-work-orders/{work-order-id}/statuses/TECO`).
     *
     *
     * Setting the status `EXTR - Date Extension Required` is not supported for this endpoint and will give a HTTP 400 response. Clients should use POST request against `/maintenance-records/failure-reports/{record-id}/required-end-extensions` instead.
     *
     * Setting the `ORAS - Order assigned` is not supported for this endpoint and will give a HTTP 400 response.
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791) provides some additional information.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateFailureReportStatus({
        recordId,
        statusId,
        requestBody,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string;
        statusId: string;
        /**
         * Failure report status to update
         */
        requestBody: Array<StatusUpdateJsonPatch>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/maintenance-records/failure-reports/{record-id}/statuses/{status-id}",
            path: {
                "record-id": recordId,
                "status-id": statusId,
            },
            body: requestBody,
            mediaType: "application/json-patch+json",
            errors: {
                403: `User does not have sufficient rights to update failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Attachment download
     * ### Overview
     * Download single attachment for failure report
     *
     * ### Known limitations
     * It's not possible to download attachments of type .txt which are stored in the GOS container of the ERP system.
     * Such requests will result in a `HTTP 404 Not found` response.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadFailureReportAttachment({
        recordId,
        attachmentId,
    }: {
        recordId: string;
        attachmentId: string;
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/failure-reports/{record-id}/attachments/{attachment-id}",
            path: {
                "record-id": recordId,
                "attachment-id": attachmentId,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Failure report - Attachment upload
     * Upload attachment for failure report
     *
     * ### Update release 1.17.0
     * Added `documentTitle` as input. If supplied, the title is added to all files that are sent
     * in the current request. If different titles are wanted for different files, they have to be sent in separately
     * (one file, one document title per request). When supplying a document-title, a new document will always be created for the attachment
     *
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadFailureReportAttachment({
        recordId,
        formData,
    }: {
        recordId: string;
        formData?: {
            files: Array<Blob>;
            "document-title"?: string | null;
        };
    }): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/failure-reports/{record-id}/attachments",
            path: {
                "record-id": recordId,
            },
            formData: formData,
            mediaType: "multipart/form-data",
            errors: {
                403: `User does not have sufficient rights to upload attachment`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Failure report - Search
     * ### Overview
     * Search for failure reports through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include status details for each failure report.
     * This can be found by subsequent call to lookup failure-reports
     *
     *
     * ### Filter: recent-status-activations
     * Failure reports based on recent status activations for the failure reports.
     * Parameters:
     * - status-id
     * - plant-id
     * - max-days-since-activation
     * - work-center-ids (optional)
     *
     * ### Filter: open-by-plant
     * Find open failure reports by plant
     * Parameters:
     * - plant-id
     * - location-id (optional)
     * - system-id (optional)
     * - work-center-ids (optional)
     *
     * ### Update release v1.1.0
     * Added open-by-plant filter and properties systemId and locationId.
     *
     * ### Update release v1.8.0
     * Added properties hasUnsafeFailureMode and unsafeFailureModeStatus.
     *
     * ### Update release v1.16.0
     * Added property `work-center-ids` to filters `recent-status-activations` and `open-by-plant`
     *
     * Added property `workCenterId`
     *
     * @returns FailureReportSimple Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchFailureReports({
        filter,
        statusId,
        plantId,
        locationId,
        systemId,
        maxDaysSinceActivation,
        workCenterIds,
    }: {
        /**
         * Filter to limit the failure reports by
         */
        filter: "recent-status-activations" | "open-by-plant";
        /**
         * Status
         */
        statusId?: string;
        /**
         * Plant
         */
        plantId?: string;
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string;
        /**
         * System id to filter by
         */
        systemId?: string;
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number;
        /**
         * Comma separated list of work center IDs to filter by
         */
        workCenterIds?: Array<string>;
    }): CancelablePromise<Array<FailureReportSimple> | ProblemDetails> {
        return __request(OpenAPI, {
            method: "GET",
            url: "/maintenance-records/failure-reports",
            query: {
                filter: filter,
                "status-id": statusId,
                "plant-id": plantId,
                "location-id": locationId,
                "system-id": systemId,
                "max-days-since-activation": maxDaysSinceActivation,
                "work-center-ids": workCenterIds,
            },
        });
    }

    /**
     * Failure report - Create
     * Create new failure report
     *
     * ### Important information
     * Equinor governing documents states that failure reports should be created at the lowest possible level in the tag hierachy.
     *
     * It is possible to create failure report for either tagId or equipmentId.
     *
     * If `hasUnsafeFailureMode` is true after creation, operations supervisor must be contacted immediately in accordance with business process requirement `R-12137 - Give immediate warning of unsafe failure modes`
     *
     * ### Update release 0.9.0
     * Added failureMechanismId,failureMechanismGroupId properties to additionalMetadata on creation.
     *
     * ### Update release 1.1.0
     * Added hasUnsafeFailureMode and unsafeFailureModeStatus properties according to business process requirement `R-12137 - Give immediate warning of unsafe failure modes`.
     *
     * Added `relatedWorkOrder` to create endpoint. This will allow a relationship to be established on creation to either technical feedback or object list of a work order.
     *
     * ### Update release 1.2.0
     * Added `externalPartnerId`.
     *
     * ### Update release 1.3.0
     * Added `priorityId` to response.
     *
     * ### Update release 1.4.0
     * Added `workCenter` and `equipment` to response. Fields include descriptions of workCenterId and equipmentId
     *
     * ### Update release 1.7.0
     * Implemented create with property `equipmentId`.
     *
     * ### Update release 1.15.0
     * Fixed issue with `relatedWorkOrder` `source` `ObjectList`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns FailureReportBasic Created
     * @throws ApiError
     */
    public static createFailureReport({
        requestBody,
    }: {
        /**
         * Failure report to create
         */
        requestBody: FailureReportCreate;
    }): CancelablePromise<ProblemDetails | FailureReportBasic> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/failure-reports",
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to create a failure report`,
            },
        });
    }

    /**
     * Failure report - Add activities
     * ### Overview
     * Add activities for failure report.
     *
     * To find possible activityCodeGroupId and activityCodeId use the  `/maintenance-records/activity-codes?maintenance-record-id=...`.
     *
     * ### Update release v0.8.0
     * activityCodeId and activityCodeGroupId are no longer required properties. Client's are still recommended to provide them if possible.
     *
     * ### Update release v1.15.0
     * Added response body for 201 response
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordActivity Success
     * @throws ApiError
     */
    public static addFailureReportActivities({
        recordId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string;
        /**
         * Activities to add to existing failure report
         */
        requestBody: Array<MaintenanceRecordActivityCreate>;
    }): CancelablePromise<ProblemDetails | Array<MaintenanceRecordActivity>> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/failure-reports/{record-id}/activities",
            path: {
                "record-id": recordId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to add activities to failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Add tasks
     * ### Overview
     * Add task to failure report.
     *
     * If taskResponsibleEmail is provided and has a valid Equinor email address, the taskResponsibleId will be set to the employee id of the user.
     *
     * To find possible taskCodeGroupId and taskCodeId use the  `/maintenance-records/task-codes?maintenance-record-id=...`.
     * ### Update release 1.8.0
     * Response type change to return the created tasks.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordTask Created
     * @throws ApiError
     */
    public static addFailureReportTasks({
        recordId,
        requestBody,
    }: {
        /**
         * Id of the failure report
         */
        recordId: string;
        /**
         * Tasks to add to existing failure report
         */
        requestBody: Array<MaintenanceRecordTaskCreate>;
    }): CancelablePromise<ProblemDetails | Array<MaintenanceRecordTask>> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/failure-reports/{record-id}/tasks",
            path: {
                "record-id": recordId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `The request body is invalid. May occur if taskResponsibleEmail is not an Equinor email address.`,
                403: `User does not have sufficient rights to add tasks to failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Update task
     * ### Overview
     * Update fields of an existing task for failure report.
     *
     * To find tasks available on a failure report, use  `/maintenance-records/failure-reports/{record-id}?include-tasks=true`.
     *
     * When a task is created, it will have status `TSOS - Outstanding task` and `CRTE - Created`.
     * The status `TSRL - Task Released` can be set afterwards.
     *
     * To change status of a task, use endpoint `/maintenance-records/failure-reports/{record-id}/tasks/{task-id}/statuses/{status-id}`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateFailureReportTask({
        recordId,
        taskId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string;
        /**
         * id of the task
         */
        taskId: string;
        /**
         * Task to update
         */
        requestBody: Array<MaintenanceRecordTaskUpdateJsonPatch>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/maintenance-records/failure-reports/{record-id}/tasks/{task-id}",
            path: {
                "record-id": recordId,
                "task-id": taskId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `The request body is invalid. May occur if taskResponsibleEmail is not an Equinor email address.`,
                403: `User does not have sufficient rights to update failure report task`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Update task status
     * ### Overview
     * Update status of an existing task for failure report.
     *
     * To find tasks available on a failure report, use the  `/maintenance-records/failure-reports/{record-id}?include-tasks=true`.
     *
     * When a task is created, it will have status `TSOS - Outstanding task` and `CRTE - Created`.
     * The status `TSRL - Task Released` can be set afterwards.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateFailureReportTaskStatuses({
        recordId,
        taskId,
        statusId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string;
        /**
         * id of the task
         */
        taskId: string;
        /**
         * id of the status
         */
        statusId: string;
        /**
         * Task status to update
         */
        requestBody: Array<StatusUpdateJsonPatch>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/maintenance-records/failure-reports/{record-id}/tasks/{task-id}/statuses/{status-id}",
            path: {
                "record-id": recordId,
                "task-id": taskId,
                "status-id": statusId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to update failure report task`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Update activity
     * ### Overview
     * Update existing activity for failure report
     *
     * To find possible activityCodeGroupId and activityCodeId use the  `/maintenance-records/activity-codes?maintenance-record-id=...`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateFailureReportActivity({
        recordId,
        activityId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string;
        /**
         * id of the activity
         */
        activityId: string;
        /**
         * Activities to update for existing failure report
         */
        requestBody: Array<MaintenanceRecordActivityJsonPatch>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/maintenance-records/failure-reports/{record-id}/activities/{activity-id}",
            path: {
                "record-id": recordId,
                "activity-id": activityId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to update activities to failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Extend required end date
     * ### Overview
     * Extend the required end date of the failure report.
     * This endpoint should only be executed by persons which have access to the 'action box' in Equinor's ERP system.
     *
     * Client applications should take special care in ensuring the business process of Equinor is followed in advance of calling this endpoint.
     *
     * The activityCodeId defines the reason for the extension
     * - `A121`= Lack of resources
     * - `A122`= Lack of spares
     * - `A123`=Maintenance access
     * - `A124`=Failure development time
     *
     * An activity for the failure report will be created by this call and the status `Date Extension Required ('EXTR')` will be set.
     *
     * ### Important information
     * Most users will not have sufficient authorizations to execute this endpoint. If a request fails due to missing authorizations, the response code will be HTTP 403.
     *
     * ### Update release 1.12.0
     * Bugfix - Created activity text and activity code must be read-only.
     *
     * ### Update release v1.15.0
     * Added response schema for 201 success
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordActivity Success
     * @throws ApiError
     */
    public static extendFailureReportRequiredEnd({
        recordId,
        requestBody,
    }: {
        /**
         * id of the failure report
         */
        recordId: string;
        /**
         * Extended end date-activity to be created on the failure report.
         */
        requestBody: MaintenanceRecordExtendRequiredEnd;
    }): CancelablePromise<ProblemDetails | MaintenanceRecordActivity> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/failure-reports/{record-id}/required-end-extensions",
            path: {
                "record-id": recordId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                400: `The request body is invalid`,
                403: `User does not have sufficient rights to add activities to failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Update additional metadata
     * ### Overview
     * Update additional metadata for a failure report.
     * This related to additional failure modes and detection modes for a failure report and only used in rare cases.
     *
     * The metadata-id available to update for a given failure report can be found by querying `/maintenance-records/failure-reports/{record-id}?include-additional-metadata=true`
     *
     * ### Update release 0.9.0
     * Added failureMechanismId,failureMechanismGroupId properties.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateAdditionalMetadata({
        recordId,
        metadataId,
        requestBody,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string;
        /**
         * The id of the metadata record
         */
        metadataId: string;
        /**
         * Update to make for metadata
         */
        requestBody: Array<MaintenanceRecordItemMetadataJsonPatch>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "PATCH",
            url: "/maintenance-records/failure-reports/{record-id}/additional-metadata/{metadata-id}",
            path: {
                "record-id": recordId,
                "metadata-id": metadataId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to update failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Failure report - Add additional metadata
     * ### Overview
     * Add additional metadata for a failure report.
     * This related to additional failure modes and detection modes for a failure report and only used in rare cases.
     *
     * The metadata-id available to update for a given failure report can be found by querying `/maintenance-records/failure-reports/{record-id}?include-additional-metadata=true`
     *
     * ### Update release 0.9.0
     * Added failureMechanismId,failureMechanismGroupId properties.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static addAdditionalMetadata({
        recordId,
        requestBody,
    }: {
        /**
         * The recordId of the failure report.
         */
        recordId: string;
        /**
         * Update to make for metadata
         */
        requestBody: Array<MaintenanceRecordItemMetadataCreate>;
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: "POST",
            url: "/maintenance-records/failure-reports/{record-id}/additional-metadata",
            path: {
                "record-id": recordId,
            },
            body: requestBody,
            mediaType: "application/json",
            errors: {
                403: `User does not have sufficient rights to update failure report`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }
}
