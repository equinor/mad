/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MeasuringPointFromTagLookup } from "./MeasuringPointFromTagLookup";
import type { TechnicalFeedback } from "./TechnicalFeedback";
import type { URLReference } from "./URLReference";
import type { WorkOrderOperation } from "./WorkOrderOperation";

export type PreventiveWorkOrderOperation = WorkOrderOperation & {
    /**
     * URL references
     */
    urlReferences?: Array<URLReference>;
    /**
     * Related measuring points from PRT
     */
    measuringPoints?: Array<MeasuringPointFromTagLookup>;
    /**
     * Technical feedback to be completed as part of work order execution
     */
    technicalFeedback?: Array<TechnicalFeedback>;
};
