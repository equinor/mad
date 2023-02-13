import type { EquipmentRelationshipToWorkOrder } from './EquipmentRelationshipToWorkOrder';
import type { PreventiveWorkOrderSimple } from './PreventiveWorkOrderSimple';
export type PreventiveWorkOrderSimpleWithRelationship = (PreventiveWorkOrderSimple & {
    equipmentRelationship: EquipmentRelationshipToWorkOrder;
});
