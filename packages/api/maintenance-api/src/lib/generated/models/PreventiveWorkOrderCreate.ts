/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderCreateAbstract } from './WorkOrderCreateAbstract';
import type { WorkOrderOperationCreate } from './WorkOrderOperationCreate';

export type PreventiveWorkOrderCreate = (WorkOrderCreateAbstract & {
    title: string;
    workCenterId: string;
    workCenterPlantId: string;
    plantId: string;
    planningPlantId: string;
    equipmentId?: string;
    /**
     * Work order id as represented in external partner system
     */
    externalPartnerWorkOrderId?: string;
    additionalCostWBSId?: string;
    costNetworkId?: string;
    costNetworkOperationId?: string;
    operations?: Array<WorkOrderOperationCreate>;
});

