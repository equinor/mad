/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderMaterialJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/finalLocation' | '/temporaryLocation' | '/price' | '/priceUnitId' | '/purchasingGroup' | '/goodsRecipient' | '/unloadingPoint' | '/materialGroup' | '/supplierId' | '/vendorsMaterialNumber' | '/deliveryTimeInDays' | '/requisitionerId' | '/holdDeliveryOnshore' | '/text' | '/operationId' | '/quantity' | '/requiredDatetime';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     */
    value: string;
};

