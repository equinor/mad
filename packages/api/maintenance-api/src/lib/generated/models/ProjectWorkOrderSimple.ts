/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
    /**
     * Date and time of when the Work order was changed
     */
    changedDateTime: string | null;
    costWBSId: string;
    projectId: string;
    costNetworkId: string;
    costNetworkOperationId: string;
    /**
     * Field used to assist in grouping/sorting Work orders. Unstructured field used non-consistently between plants
     */
    sortField: string;
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

