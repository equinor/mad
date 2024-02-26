/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePackageSimple } from './MaintenancePackageSimple';

export type MaintenancePackageBasic = (MaintenancePackageSimple & {
    /**
     * Duration for cycle (formatted accordingly to RFC3339)
     */
    cycleDuration: string | null;
    /**
     * Determines the maintenance package place in the hierarchy. If two packages with the same hierarchy are due at the same time, then both packages are performed. If the two packages have different hierarchies, only the package with the higher hierarchy is performed.
     */
    hierarchyId: string;
});

