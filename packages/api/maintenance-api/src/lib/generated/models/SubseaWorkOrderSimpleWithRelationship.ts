/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EquipmentRelationshipToWorkOrder } from "./EquipmentRelationshipToWorkOrder";
import type { SubseaWorkOrderSimple } from "./SubseaWorkOrderSimple";

export type SubseaWorkOrderSimpleWithRelationship = SubseaWorkOrderSimple & {
  equipmentRelationship: EquipmentRelationshipToWorkOrder;
};
