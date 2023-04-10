/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TagJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: "replace";
    /**
     * Path indicating the property to be impacted by the operation
     */
    path:
        | "/tagId"
        | "/tagPlantId"
        | "/parentTagId"
        | "/tag"
        | "/tagCategoryId"
        | "/systemId"
        | "/locationId"
        | "/workCenterId"
        | "/workCenterPlantId"
        | "/planningPlantId"
        | "/plannerGroupId"
        | "/costWBSId"
        | "/startUpDate"
        | "/endOfUseDate"
        | "/catalogProfileId"
        | "/maintenanceConceptId"
        | "/linearData/startPoint"
        | "/linearData/endPoint"
        | "/linearData/linearUnitOfMeasure";
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Path specific information:
     * - /tagId
     * - /tagPlantId
     * - /parentTagId
     * - /tag
     * - /tagCategoryId
     * - /systemId
     * - /locationId
     * - /workCenterId
     * - /workCenterPlantId
     * - /planningPlantId
     * - /plannerGroupId
     * - /costWBSId
     * - /startUpDate
     * - /endOfUseDate
     * - /catalogProfileId
     * - /maintenanceConceptId
     * - /linearData/startPoint
     * - /linearData/endPoint
     * - /linearData/linearUnitOfMeasure
     *
     */
    value: string;
};
