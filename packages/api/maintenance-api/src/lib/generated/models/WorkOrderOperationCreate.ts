/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderOperationCreate = {
    /**
     * Id of operation user is familiar with
     */
    operation: string;
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
     * Duration can exclusively be either in days or hours and minutes. A combination of these will return an error.
     * The `unit` field in the ERP-system, will be set based on the input provided.
     * Some accepted examples: `PT3H30M`, `P1D`, `PT1H30M` Some rejected examples: `P1DT3H30M`, `PT1H30M30S`
     *
     */
    plannedWorkDuration?: string;
    /**
     * Duration as defined in ISO8601
     * Duration can exclusively be either in days or hours and minutes. A combination of these will return an error.
     * The `unit` field in the ERP-system, will be set based on the input provided.
     * Some accepted examples: `PT3H30M`, `P1D`, `PT1H30M` Some rejected examples: `P1DT3H30M`, `PT1H30M30S`
     *
     */
    plannedWorkHours?: string;
    capacityCount?: number;
    /**
     * Constraint: * `MSO` - Must start on * `SNET` - Start no earlier than * `SNLT` - Start no later than
     *
     */
    schedulingStartConstraintId?: 'MSO' | 'SNET' | 'SNLT';
    schedulingStartConstraintDateTime?: string;
    /**
     * Constraint: * `MFO` - Must finish on date * `FNET` - Finish no earlier than * `FNLT` - Finish no later than
     *
     */
    schedulingFinishConstraintId?: 'MFO' | 'FNET' | 'FNLT';
    schedulingFinishConstraintDateTime?: string;
    isScheduledExternally?: boolean;
    earliestStartDateTime?: string;
    earliestFinishDateTime?: string;
    /**
     * Standard text template identifier
     */
    standardTextTemplate?: string;
    isExcludedFromWorkOrderPlan?: boolean;
    /**
     * Required process conditions for each operation
     */
    systemCondition?: string;
};

