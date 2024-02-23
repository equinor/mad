/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderMaterialAdd = {
    materialId?: string;
    equipmentId?: string;
    material?: string;
    quantity: number;
    /**
     * Commonly used values:
     * PC - Pieces
     * L - Liters
     * KG - Kilograms
     * M - Meters
     *
     */
    quantityUnitId: string;
    /**
     * Specifies the date and time for when the material is needed at its destination
     */
    requiredDatetime?: string | null;
    price?: number;
    priceUnitId?: string;
    /**
     * Specifies the key which is responsible for procurement of material
     */
    purchasingGroup?: string;
    goodsRecipient?: string;
    unloadingPoint?: string;
    /**
     * Specifies the group of materials which have similar attributes
     */
    materialGroup?: string;
};

