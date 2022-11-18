/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePlanItem } from './MaintenancePlanItem';

export type MaintenancePlan = {
    maintenancePlanId: string;
    maintenancePlan: string;
    /**
     * The maintenance plan is active if it is not deactivated or deleted
     */
    isActive: boolean;
    /**
     * Items for the Maintenance Plan
     */
    items?: Array<MaintenancePlanItem>;
};

