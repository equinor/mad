/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubseaWorkOrderSimple = {
    workOrderId: string;
    tagId: string | null;
    tagPlantId: string;
    tag: string;
    title: string;
    /**
     * In 2020 the internal work order type for Subsea work orders changed in Equinor's ERP system. If this property is true, the work order used the obsolete work order type and should not be updated.
     */
    isObsoleteSubseaWorkOrderType: boolean;
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
     * * `L` - Low priority
     * * `M` - Medi. priority
     * * `H` - High priority
     * * `U` - Unprioritized
     * * null - No priority assigned
     *
     */
    priorityId: 'L' | 'M' | 'H' | 'U' | null;
    /**
     * Criteria used by Equinor in CMR (Critical Maintenance Report):
     * Corrective work orders where at least one item in the list or primary tag:
     *
     * - has the error classification "Dead" or "Seriously ill" or
     * - has a "High" consequence classification for HSE or Production (one table for each) or
     * - has received a "Hidden failure" code.
     *
     */
    cmrIndicator: boolean;
    /**
     * Indicates whether the Work Order is open or not.
     */
    isOpen: boolean;
};

