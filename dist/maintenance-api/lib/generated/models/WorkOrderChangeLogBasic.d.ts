export type WorkOrderChangeLogBasic = {
    workOrderId: string;
    property: 'basicStartDateTime' | 'basicEndDateTime';
    changeDateTime: string;
    oldValue: string;
    newValue: string;
};
