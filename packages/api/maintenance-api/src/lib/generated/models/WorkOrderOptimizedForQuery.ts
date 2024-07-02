/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivityReportSimpleSelf } from './ActivityReportSimpleSelf';
import type { CertificationReportSimpleSelf } from './CertificationReportSimpleSelf';
import type { FailureReportSimpleSelf } from './FailureReportSimpleSelf';
import type { ModificationProposalSimpleSelf } from './ModificationProposalSimpleSelf';
import type { TechnicalClarificationSimpleSelf } from './TechnicalClarificationSimpleSelf';
import type { TechnicalInformationUpdateRequestSimpleSelf } from './TechnicalInformationUpdateRequestSimpleSelf';

export type WorkOrderOptimizedForQuery = {
    workOrderId: string;
    workOrderTypeId: 'correctiveWorkOrder' | 'preventiveWorkOrder' | 'modificationWorkOrder' | 'sasChangeWorkOrder' | 'projectWorkOrder' | 'subseaWorkOrder';
    tagId: string | null;
    tagPlantId: string;
    title: string;
    /**
     * Multi-line description of work order. Only included if include-text=true
     */
    text: string;
    workCenterId: string;
    workCenterPlantId: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    systemId: string;
    plantId: string;
    planningPlantId: string;
    plannerGroupId: string;
    /**
     * An identifier to the revision (shutdown or campaign work) this work order is related to
     */
    revisionId: string;
    /**
     * Name of the revision (shutdown or campaign work) this work order is related to
     */
    revision?: string;
    basicStartDateTime: string | null;
    basicEndDateTime: string | null;
    createdDateTime: string | null;
    changedDateTime: string | null;
    /**
     * Field used to assist in grouping/sorting Work orders. Unstructured field used non-consistently between plants
     */
    sortField: string;
    /**
     * Revision code for work order (deprecated - use `revisionId` instead)
     * @deprecated
     */
    revisionCodeId: string;
    /**
     * Work order is open
     */
    isOpen: boolean;
    /**
     * Has status Job preparation
     */
    hasStatusPREP: boolean;
    /**
     * Has status Prep compl waiting goods/serv
     */
    hasStatusPRCO: boolean;
    /**
     * Has status Ready for Execution
     */
    hasStatusRDEX: boolean;
    /**
     * Has status Job started
     */
    hasStatusSTRT: boolean;
    /**
     * Has status Ready for Operation
     */
    hasStatusRDOP: boolean;
    /**
     * Has status Cancelled
     */
    hasStatusCANC: boolean;
    /**
     * Has status Technical Complete
     */
    hasStatusTECO: boolean;
    /**
     * Has status Released
     */
    hasStatusREL?: boolean;
    /**
     * Main maintenance record
     */
    maintenanceRecord: (FailureReportSimpleSelf | ActivityReportSimpleSelf | CertificationReportSimpleSelf | ModificationProposalSimpleSelf | TechnicalInformationUpdateRequestSimpleSelf | TechnicalClarificationSimpleSelf) | null;
    _links: {
        related?: string;
    };
};

