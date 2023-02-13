export type MaintenancePlanItemCall = {
    callNr: number;
    plannedDate: string | null;
    isExecuted: boolean;
    preventiveWorkOrderId: string;
    duePackages?: string;
    schedulingTypeStatus?: string;
    callDate?: string | null;
    completionDate?: string | null;
};
