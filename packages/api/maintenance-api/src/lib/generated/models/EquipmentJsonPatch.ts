/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EquipmentJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: "replace";
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: "/warrantyStartDate" | "/warrantyEndDate";
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Path specific information:
     * - /warrantyStartDate - Date
     * - /warrantyEndDate - Date
     *
     */
    value: string;
};
