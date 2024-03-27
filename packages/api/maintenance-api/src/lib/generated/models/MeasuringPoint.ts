/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Measurement } from './Measurement';
import type { MeasuringPointBasic } from './MeasuringPointBasic';
import type { MeasuringPointCharacteristic } from './MeasuringPointCharacteristic';
import type { QualitativeCode } from './QualitativeCode';

export type MeasuringPoint = (MeasuringPointBasic & {
    lastMeasurement?: Measurement | null;
    measurements?: Array<Measurement> | null;
    qualitativeCodes?: Array<QualitativeCode> | null;
    characteristics?: Array<MeasuringPointCharacteristic> | null;
});

