/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EquipmentRelationshipToWorkOrder = {
    /**
     * The type of relationship between equipment and work order. `RESERVATION` means the equipment is reserved as a material of the work order. `HEADER` means the equipment is the main technical object reference of the work order.
     */
    relationshipType: 'RESERVATION' | 'HEADER';
    /**
     * Id related to the relationship. For `relationshipType` of `RESERVATION` the value is the `reservationId`.
     */
    relationshipId: string | null;
};

