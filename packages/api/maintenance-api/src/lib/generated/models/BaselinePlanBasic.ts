/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BaselinePlanBasic = {
    /**
     * Unique id of baseline plan
     */
    baselinePlanId?: string;
    /**
     * Title of the baseline plan
     */
    baselinePlan?: string;
    /**
     * The planning plant the plan belongs to
     */
    planningPlantId?: string;
    planPeriodStartDate?: string | null;
    planPeriodEndDate?: string | null;
    /**
     * The duration formatted according to RFC3339
     */
    planPeriodDuration?: string;
    /**
     * Is the baseline approved ref OM104.01.06 - Prepare Work order plan
     */
    isApproved?: boolean;
    /**
     * Is the baseline currently the active one for the planning plant
     */
    isCurrentPlan?: boolean;
};

