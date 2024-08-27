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
import type { URLReference } from './URLReference';

export type Document = (DocumentBasic & {
    /**
     * Characteristics related to the document
     */
    characteristics?: Array<Characteristic>;
    /**
     * Equipment related to the document
     */
    equipment?: Array<EquipmentBasicV2>;
    /**
     * Material related to the document
     */
    material?: Array<MaterialMinimal>;
    /**
     * Tags related to the document
     */
    tags?: Array<TagMinimal>;
    /**
     * Measuring points related to the document
     */
    measuringPoints?: Array<MeasuringPointBasic>;
    /**
     * Maintenance records related to the document
     */
    maintenanceRecords?: Array<SimpleMaintenanceRecordsList>;
    /**
     * Attachments for this document
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
    urlReferences?: Array<URLReference>;
});

