/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TagJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/parentTagId' | '/tag' | '/systemId' | '/locationId' | '/workCenterId' | '/workCenterPlantId' | '/planningPlantId' | '/plannerGroupId' | '/costWBSId' | '/startUpDate' | '/area' | '/endOfUseDate' | '/catalogProfileId' | '/maintenanceConceptId' | '/activeStatusId' | '/linearData/startPoint' | '/linearData/endPoint' | '/linearData/linearUnitOfMeasure';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Path specific information:
     * The following is only valid for pipeline tags (tagCategoryId = `U`)
     * - /linearData/startPoint
     * - /linearData/endPoint
     * - /linearData/linearUnitOfMeasure
     *
     */
    value: string;
};

