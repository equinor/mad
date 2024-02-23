/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TechnicalInformationUpdateRequestCreate = {
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
     * * `N` - Normal priority
     *
     */
    priorityId?: 'H' | 'N';
    /**
     * If workCenter is not provided, it will use default defined on tag
     */
    workCenterId?: string;
    /**
     * If workCenter is not provided, it will use default defined on tag
     */
    workCenterPlantId?: string;
    /**
     * If plannerGroupId is not provided, it will use default defined on tag
     */
    plannerGroupId?: string;
    /**
     * If planningPlantId is not provided, it will use default defined on tag
     */
    planningPlantId?: string;
    /**
     * The email of the person responsible for the processing of the technical information update request. This is the preferred way of identifying the person as it's consistent across systems.
     */
    personResponsibleEmail?: string;
};

