import type { EquipmentRelationshipToWorkOrder } from './EquipmentRelationshipToWorkOrder';
import type { ModificationWorkOrderSimple } from './ModificationWorkOrderSimple';
export type ModificationWorkOrderSimpleWithRelationship = (ModificationWorkOrderSimple & {
    equipmentRelationship: EquipmentRelationshipToWorkOrder;
});
