/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PlanningPlantRevisionBasic = {
    /**
     * An identifier to the revision (shutdown or campaign work) this work order is related to
     */
    revisionId: string;
    /**
     * Name of the revision (shutdown or campaign work) this work order is related to
     */
    revision: string;
    revisionStartDateTime: string | null;
    revisionEndDateTime: string | null;
    /**
     * @deprecated
     */
    revisionStartDate?: string | null;
    /**
     * @deprecated
     */
    revisionEndDate?: string | null;
    isCompleted?: boolean;
};

