/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MeasurementFromMeasuringPointLookup } from './MeasurementFromMeasuringPointLookup';
import type { MeasuringPointBasic } from './MeasuringPointBasic';
import type { MeasuringPointCharacteristic } from './MeasuringPointCharacteristic';
import type { QualitativeCode } from './QualitativeCode';

export type MeasuringPoint = (MeasuringPointBasic & {
    lastMeasurement?: (MeasurementFromMeasuringPointLookup & {
        /**
         * Long text for the measurement document
         */
        text?: string | null;
    }) | null;
    measurements?: Array<MeasurementFromMeasuringPointLookup> | null;
    qualitativeCodes?: Array<QualitativeCode> | null;
    characteristics?: Array<MeasuringPointCharacteristic> | null;
});

