import type { CorrectiveWorkOrderSimple } from './CorrectiveWorkOrderSimple';
import type { EquipmentRelationshipToWorkOrder } from './EquipmentRelationshipToWorkOrder';
export type CorrectiveWorkOrderSimpleWithRelationship = (CorrectiveWorkOrderSimple & {
    equipmentRelationship: EquipmentRelationshipToWorkOrder;
});
