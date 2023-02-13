export type TechnicalFeedbackJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/feedbackStatusId' | '/feedbackReasonId';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     *
     * Use values from endpoint `/work-orders/technical-feedback-master-data`.
     *
     */
    value: string;
};
