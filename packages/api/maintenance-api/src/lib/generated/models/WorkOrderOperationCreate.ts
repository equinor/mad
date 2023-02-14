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
     */
    plannedWorkDuration?: string;
    /**
     * Duration as defined in ISO8601
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
};

