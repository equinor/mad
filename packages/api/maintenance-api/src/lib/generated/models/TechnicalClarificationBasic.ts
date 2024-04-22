/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TechnicalClarificationBasic = {
    recordId: string;
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    title: string;
    text: string | null;
    /**
     * If there is assigned a person responsible
     */
    hasPersonResponsible: boolean;
    /**
     * Value only returned if include-person-responsible=true. The internal id of the person responsible for the processing of the technical clarification. The id represents the employee id of the person.
     */
    personResponsibleId: string | null;
    /**
     * Value only returned if include-person-responsible=true. The email of the person responsible for the processing of the technical clarification. This is the preferred way of identifying the person as it's consistent across systems.
     */
    personResponsibleEmail: string | null;
    workCenterId: string;
    workCenterPlantId: string;
    planningPlantId: string;
    plannerGroupId: string;
    plannerGroup: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    location: string;
    systemId: string;
    system: string;
    requiredEndDate: string | null;
    /**
     * Priority:
     * * `H` - High priority
     * * `M` - Medium priority
     * * `L` - Low priority
     * * null - No priority defined
     *
     */
    priorityId: 'H' | 'M' | 'L' | null;
    /**
     * Field used to assist in grouping/sorting of technical clarification. Unstructured field used non-consistently between plants
     */
    sortField: string;
    costWBSId: string;
    costWBS: string;
    workOrderExist: boolean;
    workOrderId: string;
    /**
     * Active statuses for the technical clarification with space as separating character
     */
    activeStatusIds: string;
    createdDateTime: string | null;
    plannedEndDate: string | null;
    completedDateTime: string | null;
};

