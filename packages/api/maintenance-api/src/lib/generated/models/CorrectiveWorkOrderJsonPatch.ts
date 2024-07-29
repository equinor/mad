/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CorrectiveWorkOrderJsonPatch = Array<{
    /**
     * JSON Patch operation according to RFC6902.
     *
     * Operation `replace` is suitable for the following properties: `/text`, `/workCenterId`, `/workCenterPlantId`, `/tagId`, `/tagPlantId`, `/basicStartDateTime`, `/basicEndDateTime`, `/revisionId`, `/sortField`, `/locationId`, `/systemId`, `/title`, `/plannerGroupId`, `/costs`, `/additionalCostWBSId`, `/costWBSId`, `/priorityId`.
     * Operation `append` is suitable for the following properties: `/text`
     *
     */
    op?: 'append' | 'replace';
    /**
     * The property to be updated by the non-trivial patch operation.
     * `/workCenterId` and `/workCenterPlantId` must be provided in same request.
     * `/tagId`,`/tagPlantId` must be provided in same request.
     *
     */
    path?: '/text' | '/workCenterId' | '/workCenterPlantId' | '/tagId' | '/tagPlantId' | '/basicStartDateTime' | '/basicEndDateTime' | '/revisionId' | '/sortField' | '/locationId' | '/systemId' | '/title' | '/plannerGroupId' | '/costs' | '/additionalCostWBSId' | '/costWBSId' | '/priorityId';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     */
    value?: string;
}>;
