/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DetectionMethodGroup } from './DetectionMethodGroup';
import type { FailureMechanismGroup } from './FailureMechanismGroup';
import type { FailureModeGroup } from './FailureModeGroup';

export type CatalogProfile = {
    catalogProfileId: string;
    catalogProfile: string;
    isDefaultProfileForActivityReports?: boolean;
    isDefaultProfileForFailureReports?: boolean;
    detectionMethods: Array<DetectionMethodGroup>;
    failureModes: Array<FailureModeGroup>;
    failureMechanisms: Array<FailureMechanismGroup>;
};

