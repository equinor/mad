/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreventiveWorkOrderJsonPatch = Array<{
    /**
     * JSON Patch operation according to RFC6902.
     *
     * Operation `replace` is suitable for the following properties:
     * - `/workCenterId`
     * - `/workCenterPlantId`
     * - `tagId`
     * - `/tagPlantId`
     * - `/basicStartDateTime`
     * - `/basicEndDateTime`
     * - `/locationId`
     * - `/systemId`
     * - `/externalPartnerWorkOrderId`
     * - `/title`
     * - `/plannerGroupId`
     *
     * Operation `append` is suitable for the following properties:
     * - `/text`
     *
     * Operation `prepend` is suitable for the following properties:
     * - `/text`
     *
     */
    op?: 'append' | 'replace' | 'prepend';
    /**
     * The property to be updated by the non-trivial patch operation.
     * `/workCenterId` and `/workCenterPlantId` must be provided in same request.
     * `tagId`,`/tagPlantId` must be provided in same request.
     *
     */
    path?: '/text' | '/workCenterId' | '/workCenterPlantId' | '/tagId' | '/tagPlantId' | '/basicStartDateTime' | '/basicEndDateTime' | '/revisionId' | '/sortField' | '/locationId' | '/systemId' | '/externalPartnerWorkOrderId' | '/title' | '/plannerGroupId';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     */
    value?: string;
}>;
