/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderCreateAbstract } from './WorkOrderCreateAbstract';
import type { WorkOrderOperationCreate } from './WorkOrderOperationCreate';

export type CorrectiveWorkOrderCreate = (WorkOrderCreateAbstract & {
    title: string;
    workCenterId: string;
    workCenterPlantId: string;
    plantId: string;
    planningPlantId: string;
    failureReportId: string;
    /**
     * Work order id as represented in external partner system
     */
    externalPartnerWorkOrderId?: string;
    operations?: Array<WorkOrderOperationCreate>;
});

