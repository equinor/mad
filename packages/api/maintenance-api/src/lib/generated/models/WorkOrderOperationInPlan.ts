/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderOperationInPlan = {
    /**
     * Internal id of operation
     */
    operationId: string;
    /**
     * Id of operation user is familiar with
     */
    operation: string;
    /**
     * Id of superior operation. If the operation is a top level operation, this field will be empty.
     */
    superiorOperationId?: string | null;
    title: string;
    /**
     * Text-based information from the planner
     */
    planNotes: string;
    /**
     * Operation is part of a baseline plan
     */
    inBaselinePlan: boolean;
    workCenterId: string;
    workCenterPlantId: string;
    standardTextTemplate: string;
    isCompleted: boolean;
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
     * Indicator for if the operation has material
     */
    hasMaterial?: boolean;
};

