export type MaintenancePlanMaterialNeed = {
    /**
     * The material number there is a need for
     */
    materialId: string;
    material: string;
    quantity: number;
    /**
     * The unit for the quanity such (as `PC` = Pieces and `L`= Liter)
     */
    quantityUnit: string;
};
