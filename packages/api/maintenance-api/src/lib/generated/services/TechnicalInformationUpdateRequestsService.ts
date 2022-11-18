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
     * ### Update release v1.5.0
     * Added `createdDateTime` for attachments.
     *
     * ### Update release v1.6.0
     * Added `301` response.
     *
     * ### Update release 1.11.0
     * Added `quantity` for tasks.
     *
     * Added properties `createdById`,`createdBy` and `createdByEmail`.
     * `createdById` will always be have value in response. `createdBy` and `createdByEmail` will only have value in response if the `include-created-by-details` query parameter is `true`.
     *
     * @param recordId The recordId of the technical information update request
     * @param includeStatusDetails Include detailed information for statuses (both active and non-active)
     * @param includeTasks Include detailed information for tasks
     * @param includeAttachments Include attachments
     * @param includeTagDetails Include details about tag for failure report
     * @param includePersonResponsible Include person responsible information in response. If user does not have significant rights, this will return a `403` response
     * @param includeCreatedByDetails Include name and email of user represented in `createdById`. If not supplied, `createdBy` and `createdByEmail` will have null value.
     * @returns TechnicalInformationUpdateRequest Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupTechnicalInformationUpdateRequest(
        recordId: string,
        includeStatusDetails: boolean = false,
        includeTasks: boolean = false,
        includeAttachments: boolean = false,
        includeTagDetails: boolean = false,
        includePersonResponsible: boolean = false,
        includeCreatedByDetails: boolean = false,
    ): CancelablePromise<TechnicalInformationUpdateRequest | ProblemDetails> {
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
     * @param recordId The recordId of the technical information update request
     * @param requestBody Details on how to update technical information update request
     * @returns TechnicalInformationUpdateRequestBasic Success, the technical information update request has been updated
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalInformationUpdateRequest(
        recordId: string,
        requestBody: Array<TechnicalInformationUpdateRequestJsonPatch>,
    ): CancelablePromise<TechnicalInformationUpdateRequestBasic | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance-records/technical-information-update-requests/{record-id}',
            path: {
                'record-id': recordId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request. For example that an empty text property was supplied`,
                403: `User does not have sufficient rights to update the technical information update request`,
            },
        });
    }

    /**
     * Technical information update request - Attachment download
     * Download single attachment for technical information update request
     * @param recordId
     * @param attachmentId
     * @returns binary Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static downloadTechnicalInformationUpdateRequestAttachment(
        recordId: string,
        attachmentId: string,
    ): CancelablePromise<Blob | ProblemDetails> {
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
     * @param recordId
     * @param formData
     * @returns any Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static uploadTechnicalInformationUpdateRequestAttachment(
        recordId: string,
        formData?: {
            files?: Array<Blob>;
        },
    ): CancelablePromise<any | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance-records/technical-information-update-requests/{record-id}/attachments',
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
     * @param filter Filter to limit the technical information update requests by
     * @param includePersonResponsible Include person responsible information in response
     * @param statusId Status
     * @param plantId Plant
     * @param locationId Structured location within the plant. Use /plants/{plant-id}/locations for possible values
     * @param systemId System id to filter by
     * @param tagId
     * @param planningPlantId Planning plant used for planner group id
     * @param plannerGroupId Planner group id (planning-plant-id must also be supplied)
     * @param maxDaysSinceActivation Define how many days from the current day to include results for. 0 if only include for today
     * @param hasPersonResponsible Define if it should have a person responsible or not
     * @param createdAfterDatetime Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
     * @param includeCompleted Filter based on if it's completed or open
     * @param personResponsibleEmail Email of the person responsible in urlencoded format
     * @returns TechnicalInformationUpdateRequestBasic Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchTechnicalInformationUpdateRequests(
        filter: 'recent-status-activations' | 'open-by-plant' | 'by-tag' | 'by-person-responsible',
        includePersonResponsible: boolean = false,
        statusId?: string,
        plantId?: string,
        locationId?: string,
        systemId?: string,
        tagId?: string,
        planningPlantId?: string,
        plannerGroupId?: string,
        maxDaysSinceActivation?: number,
        hasPersonResponsible: boolean = false,
        createdAfterDatetime?: string,
        includeCompleted: boolean = false,
        personResponsibleEmail?: string,
    ): CancelablePromise<Array<TechnicalInformationUpdateRequestBasic> | ProblemDetails> {
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
     * @param requestBody Technical information update request to create
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TechnicalInformationUpdateRequestBasic Created
     * @throws ApiError
     */
    public static createTechnicalInformationUpdateRequest(
        requestBody: TechnicalInformationUpdateRequestCreate,
    ): CancelablePromise<ProblemDetails | TechnicalInformationUpdateRequestBasic> {
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
     * @param recordId Id of the technical information update request
     * @param requestBody Tasks to add to existing technical information update request
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns MaintenanceRecordTask Success
     * @throws ApiError
     */
    public static addTechnicalInformationUpdateRequestTasks(
        recordId: string,
        requestBody: Array<MaintenanceRecordTaskCreate>,
    ): CancelablePromise<ProblemDetails | Array<MaintenanceRecordTask>> {
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
     * @param recordId id of the technical information update request
     * @param taskId id of the task
     * @param requestBody Task to update
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalInformationUpdateRequestTask(
        recordId: string,
        taskId: string,
        requestBody: Array<MaintenanceRecordTaskUpdateJsonPatch>,
    ): CancelablePromise<ProblemDetails> {
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
     * @param recordId id of the technical information update request
     * @param taskId id of the task
     * @param statusId id of the status
     * @param requestBody Task status to update
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateTechnicalInformationUpdateRequestTaskStatuses(
        recordId: string,
        taskId: string,
        statusId: string,
        requestBody: Array<StatusUpdateJsonPatch>,
    ): CancelablePromise<ProblemDetails> {
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
