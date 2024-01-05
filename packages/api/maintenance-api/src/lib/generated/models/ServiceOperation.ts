/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Service } from './Service';

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
    isEquipmentRental?: boolean;
    services?: Array<Service>;
};

