/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EstimatedCosts = {
    /**
     * Cost Category ID defines the estimated, planned and actual costs for different
     */
    costCategoryId?: 'COST_CUTBACK' | 'COST_EXTERNAL_SERVICES' | 'COST_INTERNAL_SERVICES' | 'COST_INTERNAL_PERSONELL' | 'COST_MATERIALS_OF_CONSUMPTION' | 'COST_OTHER_EXPENCES' | 'COST_REPAIR_AND_MAINTENANCE';
    costCategory?: string;
    estimatedCosts?: number;
    plannedCosts?: number;
    actualCosts?: number;
    costsCurrency?: string;
};

