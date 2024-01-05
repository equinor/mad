/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderCreateAbstract } from './WorkOrderCreateAbstract';
import type { WorkOrderOperationCreate } from './WorkOrderOperationCreate';

export type SASChangeWorkOrderCreate = (WorkOrderCreateAbstract & {
    tagId: string | null;
    tagPlantId: string;
    title: string;
    workCenterId: string;
    workCenterPlantId: string;
    plantId: string;
    planningPlantId: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    costNetworkId?: string;
    costNetworkOperationId?: string;
    operations: Array<WorkOrderOperationCreate>;
});

