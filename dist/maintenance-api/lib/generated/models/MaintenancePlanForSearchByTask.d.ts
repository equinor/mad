import type { MaintenancePlanItemBasic } from './MaintenancePlanItemBasic';
export type MaintenancePlanForSearchByTask = {
    maintenancePlanId: string;
    maintenancePlan: string;
    /**
     * The maintenance plan is active if it is not deactivated or deleted
     */
    isActive: boolean;
    /**
     * Items for the Maintenance Plan
     */
    items?: Array<MaintenancePlanItemBasic>;
};
