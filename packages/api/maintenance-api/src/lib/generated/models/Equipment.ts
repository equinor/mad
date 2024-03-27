/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CatalogProfileDetails } from './CatalogProfileDetails';
import type { CorrectiveWorkOrderSimpleWithRelationship } from './CorrectiveWorkOrderSimpleWithRelationship';
import type { EquipmentAttachment } from './EquipmentAttachment';
import type { EquipmentBasicV2 } from './EquipmentBasicV2';
import type { EquipmentCharacteristic } from './EquipmentCharacteristic';
import type { MeasuringPointFromTagLookup } from './MeasuringPointFromTagLookup';
import type { ModificationWorkOrderSimpleWithRelationship } from './ModificationWorkOrderSimpleWithRelationship';
import type { PreventiveWorkOrderSimpleWithRelationship } from './PreventiveWorkOrderSimpleWithRelationship';
import type { ProjectWorkOrderSimpleWithRelationship } from './ProjectWorkOrderSimpleWithRelationship';
import type { SASChangeWorkOrderSimpleWithRelationship } from './SASChangeWorkOrderSimpleWithRelationship';
import type { SimpleMaintenanceRecordsList } from './SimpleMaintenanceRecordsList';
import type { Status } from './Status';
import type { SubseaWorkOrderSimpleWithRelationship } from './SubseaWorkOrderSimpleWithRelationship';
import type { URLReferenceWithCharacteristics } from './URLReferenceWithCharacteristics';

export type Equipment = (EquipmentBasicV2 & {
    /**
     * The category the equipment belongs to. `G` = Tank Customer equipment, `M` = Machines/Equipment, `P` = Production resources/tools, `Q` = Test/measurement equipment, `R` = Process Equipment, `S` = Customer equipment, `T` = IT Equipment, `U` = Subsea Equipment, `W` = Wind Operation Certified Equip, `Y` = Tool Crib
     */
    equipmentCategoryId: string;
    /**
     * Active statuses for the equipment with space as separating character
     */
    activeStatusIds: string;
    /**
     * The maintenance concept for the tag. More details available through endpoint /maintenance-concepts/{concept-id}
     */
    maintenanceConceptId: string;
    /**
     * Class the tag belongs to
     */
    classId: string;
    workCenterId: string;
    workCenter: string;
    workCenterPlantId: string;
    planningPlantId: string;
    characteristics?: Array<EquipmentCharacteristic>;
    attachments?: Array<EquipmentAttachment>;
    urlReferences?: Array<URLReferenceWithCharacteristics>;
    /**
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
    maintenanceRecords?: SimpleMaintenanceRecordsList;
    workOrders?: {
        correctiveWorkOrders?: Array<CorrectiveWorkOrderSimpleWithRelationship>;
        preventiveWorkOrders?: Array<PreventiveWorkOrderSimpleWithRelationship>;
        modificationWorkOrders?: Array<ModificationWorkOrderSimpleWithRelationship>;
        sasChangeWorkOrders?: Array<SASChangeWorkOrderSimpleWithRelationship>;
        projectWorkOrders?: Array<ProjectWorkOrderSimpleWithRelationship>;
        subseaWorkOrders?: Array<SubseaWorkOrderSimpleWithRelationship>;
    };
    catalogProfileDetails?: CatalogProfileDetails;
    measuringPoints?: Array<MeasuringPointFromTagLookup>;
    subEquipment?: Array<EquipmentBasicV2>;
});

