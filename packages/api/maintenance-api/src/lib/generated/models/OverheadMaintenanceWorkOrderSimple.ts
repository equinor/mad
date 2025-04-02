/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OverheadMaintenanceWorkOrderSimple = {
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
    failureReportId: string;
    plantId: string;
    planningPlantId: string;
    plannerGroupId: string;
    /**
     * Active statuses for the overhead maintenance order with space as separating character
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
    /**
     * Date and time of when the Work order was changed
     */
    changedDateTime: string | null;
    /**
     * Field used to assist in grouping/sorting Work orders. Unstructured field used non-consistently between plants
     */
    sortField: string;
    /**
     * Priority of Work order
     * * `L` - Low priority
     * * `M` - Medi. priority
     * * `H` - High priority
     * * `U` - Unprioritized
     * * null - No priority assigned
     *
     */
    priorityId: 'L' | 'M' | 'H' | 'U' | null;
    /**
     * Indicates whether the Work Order is open or not.
     */
    isOpen: boolean;
};

