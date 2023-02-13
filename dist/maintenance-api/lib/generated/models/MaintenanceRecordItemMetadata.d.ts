export type MaintenanceRecordItemMetadata = {
    metadataId: string;
    title: string;
    failureModeId: string;
    failureModeGroupId: string;
    detectionMethodId: string;
    detectionMethodGroupId: string;
    failureMechanismId: string | null;
    failureMechanismGroupId: string | null;
};
