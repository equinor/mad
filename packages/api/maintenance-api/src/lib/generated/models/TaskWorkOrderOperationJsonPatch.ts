/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskWorkOrderOperationJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/operationId' | '/workCenterId' | '/workCenterPlantId' | '/title' | '/text' | '/capacityCount' | '/standardTextTemplate' | '/systemCondition' | '/plannedDuration' | '/plannedWorkHours' | '/calculationKey';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Calculation key defines which of the fields plannedWorkHours,capacityCount and plannedDuration are derived based on the values of the two others.
     *
     * /calculationKey allowed values:
     * - `CALC_KEY_MANUAL` - all fields are filled in manually
     * - `CALC_KEY_DURATION` - plannedDuration is calculated
     * - `CALC_KEY_PLANNED_HOURS` - plannedWorkHours is calculated
     * - `CALC_KEY_CAPACITY` - capacityCount is calculated
     *
     */
    value: string;
};

