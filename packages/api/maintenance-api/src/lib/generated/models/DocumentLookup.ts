/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Characteristic } from './Characteristic';
import type { DocumentBasic } from './DocumentBasic';
import type { EquipmentAttachment } from './EquipmentAttachment';
import type { EquipmentBasicV2 } from './EquipmentBasicV2';
import type { MaterialMinimal } from './MaterialMinimal';

export type DocumentLookup = (DocumentBasic & {
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
     * Attachments for this business object
     */
    attachments?: Array<EquipmentAttachment>;
});

