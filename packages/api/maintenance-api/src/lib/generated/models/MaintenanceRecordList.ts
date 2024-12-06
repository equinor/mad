/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityReportSimpleSelf } from './ActivityReportSimpleSelf';
import type { CertificationReportSimpleSelf } from './CertificationReportSimpleSelf';
import type { FailureReportSimpleSelfForMaintenanceRecordSearch } from './FailureReportSimpleSelfForMaintenanceRecordSearch';
import type { ModificationProposalSimpleSelf } from './ModificationProposalSimpleSelf';
import type { TechnicalClarificationSimpleSelf } from './TechnicalClarificationSimpleSelf';
import type { TechnicalInformationUpdateRequestSimpleSelf } from './TechnicalInformationUpdateRequestSimpleSelf';

export type MaintenanceRecordList = {
    modificationProposals?: Array<ModificationProposalSimpleSelf>;
    failureReports?: Array<FailureReportSimpleSelfForMaintenanceRecordSearch>;
    activityReports?: Array<ActivityReportSimpleSelf>;
    certificationReports?: Array<CertificationReportSimpleSelf>;
    technicalInformationUpdateRequests?: Array<TechnicalInformationUpdateRequestSimpleSelf>;
    technicalClarifications?: Array<TechnicalClarificationSimpleSelf>;
};

