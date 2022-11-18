/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityReportSimple } from './ActivityReportSimple';
import type { CatalogProfileDetails } from './CatalogProfileDetails';
import type { CertificationReportSimple } from './CertificationReportSimple';
import type { CorrectiveWorkOrderSimpleWithRelationship } from './CorrectiveWorkOrderSimpleWithRelationship';
import type { EquipmentBasicV2 } from './EquipmentBasicV2';
import type { EquipmentCharacteristic } from './EquipmentCharacteristic';
import type { FailureReportSimple } from './FailureReportSimple';
import type { MeasuringPointFromTagLookup } from './MeasuringPointFromTagLookup';
import type { ModificationProposalSimple } from './ModificationProposalSimple';
import type { ModificationWorkOrderSimpleWithRelationship } from './ModificationWorkOrderSimpleWithRelationship';
import type { PreventiveWorkOrderSimpleWithRelationship } from './PreventiveWorkOrderSimpleWithRelationship';
import type { ProjectWorkOrderSimpleWithRelationship } from './ProjectWorkOrderSimpleWithRelationship';
import type { SASChangeWorkOrderSimpleWithRelationship } from './SASChangeWorkOrderSimpleWithRelationship';
import type { Status } from './Status';
import type { SubseaWorkOrderSimpleWithRelationship } from './SubseaWorkOrderSimpleWithRelationship';
import type { TechnicalClarificationSimple } from './TechnicalClarificationSimple';
import type { TechnicalInformationUpdateRequestSimple } from './TechnicalInformationUpdateRequestSimple';

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
    plannerGroupId: string;
    plannerGroup: string;
    characteristics?: Array<EquipmentCharacteristic>;
    /**
     * All statuses possible with information about activation
     */
    statuses?: Array<Status>;
    maintenanceRecords?: {
        modificationProposals?: Array<ModificationProposalSimple>;
        failureReports?: Array<FailureReportSimple>;
        activityReports?: Array<ActivityReportSimple>;
        certificationReports?: Array<CertificationReportSimple>;
        technicalInformationUpdateRequests?: Array<TechnicalInformationUpdateRequestSimple>;
        technicalClarifications?: Array<TechnicalClarificationSimple>;
    };
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
});

