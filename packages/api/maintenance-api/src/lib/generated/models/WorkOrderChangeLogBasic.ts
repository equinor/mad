/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderChangeLogBasic = {
    workOrderId: string;
    property: 'basicStartDateTime' | 'basicEndDateTime';
    changeDateTime: string;
    oldValue: string;
    newValue: string;
};

