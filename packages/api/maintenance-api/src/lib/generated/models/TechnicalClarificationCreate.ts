/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TechnicalClarificationCreate = {
    /**
     * Required to input either tag or equipment
     */
    tagId?: string | null;
    /**
     * Required to input either tag or equipment
     */
    tagPlantId?: string;
    /**
     * Required to input either tag or equipment
     */
    equipmentId?: string;
    title: string;
    text?: string;
    /**
     * Priority:
     * * `H` - High priority
     * * `M` - Medium priority
     * * `L` - Low priority
     *
     */
    priorityId: 'H' | 'M' | 'L';
    workCenterId: string;
    workCenterPlantId: string;
    plannerGroupId: string;
    planningPlantId: string;
    /**
     * The email of the person responsible for the processing of the technical information update request. This is the preferred way of identifying the person as it's consistent across systems.
     */
    personResponsibleEmail?: string;
};

