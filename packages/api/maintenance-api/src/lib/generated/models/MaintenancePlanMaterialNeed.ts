/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenancePlanMaterialNeed = {
    /**
     * The material number there is a need for
     */
    materialId: string;
    material: string;
    quantity: number;
    /**
     * The unit for the quantity such (as `PC` = Pieces and `L`= Liter)
     */
    quantityUnit: string;
};

