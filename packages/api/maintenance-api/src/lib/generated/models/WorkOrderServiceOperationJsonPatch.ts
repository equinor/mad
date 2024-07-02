/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServiceJsonPatch } from './ServiceJsonPatch';

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
     * /service path only allows for the `replace` operation, but it serves as either an `add` or a `replace` operation, depending upon if a service with the given `lineId` exists or not.
     * - If a service with the given `lineId` is not found, it will be added.
     * - If a service with the given `lineId` is  found, it will be replaced with the `service` object.
     *
     */
    value: (string | boolean | number | ServiceJsonPatch);
};

