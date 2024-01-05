/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EquipmentChangeLogs = Array<{
    equipmentId?: string;
    /**
     * Has the status of the equipment changed
     */
    hasStatusChanged?: boolean;
    /**
     * Has some of the header properties (such as `equipment` and `serialNumber`) equipment changed
     */
    hasHeaderDataChanged?: boolean;
    /**
     * Does there exist new or changed maintenance records where the equipment is the main reference
     */
    hasMaintenanceRecordChanged?: boolean;
    /**
     * Does there exist new or changed work orders where the equipment is the main reference
     */
    hasWorkOrdersChanged?: boolean;
    /**
     * Does there exist new or changed equipment reservations (potentially for other subsea work orders)
     */
    hasEquipmentReservationChanged?: boolean;
}>;
