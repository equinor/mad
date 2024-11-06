/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Plant } from '../models/Plant';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdateJsonPatch } from '../models/StatusUpdateJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UpcomingModifiedEndpointsService {

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
     * - PRCR - Product Created
     *
     * ### Upcoming changes
     * Enabled activation of user statuses like `TCMP - WF when task completed`, `RIND - Returned - Wait for info` and `CANC - Cancelled`
     *
     * Enabled activation of user statuses related to products, such as `PRCR - Product Created`
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
