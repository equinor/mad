/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderCreateAbstract = {
    tagId?: string | null;
    tagPlantId?: string;
    title?: string;
    workCenterId?: string;
    workCenterPlantId?: string;
    plantId?: string;
    planningPlantId?: string;
    plannerGroupId?: string;
    maintenanceTypeId?: string;
    basicStartDateTime?: string;
    basicEndDateTime?: string;
    /**
     * An identifier to the revision (shutdown or campaign work) this work order is related to. Read possible values from `/plants/{plant-id}`
     */
    revisionId?: string;
    /**
     * Field used to assist in grouping/sorting Work orders. Unstructured field used non-consistently between plants
     */
    sortField?: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId?: string;
    text?: string;
};

