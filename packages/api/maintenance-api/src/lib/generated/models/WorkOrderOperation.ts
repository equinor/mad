/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SafetyMeasure } from './SafetyMeasure';
import type { WorkOrderAttachment } from './WorkOrderAttachment';
import type { WorkOrderMaterial } from './WorkOrderMaterial';
import type { WorkOrderOperationSimple } from './WorkOrderOperationSimple';

export type WorkOrderOperation = (WorkOrderOperationSimple & {
    activeStatusIds: string;
    materials?: Array<WorkOrderMaterial> | null;
    /**
     * Attachments for the work order operation
     */
    attachments?: Array<WorkOrderAttachment> | null;
    /**
     * Safety measures for the work order operation
     */
    safetyMeasures?: Array<SafetyMeasure> | null;
    /**
     * The internal id of the person assigned as responsible for the Work Order Operation. The id represents the employee id of the person.
     */
    personResponsibleId?: string | null;
    /**
     * The name of the person assigned as responsible for the Work Order Operation.
     */
    personResponsible?: string | null;
    /**
     * The email of the person assigned as responsible for the Work Order Operation. This is the preferred way of identifying the person as it's consistent across systems.
     */
    personResponsibleEmail?: string | null;
    /**
     * Text-based information from the planner
     */
    planNotes: string;
});

