/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePackageBasic } from './MaintenancePackageBasic';

export type MaintenanceStrategy = {
    /**
     * The maintenance strategy id used
     */
    maintenanceStrategyId: string;
    /**
     * The maintenance strategy used
     */
    maintenanceStrategy: string;
    /**
     * Maintenance packages defined for the maintenance strategy
     */
    maintenancePackages: Array<MaintenancePackageBasic>;
};

