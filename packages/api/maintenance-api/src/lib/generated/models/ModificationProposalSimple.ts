/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModificationProposalSimple = {
    recordId: string;
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    reasonGroupId: string;
    reasonId: string;
    /**
     * Priority:
     * * `H` - High priority
     * * `M` - Medium priority
     * * `L` - Low priority
     * * null - No priority defined
     *
     */
    priorityId: 'H' | 'M' | 'L' | null;
    title: string;
    isSimpleProposal: boolean;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    plannerGroupId: string;
    planningPlantId: string;
    /**
     * @deprecated
     */
    plannerGroupPlantId?: string;
    plannerGroup: string;
    workCenterId: string;
    workCenterPlantId: string;
    requiredStartDate: string;
    requiredEndDate: string | null;
    /**
     * The point in time where the failure report was created
     */
    createdDateTime: string | null;
    /**
     * The point in time where the failure report was completed
     */
    completedDateTime: string | null;
};

