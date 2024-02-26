/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TechnicalClarificationJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/personResponsibleEmail' | '/plannerGroupId' | '/title' | '/text' | '/priorityId' | '/requiredEndDate' | '/sortField';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Path specific information:
     * - /title - max-length 40 characters
     * - /personResponsibleEmail - Must be in the form `<shortname>@equinor.com`
     * - /plannerGroupId - Must exist in for the planningPlantId of the maintenance record
     * - /priorityId - Must be `H` for High, `M` for Medium or `L` for Low priority.
     *
     */
    value: string;
};

