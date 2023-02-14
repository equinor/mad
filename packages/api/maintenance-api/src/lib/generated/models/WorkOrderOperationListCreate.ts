/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderOperationListCreate = {
    /**
     * Id of operation user is familiar with
     */
    operation: string;
    title: string;
    workCenterId?: string;
    workCenterPlantId?: string;
    text?: string;
    /**
     * Duration as defined in ISO8601
     */
    plannedWorkDuration?: string;
    /**
     * Duration as defined in ISO8601
     */
    plannedWorkHours?: string;
    /**
     * Number of capacity from work center required for the operation
     */
    capacityCount?: number;
    /**
     * Calculation key defines which of the fields plannedWorkHours,capacityCount and plannedDuration are derived based on the values of the two others. If calculation key is `CALC_KEY_MANUAL`, all fields are filled in manually.
     */
    calculationKey?: 'CALC_KEY_MANUAL' | 'CALC_KEY_DURATION' | 'CALC_KEY_PLANNED_HOURS' | 'CALC_KEY_CAPACITY' | null;
};

