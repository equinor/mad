/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CorrectiveWorkOrderSimpleWithRelationship } from './CorrectiveWorkOrderSimpleWithRelationship';
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

export type EquipmentSearchItem = (EquipmentBasicV2 & {
    characteristics?: Array<EquipmentCharacteristic>;
    maintenanceRecords?: SimpleMaintenanceRecordsList;
    measuringPoints?: Array<MeasuringPointFromTagLookup>;
    workOrders?: {
        correctiveWorkOrders?: Array<CorrectiveWorkOrderSimpleWithRelationship>;
        preventiveWorkOrders?: Array<PreventiveWorkOrderSimpleWithRelationship>;
        modificationWorkOrders?: Array<ModificationWorkOrderSimpleWithRelationship>;
        sasChangeWorkOrders?: Array<SASChangeWorkOrderSimpleWithRelationship>;
        projectWorkOrders?: Array<ProjectWorkOrderSimpleWithRelationship>;
        subseaWorkOrders?: Array<SubseaWorkOrderSimpleWithRelationship>;
    };
    subEquipment?: Array<EquipmentBasicV2>;
    /**
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
});

