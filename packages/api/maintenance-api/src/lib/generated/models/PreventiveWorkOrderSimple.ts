/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreventiveWorkOrderSimple = {
    workOrderId: string;
    tagId: string | null;
    tagPlantId: string;
    tag: string;
    title: string;
    workCenterId: string;
    workCenterPlantId: string;
    workCenter?: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    plantId: string;
    planningPlantId: string;
    plannerGroupId: string;
    plannerGroup?: string;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    maintenanceTypeId: string;
    maintenanceType: string;
    plannedDate: string | null;
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
     * The internal id of the person responsible for the processing of the technical clarification. The id represents the employee id of the person.
     */
    personResponsibleId?: string | null;
    /**
     * Value only returned if include-person-responsible=true. The email of the person responsible for the processing of the technical clarification. This is the preferred way of identifying the person as it's consistent across systems.
     */
    personResponsibleEmail?: string | null;
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

