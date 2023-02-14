/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Measurement } from "./Measurement";
import type { MeasuringPointBasic } from "./MeasuringPointBasic";

export type MeasuringPointFromTagLookup = MeasuringPointBasic & {
  lastMeasurement?: Measurement | null;
};
