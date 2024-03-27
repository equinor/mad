/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MeasuringPointMinimal } from './MeasuringPointMinimal';

export type MeasuringPointBasic = (MeasuringPointMinimal & {
    tagId: string | null;
    tagPlantId: string;
    equipmentId: string;
    measuringPosition: string;
    supportsQuantitativeMeasurement: boolean;
    quantitativeCharacteristicId: string;
    quantitativeCharacteristicUnit: string;
    quantitativeCharacteristicUnitId: string;
    categoryId: string;
    qualitativeCodeGroupId: string;
    supportsQualitativeMeasurement: boolean;
});

