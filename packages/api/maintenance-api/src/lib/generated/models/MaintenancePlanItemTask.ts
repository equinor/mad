/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskWorkOrderOperation } from './TaskWorkOrderOperation';

export type MaintenancePlanItemTask = {
    /**
     * SAP internal id of the task list (combination of multiple fields)
     */
    taskListId: string;
    /**
     * The name of the task list
     */
    taskList: string;
    /**
     * Type of task list. Example values: `T` = Task List for Funct. Location, `Q` = Inspection Plan, `E` = Equipment Task List, `A` = General maintenance task list
     */
    taskListTypeId: string;
    planningPlantId: string;
    /**
     * Status of the task list `1` = Created, `2` = Released for order, `3` = Released for costing, `4` = Released f(general), `5` = Maintenance Concept (Plant)
     */
    statusId: string;
    changedDateTime?: string;
    operations: Array<TaskWorkOrderOperation>;
};

