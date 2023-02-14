/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CertificationReportSimple } from "./CertificationReportSimple";

export type CertificationReportSimpleSelf = CertificationReportSimple & {
  maintenanceRecordTypeId: "certificationReport";
  _links: {
    self?: string;
  };
};
