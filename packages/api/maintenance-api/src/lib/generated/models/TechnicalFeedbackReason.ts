/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TechnicalFeedbackReason = {
    feedbackReasonId: string;
    feedbackReason: string;
    requiredMaintenanceRecordType:
        | "modification-proposal"
        | "failure-report"
        | "activity-report"
        | null;
};
