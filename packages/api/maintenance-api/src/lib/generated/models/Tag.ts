/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BillOfMaterialItem } from './BillOfMaterialItem';
import type { CatalogProfileDetails } from './CatalogProfileDetails';
import type { CorrectiveWorkOrderSimple } from './CorrectiveWorkOrderSimple';
import type { DocumentAttachment } from './DocumentAttachment';
import type { EquipmentBasic } from './EquipmentBasic';
import type { GenericWorkOrderSimple } from './GenericWorkOrderSimple';
import type { LinearData } from './LinearData';
import type { MaintenancePlanItemBasic } from './MaintenancePlanItemBasic';
import type { MeasuringPointFromTagLookup } from './MeasuringPointFromTagLookup';
import type { ModificationWorkOrderSimple } from './ModificationWorkOrderSimple';
import type { PreventiveWorkOrderSimple } from './PreventiveWorkOrderSimple';
import type { ProjectWorkOrderSimple } from './ProjectWorkOrderSimple';
import type { SASChangeWorkOrderSimple } from './SASChangeWorkOrderSimple';
import type { SimpleMaintenanceRecordsList } from './SimpleMaintenanceRecordsList';
import type { Status } from './Status';
import type { TagBasic } from './TagBasic';
import type { TagCharacteristic } from './TagCharacteristic';
import type { URLReference } from './URLReference';

export type Tag = (TagBasic & {
    /**
     * The category the tag belongs to. Values: `A` = Hose Assembly,`C` = Cable,`D` = Circuit and Starter,`E` = Electric Field-equipment,`F` = Fire & Gas,`H` = Heat tracing,`I` = Instrument,`J` = Junction Box,`K` = Vehicle,`M` = Main equipment,`N` = Penetration,`O` = Surface Protection,`P` = Piping,`Q` = Pipe Support,`R` = Civil engineering facility,`S` = Special Item,`T` = Telecommunication,`U` = Pipeline,`V` = Manual Valve,`W` = Software Tag,`X` = Package and `Z` = Dummy Functional Location
     */
    tagCategoryId?: string;
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
    /**
     * Active statuses for the tag with space as separating character
     */
    activeStatusIds?: string;
    startUpDate?: string | null;
    endOfUseDate?: string | null;
    costWBSId?: string;
    /**
     * Specific room for the asset
     */
    area: string;
    /**
     * MaterialId for the asset
     */
    materialId?: string;
    /**
     * Material for the asset
     */
    material?: string;
    characteristics?: Array<TagCharacteristic>;
    maintenanceRecords?: SimpleMaintenanceRecordsList;
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
    linearData?: LinearData | null;
    /**
     * All statuses possible for tag
     */
    statuses?: Array<Status>;
    /**
     * All URLReferences saved at this tag
     */
    urlReferences?: Array<URLReference>;
    /**
     * All Attachments saved at this tag
     */
    attachments?: Array<DocumentAttachment>;
});

