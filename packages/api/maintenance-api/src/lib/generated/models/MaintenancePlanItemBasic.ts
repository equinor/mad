/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePlanItemSimple } from './MaintenancePlanItemSimple';

export type MaintenancePlanItemBasic = (MaintenancePlanItemSimple & {
    maintenanceActivityTypeId: string;
    maintenanceActivityType: string;
    /**
     * Priority:
     * * `L` - Low priority
     * * `M` - Medium priority
     * * `H` - High priority
     * * `U` - Unprioritized
     * * `D` - Done
     *
     */
    priorityId: 'L' | 'M' | 'H' | 'U' | 'D' | null;
});

