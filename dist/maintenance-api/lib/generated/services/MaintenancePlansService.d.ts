import type { MaintenancePackagePut } from '../models/MaintenancePackagePut';
import type { MaintenancePlan } from '../models/MaintenancePlan';
import type { MaintenancePlanForSearchByTask } from '../models/MaintenancePlanForSearchByTask';
import type { MaintenancePlanItem } from '../models/MaintenancePlanItem';
import type { MaintenancePlanItemJsonPatch } from '../models/MaintenancePlanItemJsonPatch';
import type { MaintenancePlanItemStatusJsonPatch } from '../models/MaintenancePlanItemStatusJsonPatch';
import type { MaintenancePlanItemTaskListJsonPatch } from '../models/MaintenancePlanItemTaskListJsonPatch';
import type { ObjectLinkageCreate } from '../models/ObjectLinkageCreate';
import type { ProblemDetails } from '../models/ProblemDetails';
import type { TaskListOperationBasic } from '../models/TaskListOperationBasic';
import type { TaskWorkOrderOperationCreate } from '../models/TaskWorkOrderOperationCreate';
import type { TaskWorkOrderOperationJsonPatch } from '../models/TaskWorkOrderOperationJsonPatch';
import type { TaskWorkOrderOperationMaterialNeedsJsonPatch } from '../models/TaskWorkOrderOperationMaterialNeedsJsonPatch';
import type { WorkOrderOperationMaterialNeedsCreate } from '../models/WorkOrderOperationMaterialNeedsCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MaintenancePlansService {
    /**
     * Maintenance Plan - Lookup
     * Lookup single Maintenance Plan
     *
     * ### Update version 1.8.0
     * Added isActive property.
     *
     * ### Update version 1.13.0
     * Added uniqueKey in TaskListOperations.
     *
     * ### Update version 1.14.0
     * Removed `taskList` and `objectList` properties from the response schema. They were never included in the actual
     * response, so this change has no implication on the data received from the API.
     *
     * @returns MaintenancePlan Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static lookupMaintenancePlan({ planId, includeItems, includeItemCalls, }: {
        planId: string;
        /**
         * Include items of the maintenance plan
         */
        includeItems?: boolean;
        /**
         * Include calls for items of the maintenance plan
         */
        includeItemCalls?: boolean;
    }): CancelablePromise<MaintenancePlan | ProblemDetails>;
    /**
     * Maintenance Plan Item- Lookup
     * ### Overview
     * Lookup single maintenance plan item
     *
     * Maintenance Item contains the object list, task list and previous calls for preventive work orders.
     *
     * The object list describes the tag/equipment covered in the maintenance plan item.
     *
     *
     * The task list describes the maintenance activities with the necessary support activities to be performed in the maintenance programme. These are divided into operations that are listed in an order that is natural for the practical implementation of the maintenance. The task List also sets the interval of operations through maintenance packages.
     *
     * ### Update release v1.2.0
     * Added `calculationKey` for operations in the task list.
     *
     * ### Update release v1.5.0
     * Bugfix related to text for operation.
     *
     * ### Update release v1.8.0
     * New properties were added to the calls expand: duePackages, schedulingType, callDate, completionDate
     *
     * ### Update release v1.9.0
     * Added property objectId for objectList.
     *
     * ### Update release v1.13.0
     * Added parameter include-item-object-list-linkage with default value true. Added uniqueKey in TaskListOperations.
     *
     * ### Update release v1.14.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns MaintenancePlanItem Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static lookupMaintenancePlanItem({ planId, itemId, includeItemCalls, includeItemObjectList, includeObjectListLinkage, includeItemTaskList, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * Include calls to maintenance plan item
         */
        includeItemCalls?: boolean;
        /**
         * Include list of objects for the maintenance plan item
         */
        includeItemObjectList?: boolean;
        /**
         * Include object list linkage for maintenance plan item
         */
        includeObjectListLinkage?: boolean;
        /**
         * Include task list, operations (w/related objects and material needs) for the maintenance plan item
         */
        includeItemTaskList?: boolean;
    }): CancelablePromise<MaintenancePlanItem | ProblemDetails>;
    /**
     * Maintenance Plan Item- Update
     * ### Overview
     * Update maintenance plan item.
     *
     * ### Important information
     * This endpoint updates the direct properties of the maintenance plan item.
     * Other endpoints allow update of other parts of the maintenance plan item such as:
     *
     * `HTTP PATCH maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}?api-version=v1`
     *
     * `HTTP POST maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}?api-version=v1`
     *
     * `HTTP PATCH maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}?api-version=v1`
     *
     * `HTTP PUT maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}/maintenance-packages?api-version=v1`
     *
     * `HTTP POST maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}/material-needs?api-version=v1`
     *
     * `HTTP PATCH maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}/material-needs/{material-id}?api-version=v1`
     *
     * `HTTP DEL maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}/material-needs/{material-id}?api-version=v1`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateMaintenancePlanItem({ planId, itemId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * Update maintenance plan item body
         */
        requestBody: Array<MaintenancePlanItemJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance Plan Item status - Update
     * ### Overview
     * Update status maintenance plan item.
     *
     * ### Important information
     * This endpoint updates the direct properties of the task list of maintenance plan item. Other maintenance plan item may use the same task list and will be affected by this change.
     *
     * To find affected maintenance plans, use HTTP GET request /maintenance-plans?filter=by-task-id&task-id={task-id}
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateStatusOfMaintenancePlanItem({ planId, itemId, statusId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the status
         */
        statusId: string;
        /**
         * Update maintenance item status
         */
        requestBody: Array<MaintenancePlanItemStatusJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance Plan Item task list - Update
     * ### Overview
     * Update task list of maintenance plan item.
     *
     * ### Important information
     * This endpoint updates the direct properties of the task list of maintenance plan item. Other maintenance plan item may use the same task list and will be affected by this change.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateTaskListOfMaintenancePlanItem({ planId, itemId, taskId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * Update task list of maintenance plan item body
         */
        requestBody: Array<MaintenancePlanItemTaskListJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance Plan Item - Delete object list linkage
     * ### Overview
     * Delete maintenance item object linkage
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static deleteMaintenanceItemObjectLinkage({ planId, itemId, taskId, operationId, objectListLinkageId, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * The id of the operation within the task
         */
        operationId: string;
        /**
         * The id of the object linkage item
         */
        objectListLinkageId: string;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance Plan Item - Create object list linkage
     * ### Overview
     * Create maintenance item object linkage
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Success - Created . Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` to verify that data has been created.
     * @throws ApiError
     */
    static createMaintenanceItemObjectLinkage({ planId, itemId, taskId, operationId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * The id of the operation within the task
         */
        operationId: string;
        /**
         * Technical information update request to create
         */
        requestBody: ObjectLinkageCreate;
    }): CancelablePromise<ProblemDetails | string>;
    /**
     * Maintenance Plans - Search
     * ### Overview
     * Search for maintenance plans and maintenance plan items which are connected to a specific task list.
     *
     * This endpoint can be used to identify affected maintenance plans and maintenance plan items if an operation or a material in a task list will be updated or deleted.
     *
     * ### Filter: by-task-id
     * Find maintenance plans and maintenance plan items which are affected by changes in a task list operation.
     *
     * ### Examples
     * `/maintenance-plans?filter=by-task-id&task-id=T-10012713-02&api-version=v1`.
     *
     * ### Update version 1.8.0
     * Added isActive property.
     *
     * @returns MaintenancePlanForSearchByTask Success
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static searchMaintenancePlan({ filter, taskId, }: {
        /**
         * Filter to limit maintenance plans by
         */
        filter: 'by-task-id';
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
    }): CancelablePromise<Array<MaintenancePlanForSearchByTask> | ProblemDetails>;
    /**
     * Maintenance Plan Item- Set maintenance packages for operation
     * ### Overview
     * Sets the maintenance packages for a single operation.
     * As the endpoint is of type HTTP PUT, this replaces existing maintenance packages set for the operation.
     * Therefore, the client must pass all maintenance packages to be used for for the operation regardless if they have been modified.
     *
     * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
     *
     * Use the HTTP GET endpoint `/maintenance-strategies/{strategy-id}` for retrieving possible maintenance package for a maintenance strategy.
     *
     * ### Important information
     * Most end-users will not have authorizations to perform this update.
     * Clients must take precautions when changing the maintenance packages. The change will effect all maintenance plans which the maintenance plan item is assigned to.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static replaceMaintenancePackagesForOperation({ planId, itemId, taskId, operationId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * The id of the operation within the task list
         */
        operationId: string;
        /**
         * Operations to add to existing Work order
         */
        requestBody: MaintenancePackagePut;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance Plan Item - Update operation
     * ## Overview
     * Update operation for a maintenance plan item.
     *
     * ### Important information
     * Note: The operation belongs to a task list which may be shared with multiple maintenance plan items. Therefore, multiple maintenance plan items may be affected by the change.
     *
     * Use the HTTP GET endpoint `/maintenance-plans?filter=by-task-id&task-id={task-id}&api-version=v1` to view maintenance plans and maintenance plan items affected by this change.
     *
     * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
     *
     * ### Update for release v1.2.0
     * Added `calculationKey` as updatable field.
     *
     * ### Update release v1.5.0 + v1.11.0
     * Bugfix related to text for operation.
     *
     * ### Update release v1.14.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateOperationForMaintenancePlanItem({ planId, itemId, taskId, operationId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * The id of the operation within the task list
         */
        operationId: string;
        /**
         * Operations to add to existing Work order
         */
        requestBody: Array<TaskWorkOrderOperationJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance Plan Item - Remove operation from a task list
     * ## Overview
     * Remove an operation in a task list of a maintenance plan item.
     * ### Important information
     * Note: This action is allowed only for operations that are considered support activities and not operations that constitute concept activities.
     * The operation belongs to a task list which may be shared with multiple maintenance plan items. Therefore, multiple maintenance plan items may be affected by the change.
     * Use the HTTP GET endpoint `/maintenance-plans?filter=by-task-id&task-id={task-id}&api-version=v1` to view maintenance plans and maintenance plan items affected by this change.
     * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
     * ### Examples
     * `/maintenance-plans/1056916/items/10072940/tasks/T-10012713-1/operations/0010?api-version=v1`
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static removeOperationOfTaskListForMaintenancePlanItem({ planId, itemId, taskId, operationId, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * The id of the operation within the task list
         */
        operationId: string;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance Plan Item - Create operation
     * ## Overview
     * Create an operation for a maintenance plan item.
     *
     * In order for the operation to be part of the next maintenance plan call, the client must also assign a maintenance package to the newly created operation. This can be done via endpoint `/maintenance-plans/{plan-id}/items/{item-id}/tasks/{task-id}/operations/{operation-id}/maintenance-packages`.
     *
     * ### Important information
     * The operation belongs to a task list which may be shared with multiple maintenance plan items. Therefore, multiple maintenance plan items may be affected by the change.
     *
     * Use the HTTP GET endpoint `/maintenance-plans?filter=by-task-id&task-id={task-id}&api-version=v1` to view maintenance plans and maintenance plan items affected by this change.
     *
     * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
     *
     * `activityTypeId` is related to cost center and fiscal year, and there is currently no endpoint to get possible values.
     *
     * ### Update release v1.5.0
     * Bugfix related to text for operation.
     *
     * ### Update release v1.14.0
     * Added ability to create text with advanced formatting. See the heading [Resource text](#section/Modelling-of-resources/Resource-text) in the description for more info. This feature is controlled by a
     * configuration switch, which will initially be disabled, and when appropriate, enabled.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns TaskListOperationBasic Success
     * @throws ApiError
     */
    static createOperationForMaintenancePlanItem({ planId, itemId, taskId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plan item
         */
        taskId: string;
        /**
         * Operation to add to existing maintenance plan item
         */
        requestBody: TaskWorkOrderOperationCreate;
    }): CancelablePromise<ProblemDetails | TaskListOperationBasic>;
    /**
     * Maintenance Plan Item - Create operation material needs
     * ## Overview
     * Create material needs of operation for a maintenance plan item.
     *
     * ### Important information
     * Note: The operation belongs to a task list which may be shared with multiple maintenance plan items. Therefore, multiple maintenance plan items may be affected by the change.
     *
     * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @returns string Success - Created. Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` to get the updated data
     * The Location header can be used.
     *
     * @throws ApiError
     */
    static createMaterialNeedsOfOperationForMaintenancePlanItem({ planId, itemId, taskId, operationId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * The id of the operation within the task list
         */
        operationId: string;
        /**
         * Operations to add to existing Work order
         */
        requestBody: WorkOrderOperationMaterialNeedsCreate;
    }): CancelablePromise<ProblemDetails | string>;
    /**
     * Maintenance Plan Item - Update operation material needs
     * ## Overview
     * Update material needs of operation for a maintenance plan item.
     *
     * ### Important information
     * Note: The operation belongs to a task list which may be shared with multiple maintenance plan items. Therefore, multiple maintenance plan items may be affected by the change.
     *
     * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static updateMaterialNeedsOfOperationForMaintenancePlanItem({ planId, itemId, taskId, operationId, materialId, requestBody, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * The id of the operation within the task list
         */
        operationId: string;
        /**
         * The id of the material to modify
         */
        materialId: string;
        /**
         * Operations to add to existing Work order
         */
        requestBody: Array<TaskWorkOrderOperationMaterialNeedsJsonPatch>;
    }): CancelablePromise<ProblemDetails>;
    /**
     * Maintenance Plan Item - Remove material need of operation
     * ## Overview
     * Remove specific material need of operation for a maintenance plan item.
     *
     * ### Important information
     * Note: The operation belongs to a task list which may be shared with multiple maintenance plan items. Therefore, multiple maintenance plan items may be affected by the change.
     *
     * Use the HTTP GET endpoint `/maintenance-plans/{plan-id}/items/{item-id}?include-task-list=true` for retrieving current data and necessary ids.
     *
     * @returns ProblemDetails Response for other HTTP status codes
     * @throws ApiError
     */
    static removeMaterialNeedsOfOperationForMaintenancePlanItem({ planId, itemId, taskId, operationId, materialId, }: {
        /**
         * The id of the maintenance plan
         */
        planId: string;
        /**
         * The id of the maintenance plan item
         */
        itemId: string;
        /**
         * The id of the task within the maintenance plant item
         */
        taskId: string;
        /**
         * The id of the operation within the task list
         */
        operationId: string;
        /**
         * The id of the material to remove
         */
        materialId: string;
    }): CancelablePromise<ProblemDetails>;
}
