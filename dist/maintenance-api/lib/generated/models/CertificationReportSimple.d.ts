export type CertificationReportSimple = {
    recordId: string;
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    title: string;
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
    requiredEndDate: string | null;
    failureModeId: string | null;
    failureMode: string | null;
    failureModeGroupId: string | null;
    failureModeGroup: string | null;
    detectionMethodId: string | null;
    detectionMethod: string | null;
    detectionMethodGroupId: string | null;
    detectionMethodGroup: string | null;
    failureMechanismId: string | null;
    failureMechanism: string | null;
    failureMechanismGroupId: string | null;
    failureMechanismGroup: string | null;
    workOrderExist: boolean;
    workOrderId: string;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    createdDateTime: string | null;
};
