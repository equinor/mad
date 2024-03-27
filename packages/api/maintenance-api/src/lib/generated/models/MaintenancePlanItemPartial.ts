/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePlanItemBasic } from './MaintenancePlanItemBasic';
import type { MaintenancePlanItemCall } from './MaintenancePlanItemCall';

export type MaintenancePlanItemPartial = (MaintenancePlanItemBasic & {
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
    calls?: Array<MaintenancePlanItemCall>;
});

