/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderMaterial } from './WorkOrderMaterial';

export type SubseaWorkOrderMaterial = (WorkOrderMaterial & {
    equipmentId: string;
    equipment: string;
    supplyingPlantId: string;
});

