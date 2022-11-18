/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePlanEquipment } from './MaintenancePlanEquipment';
import type { MaintenancePlanItemBasic } from './MaintenancePlanItemBasic';
import type { MaintenancePlanItemCall } from './MaintenancePlanItemCall';
import type { MaintenancePlanItemTask } from './MaintenancePlanItemTask';

export type MaintenancePlanItem = (MaintenancePlanItemBasic & {
    /**
     * The maintenance strategy id used
     */
    maintenanceStrategyId: string;
    /**
     * The maintenance strategy used
     */
    maintenanceStrategy: string;
    /**
     * Status for maintenance item. Will have either PREP (Job preparation), PRCO (Preparation completed) or RDEX (Ready for execution). May also have PLAN (Planning/Scheduling)
     */
    status: string;
    objectList?: Array<MaintenancePlanEquipment>;
    calls?: Array<MaintenancePlanItemCall>;
    taskList?: MaintenancePlanItemTask;
});

