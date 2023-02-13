export type CorrectiveWorkOrderSimple = {
    workOrderId: string;
    tagId: string | null;
    tagPlantId: string;
    tag: string;
    title: string;
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
    failureReportId: string;
    plantId: string;
    planningPlantId: string;
    plannerGroupId: string;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    maintenanceTypeId: string;
    maintenanceType: string;
    requiredEndDate: string | null;
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
    /**
     * Field used to assist in grouping/sorting Work orders. Unstructured field used non-consistently between plants
     */
    sortField: string;
    /**
     * Priority of Work order
     * * `L` - Low <= 6 months
     * * `M` - Medium <= 45 days
     * * `H` - High <= 5 days
     * * `U` - Unprior <= 12 months
     * * `D` - Done
     *
     */
    priorityId: 'L' | 'M' | 'H' | 'U' | 'D';
};
