/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModificationProposalCreate = {
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
    /**
     * If workCenter is not provided, it will use default defined on tag
     */
    workCenterId?: string;
    /**
     * If workCenter is not provided, it will use default defined on tag
     */
    workCenterPlantId?: string;
    plannerGroupId?: string;
    planningPlantId?: string;
    /**
     * @deprecated
     */
    plannerGroupPlantId?: string;
    reasonGroupId?: string;
    reasonId?: string;
    isSimpleProposal?: boolean;
    /**
     * If modification proposal was initially created in an external system, this represent the unique id of it
     */
    externalPartnerRecordId?: string;
    /**
     * If modification proposal was initially created in an external system, this represent the name of the external system
     */
    externalPartnerId?: string;
};

