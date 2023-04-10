/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RelationshipToMaintenanceRecordAdd = {
    /**
     * Id of the maintenance record
     */
    recordId: string;
    /**
     * Defines the type of relationship to the work order
     */
    source?: "ObjectList" | "TechnicalFeedback";
    /**
     * Reference to the specific element the relationship will be defined for. The specific format for this value will depend on the `source` type and the value should be found using lookup of the work order.
     */
    sourceId?: string;
    /**
     * For source `TechnicalFeedback` these parameters are must be supplied.
     */
    technicalFeedbackParameters?: {
        statusId?: string;
        reasonId?: string;
    };
};
