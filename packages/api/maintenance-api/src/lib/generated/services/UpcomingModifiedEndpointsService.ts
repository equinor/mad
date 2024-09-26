/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Plant } from '../models/Plant';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdateJsonPatch } from '../models/StatusUpdateJsonPatch';
import type { WorkOrderInPlan } from '../models/WorkOrderInPlan';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UpcomingModifiedEndpointsService {

    /**
     * Plants - Lookup
     * ### Overview
     * Lookup a single plant with related information.
     *
     * ### Update version 1.6.0
     * Added `include-revisions` for reading master data on revisions for the `planningPlantId` of the provided `plantId`.
     *
     * ### Update version 1.7.0
     * Added `include-systems` query parameter.
     *
     * ### Update version 1.13.0
     * Added `include-equipment-catalog-profiles` query parameter.
     *
     * ### Update version 1.14.0
     * Added `include-only-default-tag-catalog-profiles` query parameter to limit the response from `include-tag-catalog-profiles` and/or `include-equipment-catalog-profiles`
     *
     * ### Update version 1.17.0
     * Added the  `allowSimplifiedTimeAndProgress` flag to represent is the plant is valid for Non-CATS time recording.
     *
     * Updated PlanningPlantRevision-model.
     *
     * ### Update version 1.20.0
     * Added query parameter `include-baseline-plans` related to `OM104.01.06 - Prepare Work order plan` and `work-order-plan/`.
     *
     * ### Upcoming change
     * Added `include-responsible-persons` to the response. Added `responsiblePersons` to the response.
     *
     * @returns Plant Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static lookupPlant({
        plantId,
        includeLocations = false,
        includeWorkCenters = false,
        includePlannerGroups = false,
        includeTagCatalogProfiles = false,
        includeEquipmentCatalogProfiles = false,
        includeOnlyDefaultCatalogProfiles = false,
        includeSurfaceDegradationFactors = false,
        includeRevisions = false,
        includeSystems = false,
        includeBaselinePlans = false,
        includeResponsiblePersons = false,
    }: {
        plantId: string,
        /**
         * Include location for plant
         */
        includeLocations?: boolean,
        /**
         * Include work centers for plant
         */
        includeWorkCenters?: boolean,
        /**
         * Include planner groups for plant
         */
        includePlannerGroups?: boolean,
        /**
         * Include tag catalog profiles in use for plant
         */
        includeTagCatalogProfiles?: boolean,
        /**
         * Include equipment catalog profiles in use for plant
         */
        includeEquipmentCatalogProfiles?: boolean,
        /**
         * Use this in combination with `include-tag-catalog-profiles=true` and/or `include-equipment-catalog-profiles=true` to improve performance.
         *
         */
        includeOnlyDefaultCatalogProfiles?: boolean,
        /**
         * Include surface degradations for plant
         */
        includeSurfaceDegradationFactors?: boolean,
        /**
         * Include revisions for plant
         */
        includeRevisions?: boolean,
        /**
         * Include systems for plant
         */
        includeSystems?: boolean,
        /**
         * Include open baseline plans for the planning plant of this plant
         */
        includeBaselinePlans?: boolean,
        /**
         * Include persons that are already responsible for objects on this plant
         */
        includeResponsiblePersons?: boolean,
    }): CancelablePromise<Plant | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants/{plant-id}',
            path: {
                'plant-id': plantId,
            },
            query: {
                'include-locations': includeLocations,
                'include-work-centers': includeWorkCenters,
                'include-planner-groups': includePlannerGroups,
                'include-tag-catalog-profiles': includeTagCatalogProfiles,
                'include-equipment-catalog-profiles': includeEquipmentCatalogProfiles,
                'include-only-default-catalog-profiles': includeOnlyDefaultCatalogProfiles,
                'include-surface-degradation-factors': includeSurfaceDegradationFactors,
                'include-revisions': includeRevisions,
                'include-systems': includeSystems,
                'include-baseline-plans': includeBaselinePlans,
                'include-responsible-persons': includeResponsiblePersons,
            },
            errors: {
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Plants - Search
     * ### Overview
     * Search for plants through predefined filters.
     *
     * ### Filter: by-plant
     * Search plant based on one or more `plant-id`
     *
     * Parameters:
     * - plant-id (supports comma-separated list)
     *
     * ### Filter: by-planning-plant
     * Search plant based on one or more `planning-plant-id`
     *
     * Parameters:
     * - planning-plant-id (supports comma-separated list)
     *
     * ### Update version 1.13.0
     * Added `include-equipment-catalog-profiles` query parameter.
     *
     * ### Update version 1.17.0
     * Added the  `allowSimplifiedTimeAndProgress` flag to represent is the plant is valid for Non-CATS time recording.
     *
     * ### Update version 1.20.0
     * Added query parameter `include-baseline-plans` related to `OM104.01.06 - Prepare Work order plan` and `work-order-plan/`.
     *
     * ### Upcoming change
     * Added `include-responsible-persons` to the response. Added `responsiblePersons` to the response.
     *
     * @returns Plant Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchPlant({
        filter,
        plantId,
        planningPlantId,
        includeLocations = false,
        includeWorkCenters = false,
        includePlannerGroups = false,
        includeTagCatalogProfiles = false,
        includeEquipmentCatalogProfiles = false,
        includeSurfaceDegradationFactors = false,
        includeBaselinePlans = false,
        includeResponsiblePersons = false,
    }: {
        /**
         * Filter to limit plants by
         */
        filter: 'by-plant' | 'by-planning-plant',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Plant used to plan the maintenance work. Usually same as `plantId`, but there are some cases were one `planningPlantId` is used across multiple `plantId`.
         */
        planningPlantId?: string,
        /**
         * Include location for plant
         */
        includeLocations?: boolean,
        /**
         * Include work centers for plant
         */
        includeWorkCenters?: boolean,
        /**
         * Include planner groups for plant
         */
        includePlannerGroups?: boolean,
        /**
         * Include tag catalog profiles in use for plant
         */
        includeTagCatalogProfiles?: boolean,
        /**
         * Include equipment catalog profiles in use for plant
         */
        includeEquipmentCatalogProfiles?: boolean,
        /**
         * Include surface degradations for plant
         */
        includeSurfaceDegradationFactors?: boolean,
        /**
         * Include open baseline plans for the planning plant of this plant
         */
        includeBaselinePlans?: boolean,
        /**
         * Include persons that are already responsible for objects on this plant
         */
        includeResponsiblePersons?: boolean,
    }): CancelablePromise<Array<Plant> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/plants',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'planning-plant-id': planningPlantId,
                'include-locations': includeLocations,
                'include-work-centers': includeWorkCenters,
                'include-planner-groups': includePlannerGroups,
                'include-tag-catalog-profiles': includeTagCatalogProfiles,
                'include-equipment-catalog-profiles': includeEquipmentCatalogProfiles,
                'include-surface-degradation-factors': includeSurfaceDegradationFactors,
                'include-baseline-plans': includeBaselinePlans,
                'include-responsible-persons': includeResponsiblePersons,
            },
            errors: {
                400: `Request is missing required parameters`,
                404: `The specified resource was not found`,
            },
        });
    }

    /**
     * Work order plan - Get
     * ### Overview
     * Get work order activities planned to be performed for a single planning plant.
     * The response is normally based on the planned scheduling of work order operations through the properties `earliestStartDateTime` and `earliestFinishDateTime`. It does not use assignment to baseline plan as a source as this does not cover all work.
     *
     * It is possible to use the defined periods from the baseline plans as basis for the query parameters `planPeriodStartDate` and `planPeriodDuration`. Use `/plants/{plant-id}?include-baseline-plan=true&api-version=v1` for this purpose.
     *
     * `personResponsibleId` will normally not be populated as planning is performed on the work center as a whole.
     *
     * This endpoint returns only Work Order with status 'PLAN'. The field `requiredEndDate` is dependent on workOrderType.
     *
     *
     * ### Filter: by-plan-period
     * Provide the plan for a specific planning plant based on a defined plan period. This is the main usage of this endpoint.
     * Parameters:
     * - plan-period-start-date
     * - plan-period-duration
     * - location-id-any-of (optional)
     * - revision-id-any-of (optional)
     * - work-center-id-any-of (optional, supports * wildcard at the end)
     * - main-work-center-id-any-of (optional, supports * wildcard at the end)
     * - status-any-of (optional)
     * - status-not (optional)
     * - operation-notes-any-of (optional)
     * - person-responsible-id (optional)
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?filter=by-plan-period&plan-period-start-date=2023-03-02&plan-period-duration=P21D&location-id-any-of=CD00&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     * - `/work-order-plan/{planning-plant-id}?filter=by-plan-period&plan-period-start-date=2023-03-02&plan-period-duration=P21D&work-center-id-any-of=C31*&include-completed-work-order-operations=false&api-version=v1`
     *
     * ### Filter: by-person-responsible
     * Get the work order plan for a specific planning plant, but only for work orders assigned to a specific user.
     * Normally, work orders will not be assigned directly to a user, but in some work processes (such as inspection), this occurs.
     * Parameters:
     * - person-responsible-id
     * - plan-period-start-date (optional)
     * - plan-period-duration (optional)
     * - person-responsible-email (value should be URL encoded) (optional)
     * - location-id-any-of (optional)
     * - revision-id-any-of (optional)
     * - work-center-id-any-of (optional, supports * wildcard at the end)
     * - main-work-center-id-any-of (optional, supports * wildcard at the end)
     * - status-any-of (optional)
     * - status-not (optional)
     * - operation-notes-any-of (optional)
     *
     * Example of usage:
     * - `/work-order-plan/{planning-plant-id}?filter=by-person-responsible&person-responsible-email=shortname@equinor.com&include-completed-work-order-operations=false&work-order-types-any-of=preventiveWorkOrders,correctiveWorkOrders&api-version=v1`
     *
     * ### Update release 1.26.0
     * Added query parameter `work-center-id-any-of`.
     *
     * ### Update release 1.29.0
     * Added properties `cmrIndicator` and `maintenanceRecordId`.
     *
     * ### Upcoming changes
     * Added following filter options:
     * - `main-work-center-id-any-of`
     * - `status-any-of`
     * - `status-not`
     * - `operation-notes-any-of`
     *
     * Added following fields to the response:
     * - `personResponsible`
     * - `mainWorkCenterId`
     *
     * @returns WorkOrderInPlan Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static getWorkOrderPlan({
        planningPlantId,
        filter,
        planPeriodStartDate,
        planPeriodDuration,
        personResponsibleEmail,
        includeCompletedWorkOrderOperations = false,
        includePersonResponsible = false,
        workOrderTypesAnyOf,
        workCenterIdAnyOf,
        mainWorkCenterIdAnyOf,
        revisionIdAnyOf,
        locationIdAnyOf,
        statusAnyOf,
        statusNot,
        operationNotesAnyOf,
    }: {
        /**
         * Planning plant to retrieve work order plan for
         */
        planningPlantId: string,
        /**
         * Filter to limit the work order plan by
         */
        filter: 'by-plan-period' | 'by-person-responsible',
        /**
         * Start of plan period (`/plants/{plant-id}?include-baseline-plans=true` can be used as a reference )
         */
        planPeriodStartDate?: string,
        /**
         * Duration of plan period
         */
        planPeriodDuration?: string,
        /**
         * Email address for responsible person
         */
        personResponsibleEmail?: string,
        /**
         * Include completed work order operations
         */
        includeCompletedWorkOrderOperations?: boolean,
        /**
         * Include person responsible information in response
         */
        includePersonResponsible?: boolean,
        /**
         * Limit to specific work order types (any-of). Default includes all types
         */
        workOrderTypesAnyOf?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
        /**
         * Comma-separated list of work-center-id
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of main-work-center-id
         */
        mainWorkCenterIdAnyOf?: string,
        /**
         * Comma-separated list of revision-id
         */
        revisionIdAnyOf?: string,
        /**
         * Comma-separated list of location-id
         */
        locationIdAnyOf?: string,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusAnyOf?: Array<'STRT' | 'RDOP' | 'TECO' | 'REL' | 'CRTD'>,
        /**
         * Query based on statusIds (not all statuses are supported)
         */
        statusNot?: Array<'STRT' | 'RDOP' | 'TECO' | 'REL' | 'CRTD'>,
        /**
         * Query based on operation planNotes
         */
        operationNotesAnyOf?: string,
    }): CancelablePromise<Array<WorkOrderInPlan> | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-order-plan/{planning-plant-id}',
            path: {
                'planning-plant-id': planningPlantId,
            },
            query: {
                'filter': filter,
                'plan-period-start-date': planPeriodStartDate,
                'plan-period-duration': planPeriodDuration,
                'person-responsible-email': personResponsibleEmail,
                'include-completed-work-order-operations': includeCompletedWorkOrderOperations,
                'include-person-responsible': includePersonResponsible,
                'work-order-types-any-of': workOrderTypesAnyOf,
                'work-center-id-any-of': workCenterIdAnyOf,
                'main-work-center-id-any-of': mainWorkCenterIdAnyOf,
                'revision-id-any-of': revisionIdAnyOf,
                'location-id-any-of': locationIdAnyOf,
                'status-any-of': statusAnyOf,
                'status-not': statusNot,
                'operation-notes-any-of': operationNotesAnyOf,
            },
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights`,
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
     * Now it is possible to set following statuses:
     * - TSRL Task Released
     * - TSCO Task Completed
     * - TSSC Task successful
     * - TCMP WF when task completed
     * - RIND Returned - Wait for info
     * - CANC Cancelled
     *
     * ### Upcoming changes
     * Enabled activation of user statuses like `TCMP - WF when task completed`, `RIND - Returned - Wait for info` and `CANC - Cancelled`
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
            url: '/maintenance-records/failure-reports/{record-id}/tasks/{task-id}/statuses/{status-id}',
            path: {
                'record-id': recordId,
                'task-id': taskId,
                'status-id': statusId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
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
     * Now it is possible to set following statuses:
     * - TSRL Task Released
     * - TSCO Task Completed
     * - TSSC Task successful
     * - TCMP WF when task completed
     * - RIND Returned - Wait for info
     * - CANC Cancelled
     *
     *
     * ### Upcoming changes
     * Enabled activation of user statuses like `TCMP - WF when task completed`, `RIND - Returned - Wait for info` and `CANC - Cancelled`
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
