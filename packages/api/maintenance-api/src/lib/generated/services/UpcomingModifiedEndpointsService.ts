/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Plant } from '../models/Plant';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdateJsonPatch } from '../models/StatusUpdateJsonPatch';
import type { WorkOrderWithOperationList } from '../models/WorkOrderWithOperationList';

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
     * Work orders - Search
     * ### Overview
     * Search for Work orders regardless of type through predefined filters.
     * Each filter has a defined action and a set of parameters as described below.
     *
     * ### Response
     * The response can include most of the details for each work order.
     * If additional data is needed, it can be retrieved by using the endpoint represented in the `_links.self` property.
     *
     *
     * ### Filter: recently-changed
     * Find Work orders which have been recently changed (created or updated) for a given plant. Normally, clients will provide the parameters `changed-since-datetime` and `plant-id` to return any changed Work order from `changed-since-datetime` to now. It is also possible to add `before-datetime` query parameter - the endpoint will then return any work order changed between `changed-since-datetime` and `before-datetime`.
     *
     * Parameters:
     * - `plant-id`
     * - `changed-since-datetime`
     * - `before-datetime` (optional)
     *
     * ### Filter: before-basic-end-date
     * Find open Work orders before the `basic-end-date`. `basic-end-date` should be a date in the future so that already finished work orders will not be presented.
     *
     * Parameters:
     * - `plant-id`
     * - `basic-end-date`
     * - `location-id` (optional)
     *
     * ### Filter: by-external-partner-work-order-id
     * Find Work orders for a 'work-order-id' in an external partner system. Note: In theory, different external systems could have the same `external-partner-id` but this is very unlikely. Clients are recommended to filter the response based on the plants they are interested in to avoid any issues.
     *
     * Parameters:
     * - `external-partner-work-order-id`
     *
     * ### Filter: by-cost-network
     * Find Work orders based on Cost Network Id.
     *
     * Parameters:
     * - `cost-network-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-cost-wbs
     * Find Work orders based on Cost WBS Id.
     *
     * Parameters:
     * - `cost-wbs-id`
     * - `plant-id` (optional)
     *
     * ### Filter: by-work-center-id
     * Find Work orders based on their `workCenterId`.
     *
     * Parameters:
     * - `work-center-id-any-of`
     * - `plant-id` (optional)
     *
     * ### Filter: by-work-order-id
     * Find Work orders based on their `workOrderId`.
     *
     * Parameters:
     * - `work-order-id-any-of`
     * - `plant-id` (optional)
     *
     * ### Update release 0.11.0
     * Work order operation actualPercentageComplete now represents progress reported through technical feedback.
     * If the Work order operation is completed, the value of actualPercentageComplete will always be 100.
     *
     * Filter by-external-partner-work-order-id added.
     * ### Update release 1.3.0
     * Bugfix related to plantId source.
     *
     * ### Update release 1.4.0
     * Introduced property calculationKey for operations.
     *
     * ### Update release 1.5.0
     * Added revisionId and revision to work order response (represents shutdown or campaign work).
     *
     * ### Update release 1.12.0
     * Improved performance of endpoint.
     *
     * ### Update release 1.19.0
     * Added properties `systemCondition` and `isExcludedFromWorkOrderPlan` for operations.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.24.0
     * Added filter `by-cost-wbs`, with required parameter `cost-wbs-id`. Can be used in combination with the optional parameter `plant-id`
     * This filter only includes work orders where the WBS is represented on the work order level. It does not include work orders where WBS is only represented in the settlement rules.
     *
     * Added filter `by-cost-network`, with required parameter `cost-network-id`. Can be used in combination with the optional parameter `plant-id`
     *
     * Added property `cmrIndicator` to the top level objects in the response.
     *
     * ### Update release 1.27.0
     * Work orders now include the property `isOpen`
     *
     * ### Update release 1.30.0
     * Modified GET work order to fetch data from Maintenance plant from the sap field `swerk`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Upcoming changes
     * Added filter `by-work-center-id` with the required parameter `work-center-id-any-of`. Can optionally be combined with the parameter `plant-id`
     *
     * Added filter `by-work-order-id` with the required parameter `work-order-id-any-of`. Can optionally be combined with the parameter `plant-id`
     *
     * Added option to not include operations for the Work Orders by setting the optional parameter `include-operations` to `false` (default is `true`). This can improve performance for the endpoint.
     *
     * Added property `requiredEndDate` to the top level objects in the response.
     *
     * Added property `confirmationId` to `operations`
     *
     * @returns WorkOrderWithOperationList Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static searchWorkOrders({
        filter,
        plantId,
        changedSinceDatetime,
        beforeDatetime,
        includeWorkOrderText,
        includeWorkOrderOperationText,
        includeWorkOrderTypes,
        includeOperations = true,
        basicEndDate,
        locationId,
        externalPartnerWorkOrderId,
        costWbsId,
        costNetworkId,
        workCenterIdAnyOf,
        workOrderIdAnyOf,
    }: {
        /**
         * Filter to limit the work order by
         */
        filter: 'recently-changed' | 'before-basic-end-date' | 'by-external-partner-work-order-id' | 'by-cost-network' | 'by-cost-wbs' | 'by-work-center-id' | 'by-work-order-id',
        /**
         * Plant identifier
         */
        plantId?: string,
        /**
         * Earliest datetime to returned changed work orders for
         */
        changedSinceDatetime?: string,
        /**
         * Optional parameter to limit the response to only work orders changed after changed-since-datetime but before this datetime
         */
        beforeDatetime?: string,
        /**
         * The text of the Work order is time-consuming to retrieve. Set to false to avoid returning it
         */
        includeWorkOrderText?: boolean,
        /**
         * The text of the Work order operation is time-consuming to retrieve. Set to false to avoid returning it
         */
        includeWorkOrderOperationText?: boolean,
        /**
         * Include which types of work orders. Use comma-separated list of entries.
         */
        includeWorkOrderTypes?: Array<'correctiveWorkOrders' | 'preventiveWorkOrders' | 'modificationWorkOrders' | 'sasChangeWorkOrders' | 'projectWorkOrders' | 'subseaWorkOrders'>,
        /**
         * Include operations for the Work orders in the response.
         */
        includeOperations?: boolean,
        /**
         * Earliest date to find maintenance plan history for (optional for filter)
         */
        basicEndDate?: string,
        /**
         * Structured location within the plant. Use /plants/{plant-id}/locations for possible values
         */
        locationId?: string,
        /**
         * If work order was initially created in an external system, this represent the unique id of it
         */
        externalPartnerWorkOrderId?: string,
        /**
         * Required parameter if `filter=by-cost-wbs`
         */
        costWbsId?: string,
        /**
         * Required parameter if `filter=by-cost-network`
         */
        costNetworkId?: string,
        /**
         * Comma-separated list of `work-center-id`.
         */
        workCenterIdAnyOf?: string,
        /**
         * Comma-separated list of `work-order-id`.
         */
        workOrderIdAnyOf?: string,
    }): CancelablePromise<WorkOrderWithOperationList | ProblemDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/work-orders',
            query: {
                'filter': filter,
                'plant-id': plantId,
                'changed-since-datetime': changedSinceDatetime,
                'before-datetime': beforeDatetime,
                'include-work-order-text': includeWorkOrderText,
                'include-work-order-operation-text': includeWorkOrderOperationText,
                'include-work-order-types': includeWorkOrderTypes,
                'include-operations': includeOperations,
                'basic-end-date': basicEndDate,
                'location-id': locationId,
                'external-partner-work-order-id': externalPartnerWorkOrderId,
                'cost-wbs-id': costWbsId,
                'cost-network-id': costNetworkId,
                'work-center-id-any-of': workCenterIdAnyOf,
                'work-order-id-any-of': workOrderIdAnyOf,
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
