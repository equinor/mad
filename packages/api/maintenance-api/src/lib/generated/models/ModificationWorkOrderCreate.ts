/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderCreateAbstract } from './WorkOrderCreateAbstract';
import type { WorkOrderOperationCreate } from './WorkOrderOperationCreate';

export type ModificationWorkOrderCreate = (WorkOrderCreateAbstract & {
    title: string;
    workCenterId: string;
    workCenterPlantId: string;
    plantId: string;
    planningPlantId: string;
    /**
     * Maintenance record to link to the modification work order (usually the maintenance record is of type modification-proposal)
     */
    modificationProposalId: string;
    /**
     * Work order id as represented in external partner system
     */
    externalPartnerWorkOrderId?: string;
    /**
     * The primary cost wbs is typically resolved from the provided tag, but for modification work orders it is required to have an additional cost wbs in place before the work order can be set to status `REL - Released`
     */
    additionalCostWBSId?: string;
    operations?: Array<WorkOrderOperationCreate>;
});

