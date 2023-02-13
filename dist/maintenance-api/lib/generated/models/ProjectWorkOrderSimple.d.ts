export type ProjectWorkOrderSimple = {
    workOrderId: string;
    tagId: string | null;
    tagPlantId: string;
    tag: string;
    title: string;
    /**
     * If true, this project work order can only be used for time cost and is represented by a different work order type (PM20) in SAP
     */
    isTimeOnlyWorkOrder: boolean;
    workCenterId: string;
    workCenterPlantId: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    /**
     * Deprecated 01.2021 - Use locationId instead
     * @deprecated
     */
    areaId: string;
    systemId: string;
    plantId: string;
    planningPlantId: string;
    plannerGroupId: string;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    maintenanceTypeId: string;
    maintenanceType: string;
    /**
     * An identifier to the revision (shutdown or campaign work) this work order is related to
     */
    revisionId: string;
    /**
     * Name of the revision (shutdown or campaign work) this work order is related to
     */
    revision: string;
    basicStartDateTime: string | null;
    basicEndDateTime: string | null;
    createdDateTime: string | null;
    changedDateTime: string | null;
    costWBSId: string;
    projectId: string;
    costNetworkId: string;
    costNetworkOperationId: string;
    /**
     * Field used to assist in grouping/sorting Work orders. Unstructured field used non-consistently between plants
     */
    sortField: string;
};
