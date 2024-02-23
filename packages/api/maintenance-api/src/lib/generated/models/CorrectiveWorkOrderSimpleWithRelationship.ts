/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CorrectiveWorkOrderSimple } from './CorrectiveWorkOrderSimple';
import type { EquipmentRelationshipToWorkOrder } from './EquipmentRelationshipToWorkOrder';

export type CorrectiveWorkOrderSimpleWithRelationship = (CorrectiveWorkOrderSimple & {
    equipmentRelationship: EquipmentRelationshipToWorkOrder;
    /**
     * The internal id of the person responsible for the processing of the technical clarification. The id represents the employee id of the person.
     */
    personResponsibleId?: string | null;
    /**
     * Value only returned if include-person-responsible=true. The email of the person responsible for the processing of the technical clarification. This is the preferred way of identifying the person as it's consistent across systems.
     */
    personResponsibleEmail?: string | null;
});

