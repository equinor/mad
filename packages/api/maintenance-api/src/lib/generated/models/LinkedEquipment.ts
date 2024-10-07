/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EquipmentMinimal } from './EquipmentMinimal';

export type LinkedEquipment = (EquipmentMinimal & {
    /**
     * Manufacturer part number. This field will only be filled out if `partNumber` is longer than 30 characters.
     */
    manufacturerPartNumber: string;
    /**
     * Manufacturer serial number
     */
    manufacturerSerialNumber: string;
    /**
     * Date when the equipment was linked
     */
    linkedDate: string;
});

