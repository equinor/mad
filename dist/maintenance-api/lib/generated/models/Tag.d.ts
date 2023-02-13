import type { ActivityReportSimple } from './ActivityReportSimple';
import type { BillOfMaterialItem } from './BillOfMaterialItem';
import type { CatalogProfileDetails } from './CatalogProfileDetails';
import type { CertificationReportSimple } from './CertificationReportSimple';
import type { CorrectiveWorkOrderSimple } from './CorrectiveWorkOrderSimple';
import type { EquipmentBasic } from './EquipmentBasic';
import type { FailureReportSimple } from './FailureReportSimple';
import type { GenericWorkOrderSimple } from './GenericWorkOrderSimple';
import type { MaintenancePlanItemBasic } from './MaintenancePlanItemBasic';
import type { MeasuringPointFromTagLookup } from './MeasuringPointFromTagLookup';
import type { ModificationWorkOrderSimple } from './ModificationWorkOrderSimple';
import type { PreventiveWorkOrderSimple } from './PreventiveWorkOrderSimple';
import type { ProjectWorkOrderSimple } from './ProjectWorkOrderSimple';
import type { SASChangeWorkOrderSimple } from './SASChangeWorkOrderSimple';
import type { TagBasic } from './TagBasic';
import type { TagCharacteristic } from './TagCharacteristic';
import type { TechnicalClarificationSimple } from './TechnicalClarificationSimple';
import type { TechnicalInformationUpdateRequestSimple } from './TechnicalInformationUpdateRequestSimple';
export type Tag = (TagBasic & {
    /**
     * The maintenance concept for the tag. More details planned to be available through endpoint /maintenance-concepts/{concept-id}
     */
    maintenanceConceptId: string;
    /**
     * Class the tag belongs to
     */
    classId: string;
    workCenterId?: string;
    workCenter?: string;
    workCenterPlantId?: string;
    planningPlantId?: string;
    plannerGroupId?: string;
    plannerGroup?: string;
    costWBSId?: string;
    characteristics?: Array<TagCharacteristic>;
    maintenanceRecords?: {
        failureReports?: Array<FailureReportSimple>;
        activityReports?: Array<ActivityReportSimple>;
        certificationReports?: Array<CertificationReportSimple>;
        technicalInformationUpdateRequests?: Array<TechnicalInformationUpdateRequestSimple>;
        technicalClarifications?: Array<TechnicalClarificationSimple>;
    };
    workOrders?: {
        correctiveWorkOrders?: Array<CorrectiveWorkOrderSimple>;
        preventiveWorkOrders?: Array<PreventiveWorkOrderSimple>;
        modificationWorkOrders?: Array<ModificationWorkOrderSimple>;
        sasChangeWorkOrders?: Array<SASChangeWorkOrderSimple>;
        projectWorkOrders?: Array<ProjectWorkOrderSimple>;
        subseaWorkOrders?: Array<GenericWorkOrderSimple>;
    };
    installedEquipment?: Array<EquipmentBasic>;
    maintenancePlanItems?: Array<MaintenancePlanItemBasic>;
    catalogProfileDetails?: CatalogProfileDetails;
    measuringPoints?: Array<MeasuringPointFromTagLookup>;
    /**
     * The bill of materials is a hierarchical structure. The top-level of the hierarchy is either connected to the tag or the installed equipment.
     */
    billOfMaterials?: Array<BillOfMaterialItem>;
});
