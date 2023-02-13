export type ActivityReportSimple = {
    recordId: string;
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    title: string;
    isOpen: boolean;
    /**
     * Active statuses for the Failure report with space as separating character
     */
    activeStatusIds: string;
    createdDateTime: string | null;
};
