export type MaintenanceRecordTaskCreate = {
    title: string;
    text?: string;
    taskCodeId?: string;
    taskCodeGroupId?: string;
    /**
     * Must be an Equinor email address. TaskResponsibleId is populated with the employee id of this user.
     */
    taskResponsibleEmail?: string;
    plannedStartDateTime?: string | null;
    plannedEndDateTime?: string | null;
};
