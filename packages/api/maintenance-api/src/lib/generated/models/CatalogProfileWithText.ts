/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DetectionMethodGroupWithText } from './DetectionMethodGroupWithText';
import type { FailureMechanismGroupWithText } from './FailureMechanismGroupWithText';
import type { FailureModeGroupWithText } from './FailureModeGroupWithText';

export type CatalogProfileWithText = {
    catalogProfileId: string;
    catalogProfile: string;
    isDefaultProfileForActivityReports?: boolean;
    isDefaultProfileForFailureReports?: boolean;
    detectionMethods: Array<DetectionMethodGroupWithText>;
    failureModes: Array<FailureModeGroupWithText>;
    failureMechanisms: Array<FailureMechanismGroupWithText>;
};

