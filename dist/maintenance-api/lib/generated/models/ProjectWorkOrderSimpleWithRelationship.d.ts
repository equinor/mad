import type { EquipmentRelationshipToWorkOrder } from './EquipmentRelationshipToWorkOrder';
import type { ProjectWorkOrderSimple } from './ProjectWorkOrderSimple';
export type ProjectWorkOrderSimpleWithRelationship = (ProjectWorkOrderSimple & {
    equipmentRelationship: EquipmentRelationshipToWorkOrder;
});
