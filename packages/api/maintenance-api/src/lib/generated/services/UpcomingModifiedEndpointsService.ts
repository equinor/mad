/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProblemDetails } from '../models/ProblemDetails';
import type { StatusUpdateJsonPatch } from '../models/StatusUpdateJsonPatch';
import type { WorkOrderOperationJsonPatch } from '../models/WorkOrderOperationJsonPatch';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UpcomingModifiedEndpointsService {

    /**
     * Work order - Update operation
     * ### Overview
     * Update the work order operation for all work order types.
     * The `operation-id` parameter to use in the url can be found using the various lookup and search endpoints for work orders. `operation-id` consists of two internal ids from the ERP system called routing number and counter separated by the `-` character.
     *
     * The following fields are possible to update:
     * - actualPercentageComplete
     * - isCompleted
     * - schedulingStartConstraintId - Value one of: `MSO` - Must start on, `SNET` - Start no earlier than or `SNLT` - Start no later than
     * - schedulingStartConstraintDateTime
     * - schedulingFinishConstraintId - Value one of: `MFO ` - Must finish on, `FNET` - Finish no earlier than or `FNLT` - Finish no later than
     * - schedulingFinishConstraintDateTime
     * - systemCondition
     * - operationId
     * - title
     * - text
     * - workCenterId
     * - workCenterPlantId
     * - standardTextTemplate
     * - plannedWorkHours
     * - plannedWorkDuration
     * - capacityCount
     * - calculationKey
     *
     * Individual operations can be updated with relevant codes for `systemCondition` to describe required process conditions for each operation. Possible values for the `systemCondition`:
     * - 0 - Unit shutdown
     * - 1 – In operation
     * - 2 – System shutdown
     * - 3 – Partial production shutdown
     * - 4 – Full production shutdown
     * - 5 - Reset condition value
     *
     * ### Update release 1.19.0
     * Added support for `operationId`, `title`, `text`, `workCenterId`, `workCenterPlantId`, `standardTextTemplate`, `plannedWorkHours`, `plannedWorkDuration`, `capacityCount`, `calculationKey`, `systemCondition,` and `isExcludedFromWorkOrderPlan`.
     *
     * ### Update release 1.21.0
     * Added ability to update text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * ### Update release 1.22.0
     * Added support to reset `systemCondition` by passing in the value `5`.
     *
     * ### Update release 1.31.0
     * Fixed enum values for `schedulingStartConstraintId` and `schedulingFinishConstraintId`
     *
     * ### Update release 1.35.0
     * Added support for updating the person responsible for the operation by using the path `personResponsibleEmail`. The value used for this path should be the equinor email of an employee with a SAP user.
     *
     * ### Upcoming changes
     * Added support for updating property `isExcludedFromWorkOrderPlan`.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    public static updateWorkOrderOperation({
        operationId,
        requestBody,
    }: {
        operationId: string,
        /**
         * Update of Work order details
         */
        requestBody: Array<WorkOrderOperationJsonPatch>,
    }): CancelablePromise<ProblemDetails> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/work-order-operations/{operation-id}',
            path: {
                'operation-id': operationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request is missing required parameters`,
                403: `User does not have sufficient rights to update operation`,
                404: `The specified resource was not found`,
                409: `Work order is locked by other user`,
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
