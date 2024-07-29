/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenancePlanItemCall } from './MaintenancePlanItemCall';
import type { MaintenancePlanItemSimple } from './MaintenancePlanItemSimple';

export type ConceptActivities = (MaintenancePlanItemSimple & {
    activityCode: string | null;
    activityGroupText: string | null;
    /**
     * The next planned call for this item with status "Scheduled  Hold"
     *
     */
    plannedDate: string | null;
    /**
     * Short code representing the cycle length. Example values for maintenance strategy0 `1101-1` 01,03,06,12,24,48,96,X5,02,04,08,16,32,64,X2,09,18,36,72,X3,15,30,60,X1,X6,X4,X7
     */
    cycleId: string | null;
    /**
     * Name of cycle
     */
    cycle: string | null;
    /**
     * Cycle
     */
    cycleIntervalId: string | null;
    /**
     * Compliance Status
     */
    complianceStatus: string | null;
    calls?: Array<MaintenancePlanItemCall> | null;
});

