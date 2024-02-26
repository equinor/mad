/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Characteristic } from './Characteristic';

export type MaintenanceRecordItemMetadata = {
    metadataId: string;
    title: string;
    failureModeId: string;
    failureModeGroupId: string;
    detectionMethodId: string;
    detectionMethodGroupId: string;
    failureMechanismId: string | null;
    failureMechanismGroupId: string | null;
    /**
     * Characteristics
     */
    characteristics?: Array<Characteristic>;
};

