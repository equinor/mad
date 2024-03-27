/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePackageSimple } from './MaintenancePackageSimple';
import type { MaintenancePlanEquipment } from './MaintenancePlanEquipment';
import type { MaintenancePlanMaterialNeed } from './MaintenancePlanMaterialNeed';
import type { TaskListOperationBasic } from './TaskListOperationBasic';

export type TaskWorkOrderOperation = (TaskListOperationBasic & {
    objectListLinkage?: Array<MaintenancePlanEquipment>;
    /**
     * Shows the active maintenance packages for this operation
     */
    maintenancePackages: Array<MaintenancePackageSimple>;
    /**
     * Material needs for this operation
     */
    materialNeeds: Array<MaintenancePlanMaterialNeed>;
});

