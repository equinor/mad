/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TechnicalClarificationSimple } from "./TechnicalClarificationSimple";

export type TechnicalClarificationSimpleSelf = TechnicalClarificationSimple & {
  maintenanceRecordTypeId: "technicalClarification";
  _links: {
    self?: string;
  };
};
