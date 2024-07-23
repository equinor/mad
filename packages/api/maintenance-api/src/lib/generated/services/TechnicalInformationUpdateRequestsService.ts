/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MaintenanceRecordTask } from '../models/MaintenanceRecordTask';
import type { MaintenanceRecordTaskCreate } from '../models/MaintenanceRecordTaskCreate';
import type { MaintenanceRecordTaskUpdateJsonPatch } from '../models/MaintenanceRecordTaskUpdateJsonPatch';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdateJsonPatch } from '../models/StatusUpdateJsonPatch';
import type { TechnicalInformationUpdateRequest } from '../models/TechnicalInformationUpdateRequest';
import type { TechnicalInformationUpdateRequestBasic } from '../models/TechnicalInformationUpdateRequestBasic';
import type { TechnicalInformationUpdateRequestCreate } from '../models/TechnicalInformationUpdateRequestCreate';
import type { TechnicalInformationUpdateRequestJsonPatch } from '../models/TechnicalInformationUpdateRequestJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TechnicalInformationUpdateRequestsService {

    /**
     * Technical information update request - Lookup
     * ### Overview
     * Lookup a single technical information update request.
     *
     * A technical information update request represents a notice of change to initiate, distribute and follow up work to update technical information.
     *
     * Examples of usage:
     * - Updating blueprints or other technical documentation
     * - Changing spare parts lists (BOM- Bill of Materials) and storage management information
     * - Updating maintenance program
     * - Updating classification such as criticality, containment, selected safety critical equipment, etc.
     * - Updating master data/management information in SAP, e.g. Equipment details, work centre, Planner Group, WBS, measuring points, etc.
     * - Updating maintenance concept
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791) provides additional information for this maintenance record type.
     *
     * ### Update release 1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release 1.6.0
     * Added `301` response.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * ### Update release 1.16.0
     * `attachments` now include properties `documentType`, `documentNumber` and `documentTitle`.
     *
     * ### Update release 1.21.0
     * Added property `area` to tag details.
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
     * @returns TechnicalInformationUpdateRequest Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTechnicalInformationUpdateRequest({
        recordId,
        includeStatusDetails = false,
        includeTasks = false,
        includeAttachments = false,
        includeTagDetails = false,
        includePersonResponsible = false,
        includeCreatedByDetails = false,
    }: {
        /**
         * The recordId of the technical information update request
         */
        recordId: string,
        /**
         * Include detailed information for statuses (both active and non-active)
         */
        includeStatusDetails?: boolean,
        /**
         * Include detailed information for tasks
         */
        includeTasks?: boolean,
        /**
         * Include attachments
         */
        includeAttachments?: boolean,
        /**
         * Include details about tag for failure report
         */
        includeTagDetails?: boolean,
        /**
         * Include person responsible information in response
         */
        includePersonResponsible?: boolean,
        /**
         * Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
         */
        includeCreatedByDetails?: boolean,
    }): CancelablePromise<TechnicalInformationUpdateRequest | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/technical-information-update-requests/{record-id}',
            path: {
                'record-id': recordId,
            },
            query: {
                'include-status-details': includeStatusDetails,
                'include-tasks': includeTasks,
                'include-attachments': includeAttachments,
                'include-tag-details': includeTagDetails,
                'include-person-responsible': includePersonResponsible,
                'include-created-by-details': includeCreatedByDetails,
            },
            errors: {
                301: `The specified resource exists in another location
                This can occur when requesting a resource which type does not match the route you are using.

                Example: \`/maintenance-api/resource-a/{resource-b-id}/\` gives \`301\` response.
                `,
                403: `User does not have sufficient rights to read technical information update request`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Technical information update request - Update
     * ## Overview
     * Update key fields of a technical information update request.
     *
     * ## Important information
     * To avoid accidentally overwriting the multi-line text property, the endpoint will reject any requests with an empty text property.
     *
     * ### Update release 1.21.0
     * Added support for property `sortField`.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalInformationUpdateRequest({
        recordId,
        requestBody,
    }: {
        /**
         * The recordId of the technical information update request
         */
        recordId: string,
        /**
         * Details on how to update technical information update request
         */
        requestBody: Array<TechnicalInformationUpdateRequestJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/technical-information-update-requests/{record-id}',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request. For example that an empty value for text property was supplied`,
                403: `User does not have sufficient rights to update the technical information update request`,
            },
        });
    }

    /**
     * Technical information update request - Update status
     * Update status of technical information update request.
     *
     * The statuses available for the failure report can be found by querying `/maintenance-records/technical-information-update-requests/{record-id}?include-status-details=true`.
     *
     *
     * ### Important information
     * Possible statuses to set are:
     *
     * System Stat:
     * - NOPR - Notification in process
     * - NOCO - Notification completed
     *
     * User statuses (without status number, all of them can be activated and deactivated):
     * - CANC Cancelled
     * - CRTE Created
     * - DRFT Draft
     * - RTND Returned - Wait for info.
     * - PROJ Project related - M5
     * - MMPC Material Management Pre Coding
     * - IWOS Included in Work Order Scope
     *
     * Deactivation works for all statuses, except system statuses OSTS, NOPR, NOCO
     *
     * Equinor's governing document [GL1561 - Work orders and notifications types](https://docmap.equinor.com/Docmap/page/doc/dmDocAll.html?DOCVIEW=FALSE?DOCKEYID=525791) provides some additional information.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalInformationUpdateStatus({
        recordId,
        statusId,
        requestBody,
    }: {
        /**
         * The recordId of the technical information update.
         */
        recordId: string,
        statusId: string,
        /**
         * Technical information update status to update
         */
        requestBody: Array<StatusUpdateJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/technical-information-update-requests/{record-id}/statuses/{status-id}',
            path: {
                'record-id': recordId,
                'status-id': statusId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                403: `User does not have sufficient rights to update technical information update request`,
                404: `The specified resource was not found`,
                409: `Technical information update request is locked by other user`,
            },
        });
    }

    /**
     * Technical information update request - Attachment download
     * ### Overview
     * Download single attachment for technical information update request
     *
     * ### Known limitations
     * It's not possible to download attachments of type .txt which are stored in the GOS container of the ERP system.
     * Such requests will result in a `HTTP 404 Not found` response.
     *
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadTechnicalInformationUpdateRequestAttachment({
        recordId,
        attachmentId,
    }: {
        recordId: string,
        attachmentId: string,
    }): CancelablePromise<Blob | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/technical-information-update-requests/{record-id}/attachments/{attachment-id}',
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
     * Technical Information Update Request - Attachment upload
     * ### Overview
     * Upload attachment for technical information update request.
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
    public static uploadTechnicalInformationUpdateRequestAttachment({
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
            url: '/maintenance-records/technical-information-update-requests/{record-id}/attachments',
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

    /**
     * Technical information update request - Search
     * ### Overview
     * Search for technical information update requests through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response does not include all details for each technical information update requests.
     * Use lookup of technical information update requests to retrieve additional details.
     *
     * ### Request
     * If query parameter include-person-responsible is set to true in the request, the response will contain values for personResponsibleId and personResponsibleEmail. This will have a performance impact and therefore the default value is false.
     *
     *
     * ### Filter: recent-status-activations
     * Technical information update requests based on recent status activations.
     * Parameters:
     * - status-id
     * - plant-id
     * - max-days-since-activation
     *
     * Example request: `/maintenance-records/technical-information-update-requests?api-version=v1&filter=recent-status-activations&status-id=CRTE&plant-id=1100&max-days-since-activation=10`
     *
     * ### Filter: open-by-plant
     * Find open technical information update requests by plant.
     * Parameters:
     * - plant-id
     * - location-id (optional)
     * - system-id (optional)
     * - has-person-responsible (optional, default false)
     * - created-after-datetime (optional)
     * - planning-plant-id (optional)
     * - planner-group-id (optional)
     *
     * Example request: `/maintenance-records/technical-information-update-requests?api-version=v1&filter=open-by-plant&plant-id=1100&has-person-responsible=false`
     *
     * ### Filter: by-tag
     * Find technical information update requests by tag with possibility of not including completed ones. `/plants/{plant-id}/tags/{tag-id}?include-maintenance-records=true` may also be used for a similar effect.
     * Parameters:
     * - plant-id
     * - tag-id
     * - include-completed (optional, default false)
     * - created-after-datetime (optional)
     *
     * Example request: `/maintenance-records/technical-information-update-requests?api-version=v1&filter=by-tag&plant-id=1100&tag-id=DV50100&include-completed=true`
     *
     * ### Filter: by-person-responsible
     * Find technical information update requests by person responsible.
     * Parameters:
     * - person-responsible-email  (value should be urlencoded)
     * - include-completed (optional, default false)
     *
     * Example request: `/maintenance-records/technical-information-update-requests?api-version=v1&filter=by-person-responsible&person-responsible-email=dapa%40equinor.com&include-completed=false&include-person-responsible=true`
     *
     * ### Update release 1.4.0
     * Added filter by-person-responsible.
     *
     * Added query parameter include-person-responsible.
     *
     * Added properties personResponsibleId and personResponsibleEmail to response (only populated if include-person-responsible=true in the request).
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns TechnicalInformationUpdateRequestBasic Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTechnicalInformationUpdateRequests({
        filter,
        includePersonResponsible = false,
        statusId,
        plantId,
        locationId,
        systemId,
        tagId,
        planningPlantId,
        plannerGroupId,
        maxDaysSinceActivation,
        hasPersonResponsible = false,
        createdAfterDatetime,
        includeCompleted = false,
        personResponsibleEmail,
    }: {
        /**
         * Filter to limit the technical information update requests by
         */
        filter: 'recent-status-activations' | 'open-by-plant' | 'by-tag' | 'by-person-responsible',
        /**
         * Include person responsible information in response
         */
        includePersonResponsible?: boolean,
        /**
         * Status
         */
        statusId?: string,
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * System id to filter by
         */
        systemId?: string,
        tagId?: string,
        /**
         * Planning plant used for planner group id
         */
        planningPlantId?: string,
        /**
         * Planner group id (planning-plant-id must also be supplied)
         */
        plannerGroupId?: string,
        /**
         * Define how many days from the current day to include results for. 0 if only include for today
         */
        maxDaysSinceActivation?: number,
        /**
         * Define if it should have a person responsible or not
         */
        hasPersonResponsible?: boolean,
        /**
         * Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
         */
        createdAfterDatetime?: string,
        /**
         * Filter based on if it's completed or open
         */
        includeCompleted?: boolean,
        /**
         * Email of the person responsible in urlencoded format
         */
        personResponsibleEmail?: string,
    }): CancelablePromise<Array<TechnicalInformationUpdateRequestBasic> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance-records/technical-information-update-requests',
            query: {
                'include-person-responsible': includePersonResponsible,
                'filter': filter,
                'status-id': statusId,
                'plant-id': plantId,
                'location-id': locationId,
                'system-id': systemId,
                'tag-id': tagId,
                'planning-plant-id': planningPlantId,
                'planner-group-id': plannerGroupId,
                'max-days-since-activation': maxDaysSinceActivation,
                'has-person-responsible': hasPersonResponsible,
                'created-after-datetime': createdAfterDatetime,
                'include-completed': includeCompleted,
                'person-responsible-email': personResponsibleEmail,
            },
            errors: {
                400: `Request is missing required parameters`,
            },
        });
    }

    /**
     * Technical information update request - Create
     * Create new technical information update requests
     *
     * ### Important information
     * It is possible to create technical information update request for either tagId or equipmentId.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TechnicalInformationUpdateRequestBasic Created
     * @throws ApiError
     */
    public static createTechnicalInformationUpdateRequest({
        requestBody,
    }: {
        /**
         * Technical information update request to create
         */
        requestBody: TechnicalInformationUpdateRequestCreate,
    }): CancelablePromise<ProblemDetails | TechnicalInformationUpdateRequestBasic> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/technical-information-update-requests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to create a failure report`,
            },
        });
    }

    /**
     * Technical information update request - Add tasks
     * ### Overview
     * Add task to technical information update request.
     *
     * If taskResponsibleEmail is provided and has a valid Equinor email address, the taskResponsibleId will be set to the employee id of the user.
     *
     * To find possible taskCodeGroupId and taskCodeId use the  `/maintenance-records/task-codes?maintenance-record-id=...`.
     *
     * ### Update release 1.8.0
     * Response type change to return the created tasks.
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordTask Success
     * @throws ApiError
     */
    public static addTechnicalInformationUpdateRequestTasks({
        recordId,
        requestBody,
    }: {
        /**
         * Id of the technical information update request
         */
        recordId: string,
        /**
         * Tasks to add to existing technical information update request
         */
        requestBody: Array<MaintenanceRecordTaskCreate>,
    }): CancelablePromise<ProblemDetails | Array<MaintenanceRecordTask>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/technical-information-update-requests/{record-id}/tasks',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid. May occur if taskResponsibleEmail is not an Equinor email address.`,
                403: `User does not have sufficient rights to add tasks technical information update request`,
                404: `The specified resource was not found`,
                409: `Technical information update request is locked by other user`,
            },
        });
    }

    /**
     * Technical information update request - Update task
     * ### Overview
     * Update fields of an existing task for failure report.
     *
     * To find tasks available on a failure report, use  `/maintenance-records/technical-information-update-request/{record-id}?include-tasks=true`.
     *
     * When a task is created, it will have status `TSOS - Outstanding task` and `CRTE - Created`.
     * The status `TSRL - Task Released` can be set afterwards.
     *
     * To change status of a task, use endpoint `/maintenance-records/technical-information-update-request/{record-id}/tasks/{task-id}/statuses/{status-id}`
     *
     * ### Update release 1.28.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalInformationUpdateRequestTask({
        recordId,
        taskId,
        requestBody,
    }: {
        /**
         * id of the technical information update request
         */
        recordId: string,
        /**
         * id of the task
         */
        taskId: string,
        /**
         * Task to update
         */
        requestBody: Array<MaintenanceRecordTaskUpdateJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/technical-information-update-requests/{record-id}/tasks/{task-id}',
            path: {
                'record-id': recordId,
                'task-id': taskId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The request body is invalid. May occur if taskResponsibleEmail is not an Equinor email address.`,
                403: `User does not have sufficient rights to update failure report task`,
                404: `The specified resource was not found`,
                409: `Failure report is locked by other user`,
            },
        });
    }

    /**
     * Technical information update request - Update task status
     * ### Overview
     * Update status of an existing task for technical information update request.
     *
     * To find tasks available on a technical information update request, use the  `/maintenance-records/technical-information-update-requests/{record-id}?include-tasks=true`.
     *
     * When a task is created, it will have status `TSOS - Outstanding task` and `CRTE - Created`.
     * The status `TSRL - Task Released` can be set afterwards.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalInformationUpdateRequestTaskStatuses({
        recordId,
        taskId,
        statusId,
        requestBody,
    }: {
        /**
         * id of the technical information update request
         */
        recordId: string,
        /**
         * id of the task
         */
        taskId: string,
        /**
         * id of the status
         */
        statusId: string,
        /**
         * Task status to update
         */
        requestBody: Array<StatusUpdateJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/technical-information-update-requests/{record-id}/tasks/{task-id}/statuses/{status-id}',
            path: {
                'record-id': recordId,
                'task-id': taskId,
                'status-id': statusId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `User does not have sufficient rights to update technical information update request`,
                404: `The specified resource was not found`,
                409: `Technical information update request is locked by other user`,
            },
        });
    }

}
