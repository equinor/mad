/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderOperationJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/isCompleted' | '/actualPercentageComplete' | '/schedulingStartConstraintId' | '/schedulingStartConstraintDateTime' | '/schedulingFinishConstraintId' | '/schedulingFinishConstraintDateTime' | '/systemCondition' | '/operationId' | '/title' | '/text' | '/workCenterId' | '/workCenterPlantId' | '/standardTextTemplate' | '/plannedWorkHours' | '/plannedWorkDuration' | '/capacityCount' | '/calculationKey';
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
     * /plannedWorkHours && /plannedWorkDuration:
     *
     * Duration as defined in ISO8601
     *
     * Duration can exclusively be either in days or hours and minutes. A combination of these will return an error.
     *
     * The `unit` field in the ERP-system, will be set based on the input provided.
     *
     * Some accepted examples: `PT3H30M`, `P1D`, `PT1H30M`
     * Some rejected examples: `P1DT3H30M`, `PT1H30M30S`
     *
     */
    value: (string | boolean | number);
};

