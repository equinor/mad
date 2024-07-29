/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderMaterial = {
    reservationId: string;
    materialId: string;
    material: string;
    quantity: number;
    /**
     * *This field is deprecated, use `quantityUnitId` instead.
     * Typically is one of:
     * - PC - Pieces
     * - L - Liters
     * - KG - Kilograms
     * - M - Meters
     *
     * @deprecated
     */
    quantityUnit?: string;
    /**
     * Typically is any of:
     * - PC - Pieces
     * - L - Liters
     * - KG - Kilograms
     * - M - Meters
     *
     */
    quantityUnitId: string;
    location: string;
    /**
     * The final location of the material.
     * Extracted from `location`.
     *
     */
    finalLocation: string;
    /**
     * Temporary location of the material.
     * Extracted from `location`.
     *
     */
    temporaryLocation: string;
    /**
     * Flag to indicate the delivery should be held at supplying base instead of immediately being delivered to its destination
     */
    holdDeliveryOnshore: boolean;
    /**
     * Specifies the date and time for when the material is needed at its destination
     */
    requiredDatetime: string | null;
};

