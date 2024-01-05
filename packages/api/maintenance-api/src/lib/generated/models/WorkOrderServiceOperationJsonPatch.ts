/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderServiceOperationJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/isServiceOperation' | '/isCompleted' | '/schedulingStartConstraintId' | '/schedulingStartConstraintDateTime' | '/schedulingFinishConstraintId' | '/schedulingFinishConstraintDateTime' | '/systemCondition' | '/operationId' | '/title' | '/text' | '/workCenterId' | '/workCenterPlantId' | '/standardTextTemplate' | '/scopeOfWork' | '/quantity' | '/unit' | '/materialGroup' | '/purchasingGroup' | '/purchasingOrganization' | '/purchaseOrderId' | '/purchaseOrderItemId' | '/service';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * /schedulingStartConstraintId allowed values:
     * - `MSO` - Must start on
     * - `SNET` - Start no earlier than
     * - `SNLT` - Start no later than
     *
     * /schedulingFinishConstraintId allowed values:
     * - `MFO ` - Must finish on
     * - `FNET` - Finish no earlier than
     * - `FNLT` - Finish no later than
     *
     */
    value: (string | boolean | number);
};

