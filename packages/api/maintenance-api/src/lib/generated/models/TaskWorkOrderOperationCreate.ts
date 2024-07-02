/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskWorkOrderOperationCreate = {
    /**
     * Operation
     */
    operationId?: string;
    title: string;
    workCenterId?: string;
    workCenterPlantId?: string;
    text?: string;
    /**
     * Calculation key defines which of the fields plannedWorkHours,capacityCount and plannedDuration are derived based on the values of the two others. If calculation key is `CALC_KEY_MANUAL`, all fields are filled in manually.
     */
    calculationKey?: 'CALC_KEY_MANUAL' | 'CALC_KEY_DURATION' | 'CALC_KEY_PLANNED_HOURS' | 'CALC_KEY_CAPACITY' | null;
    /**
     * Duration as defined in ISO8601
     */
    plannedWorkHours?: string | null;
    /**
     * Number of capacity from work center required for the operation
     */
    capacityCount?: number;
    /**
     * Planned duration for operation is based on plannedManHours and capacityCount. Property format is as defined in ISO8601
     */
    plannedDuration?: string | null;
    /**
     * Number of times the processing of operation is repeated during order processing
     */
    executionFactor?: number;
    standardTextTemplate?: string;
    /**
     * Required process conditions for each operation
     */
    systemCondition?: string;
    /**
     * Used to the describe the activity type produced by the related cost center
     */
    activityTypeId?: string;
};

