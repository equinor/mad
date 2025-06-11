/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SafetyMeasure } from './SafetyMeasure';
import type { Service } from './Service';
import type { WorkOrderMaterial } from './WorkOrderMaterial';

export type ServiceOperation = {
    /**
     * Internal id of operation
     */
    operationId?: string;
    /**
     * Id of operation user is familiar with
     */
    operation?: string;
    title?: string;
    workCenterId?: string;
    workCenterPlantId?: string;
    text?: string | null;
    standardTextTemplate?: string;
    isCompleted?: boolean;
    isExcludedFromWorkOrderPlan?: boolean;
    /**
     * Required process conditions for each operation
     */
    systemCondition?: string;
    materialGroup?: string;
    purchasingGroup?: string;
    purchasingOrganization?: string;
    purchaseOrderId?: string;
    purchaseOrderItemId?: string;
    isServiceOperation?: boolean;
    scopeOfWork?: string;
    agreement?: string;
    agreementItem?: string;
    requisitionerId?: string;
    /**
     * Duration as defined in ISO8601
     */
    plannedWorkHours?: string | null;
    actualWorkHours?: string | null;
    /**
     * Planned duration for operation is based on plannedManHours and capacityCount. Property format is as defined in ISO8601
     */
    plannedDuration?: string | null;
    earliestStartDateTime?: string | null;
    earliestFinishDateTime?: string | null;
    /**
     * Number of capacity from work center required for the operation
     */
    capacityCount?: number;
    /**
     * Safety measures for the work order operation
     */
    safetyMeasures?: Array<SafetyMeasure>;
    /**
     * Calculation key defines which of the fields plannedWorkHours,capacityCount and plannedDuration are derived based on the values of the two others. If calculation key is `CALC_KEY_MANUAL`, all fields are filled in manually.
     */
    calculationKey?: 'CALC_KEY_MANUAL' | 'CALC_KEY_DURATION' | 'CALC_KEY_PLANNED_HOURS' | 'CALC_KEY_CAPACITY' | null;
    /**
     * Indicates whether the object has communications or not.
     */
    hasCommunication?: boolean;
    services?: Array<Service>;
    materials?: Array<WorkOrderMaterial> | null;
};

