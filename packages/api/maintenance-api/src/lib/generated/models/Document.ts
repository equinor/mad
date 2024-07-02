/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Characteristic } from './Characteristic';
import type { DocumentAttachment } from './DocumentAttachment';
import type { DocumentBasic } from './DocumentBasic';
import type { EquipmentBasicV2 } from './EquipmentBasicV2';
import type { MaterialMinimal } from './MaterialMinimal';
import type { MeasuringPointBasic } from './MeasuringPointBasic';
import type { SimpleMaintenanceRecordsList } from './SimpleMaintenanceRecordsList';
import type { TagMinimal } from './TagMinimal';
import type { URLReferenceWithCharacteristics } from './URLReferenceWithCharacteristics';

export type Document = (DocumentBasic & {
    /**
     * Characteristics for this business object
     */
    characteristics?: Array<Characteristic>;
    /**
     * Equipment for this business object
     */
    equipment?: Array<EquipmentBasicV2>;
    /**
     * Material for this business object
     */
    material?: Array<MaterialMinimal>;
    /**
     * Tags for this business object
     */
    tags?: Array<TagMinimal>;
    /**
     * Measuring points for this business object
     */
    measuringPoints?: Array<MeasuringPointBasic>;
    maintenanceRecords?: SimpleMaintenanceRecordsList;
    /**
     * Attachments for this business object
     */
    attachments?: Array<DocumentAttachment>;
    /**
     * Number of equipment associated with the document. If no equipment are included
     * from the query parameters, this field will be omitted in the response
     *
     */
    equipmentInventoryCount?: number;
    /**
     * Number of materials associated with the document. If no materials are included
     * from the query parameters, this field will be omitted in the response
     *
     */
    materialInventoryCount?: number;
    urlReferences?: Array<URLReferenceWithCharacteristics>;
});

