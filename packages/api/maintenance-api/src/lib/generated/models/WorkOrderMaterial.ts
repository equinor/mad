/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkOrderMaterialForAddMaterialRespone } from './WorkOrderMaterialForAddMaterialRespone';

export type WorkOrderMaterial = (WorkOrderMaterialForAddMaterialRespone & {
    /**
     * Specifies the recipient for whom the material is destined
     */
    goodsRecipientId?: string;
    /**
     * Specifies the point at which the material is to be unloaded
     */
    unloadingPoint?: string;
    price?: number;
    priceCurrency?: string;
    /**
     * Key for a buyer or a group of buyers, who is/are responsible for certain purchasing activities
     */
    purchasingGroup?: string;
    /**
     * Flag to indicate if the delivery is complete
     */
    deliveryComplete: boolean;
});

