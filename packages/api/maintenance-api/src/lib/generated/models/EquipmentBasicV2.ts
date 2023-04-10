/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EquipmentMinimal } from "./EquipmentMinimal";

export type EquipmentBasicV2 = EquipmentMinimal & {
    manufacturer?: string;
    modelNumber?: string;
    serialNumber: string;
    partNumber: string;
    /**
     * Id of parent equipment
     */
    parentEquipmentId: string;
    /**
     * Id of quantity unit
     */
    quantityUnitId?: string;
    /**
     * True if the equipment has status `INSV - In service`
     */
    isInService: boolean;
    /**
     * The plant were the equipment is maintained
     */
    plantId: string;
    ABCId: string;
    ABC: string;
    systemId: string;
    system: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    location: string;
    catalogProfileId: string;
    warrantyStartDate: string | null;
    warrantyEndDate: string | null;
    /**
     * Field used to assist in grouping/sorting
     */
    sortField: string;
};
