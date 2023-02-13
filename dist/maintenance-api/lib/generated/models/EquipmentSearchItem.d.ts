import type { ActivityReportSimple } from './ActivityReportSimple';
import type { CertificationReportSimple } from './CertificationReportSimple';
import type { CorrectiveWorkOrderSimpleWithRelationship } from './CorrectiveWorkOrderSimpleWithRelationship';
import type { EquipmentBasicV2 } from './EquipmentBasicV2';
import type { EquipmentCharacteristic } from './EquipmentCharacteristic';
import type { FailureReportSimple } from './FailureReportSimple';
import type { ModificationProposalSimple } from './ModificationProposalSimple';
import type { ModificationWorkOrderSimpleWithRelationship } from './ModificationWorkOrderSimpleWithRelationship';
import type { PreventiveWorkOrderSimpleWithRelationship } from './PreventiveWorkOrderSimpleWithRelationship';
import type { ProjectWorkOrderSimpleWithRelationship } from './ProjectWorkOrderSimpleWithRelationship';
import type { SASChangeWorkOrderSimpleWithRelationship } from './SASChangeWorkOrderSimpleWithRelationship';
import type { SubseaWorkOrderSimpleWithRelationship } from './SubseaWorkOrderSimpleWithRelationship';
import type { TechnicalClarificationSimple } from './TechnicalClarificationSimple';
import type { TechnicalInformationUpdateRequestSimple } from './TechnicalInformationUpdateRequestSimple';
export type EquipmentSearchItem = (EquipmentBasicV2 & {
    characteristics?: Array<EquipmentCharacteristic>;
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
});
