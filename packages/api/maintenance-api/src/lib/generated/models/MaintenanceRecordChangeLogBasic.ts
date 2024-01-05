/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordChangeLogBasic = {
    recordId: string;
    /**
     * Property which has changed. Indicates the actual status code which has changed for example `statuses/RIVE` `tasks/statuses/CRTE`
     */
    property: string;
    changeDateTime: string;
    /**
     * Previous value of the property, serialized as a string but may contain value formats of booleans, date-times and other types
     */
    oldValue: string;
    /**
     * New value of the property, serialized as a string but may contain value formats of booleans, date-times and other types
     */
    newValue: string;
};

