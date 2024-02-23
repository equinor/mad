/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityReportSimple } from './ActivityReportSimple';
import type { CertificationReportSimple } from './CertificationReportSimple';
import type { FailureReportSimple } from './FailureReportSimple';
import type { ModificationProposalSimple } from './ModificationProposalSimple';
import type { TechnicalClarificationSimple } from './TechnicalClarificationSimple';
import type { TechnicalInformationUpdateRequestSimple } from './TechnicalInformationUpdateRequestSimple';

export type SimpleMaintenanceRecordsList = {
    modificationProposals?: Array<ModificationProposalSimple>;
    failureReports?: Array<FailureReportSimple>;
    activityReports?: Array<ActivityReportSimple>;
    certificationReports?: Array<CertificationReportSimple>;
    technicalInformationUpdateRequests?: Array<TechnicalInformationUpdateRequestSimple>;
    technicalClarifications?: Array<TechnicalClarificationSimple>;
};

