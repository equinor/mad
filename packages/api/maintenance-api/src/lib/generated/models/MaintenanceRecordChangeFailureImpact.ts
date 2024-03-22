/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordChangeFailureImpact = {
    /**
     * Priority:
     * * `H` - High priority
     * * `M` - Medium priority
     * * `L` - Low priority
     * * null - No priority defined
     *
     */
    priorityId?: 'H' | 'M' | 'L' | null;
    /**
     * Title of the activity
     */
    riskAssessmentTitle?: string;
    /**
     * The text should describe the risk assessment done
     */
    riskAssessmentText?: string;
};

