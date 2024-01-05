/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaintenanceActivity } from './MaintenanceActivity';
import type { MaintenanceConceptBasic } from './MaintenanceConceptBasic';

export type MaintenanceConcept = (MaintenanceConceptBasic & {
    concept: string;
    conceptDescription: string;
    /**
     * Text with instructions for use for this concept
     */
    conceptInstructions: string;
    catalogProfile: string;
    responsibleDiscipline: string;
    maintenanceActivities: Array<MaintenanceActivity>;
});

