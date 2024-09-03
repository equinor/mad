/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderOperationSimple = {
    /**
     * Internal id of operation
     */
    operationId: string;
    /**
     * Id of operation user is familiar with
     */
    operation: string;
    title: string;
    workCenterId: string;
    workCenterPlantId: string;
    text: string | null;
    standardTextTemplate: string;
    isCompleted: boolean;
    isExcludedFromWorkOrderPlan: boolean;
    /**
     * Required process conditions for each operation
     */
    systemCondition: string;
    /**
     * Duration as defined in ISO8601
     */
    plannedWorkHours: string | null;
    /**
     * Duration as defined in ISO8601
     */
    actualWorkHours: string | null;
    /**
     * Represents progress reported through technical feedback solution. If Work order is completed, the value is 100
     */
    actualPercentageComplete: number;
    /**
     * Number of capacity from work center required for the operation
     */
    capacityCount: number;
    /**
     * Planned duration for operation is based on plannedManHours and capacityCount. Property format is as defined in ISO8601
     */
    plannedDuration: string | null;
    /**
     * Operation is scheduled outside of the normal scheduling engine in Equinor ERP system SAP
     */
    isScheduledExternally: boolean;
    earliestStartDateTime: string | null;
    earliestFinishDateTime: string | null;
    /**
     * Constraint: * `MSO` - Must start on * `SNET` - Start no earlier than * `SNLT` - Start no later than * `SFRP` - Start from resource planning
     *
     */
    schedulingStartConstraintId: 'MSO' | 'SNET' | 'SNLT' | 'SFRP' | null;
    schedulingStartConstraintDateTime: string | null;
    /**
     * Constraint: * `MFO` - Must finish on date * `FNET` - Finish no earlier than * `FNLT` - Finish no later than * `FFC` - Finish from confirmation
     *
     */
    schedulingFinishConstraintId: 'MFO' | 'FNET' | 'FNLT' | 'FFC' | null;
    schedulingFinishConstraintDateTime: string | null;
    /**
     * Calculation key defines which of the fields plannedWorkHours,capacityCount and plannedDuration are derived based on the values of the two others. If calculation key is `CALC_KEY_MANUAL`, all fields are filled in manually.
     */
    calculationKey: 'CALC_KEY_MANUAL' | 'CALC_KEY_DURATION' | 'CALC_KEY_PLANNED_HOURS' | 'CALC_KEY_CAPACITY' | null;
    tagId?: string | null;
    tagPlantId?: string;
    isServiceOperation?: boolean;
};

