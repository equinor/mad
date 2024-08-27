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
    /**
     * Specifies the group of materials which have similar attributes
     */
    materialGroup?: string;
    /**
     * Account Number of Supplier
     */
    supplierId?: string;
    /**
     * Material Number Used by Vendor
     */
    vendorsMaterialNumber?: string;
    /**
     * Indicates for whom the material is to be ordered
     */
    requisitionerId?: string;
    /**
     * Specifies the point at which the material is to be unloaded
     */
    unloadingPoint?: string;
    /**
     * time in days it takes for the vendor to deliver the material
     */
    deliveryTimeInDays?: number;
    /**
     * Flag to indicate the delivery should be held at supplying base instead of immediately being delivered to its destination
     */
    holdDeliveryOnshore?: boolean;
    text?: string;
};

