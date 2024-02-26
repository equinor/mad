/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderCreateAbstract } from './WorkOrderCreateAbstract';
import type { WorkOrderOperationCreate } from './WorkOrderOperationCreate';

export type ProjectWorkOrderCreate = (WorkOrderCreateAbstract & {
    title: string;
    workCenterId: string;
    workCenterPlantId: string;
    plantId: string;
    planningPlantId: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    /**
     * If true, this project work order can only be used for time cost and is represented by a different work order type (PM20) in SAP
     */
    isTimeOnlyWorkOrder?: boolean;
    costNetworkId: string;
    costNetworkOperationId: string;
    operations: Array<WorkOrderOperationCreate>;
});

