/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EquipmentRelationshipToWorkOrder } from "./EquipmentRelationshipToWorkOrder";
import type { SASChangeWorkOrderSimple } from "./SASChangeWorkOrderSimple";

export type SASChangeWorkOrderSimpleWithRelationship =
    SASChangeWorkOrderSimple & {
        equipmentRelationship: EquipmentRelationshipToWorkOrder;
    };
