/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CharacteristicAddActivityReport } from './CharacteristicAddActivityReport';
import type { MaintenanceRecordActivityCreate } from './MaintenanceRecordActivityCreate';

export type ActivityReportCreate = {
    /**
     * Required to input either tag or equipment
     */
    tagId?: string | null;
    /**
     * Required to input either tag or equipment
     */
    tagPlantId?: string;
    /**
     * Required to input either tag or equipment
     */
    equipmentId?: string;
    /**
     * If workCenter is not provided, it will use default defined on tag/equipment
     */
    workCenterId?: string;
    /**
     * If workCenter is not provided, it will use default defined on tag/equipment
     */
    workCenterPlantId?: string;
    title: string;
    text: string | null;
    /**
     * If isOpen is not provided, it will be set by default to false
     */
    isOpen?: boolean;
    /**
     * Optional parameter used in special cases where the failure report was created at an earlier time. Should not be a date in the future
     */
    createdDateTime?: string | null;
    /**
     * Activities to add to the activity report on creation
     */
    activities?: Array<MaintenanceRecordActivityCreate>;
    /**
     * Defines a relationship to a specific part of a work order
     */
    relatedWorkOrder?: {
        /**
         * Work order id this activity report is related to
         */
        workOrderId?: string;
        /**
         * Defines the type of relationship to the work order
         */
        source?: 'ObjectList' | 'TechnicalFeedback';
        /**
         * Reference to the specific element the relationship will be defined for. The specific format for this value will depend on the `source` type and the value should be found using lookup of the work order.
         *
         * SourceId comes in the format 'XX-1234567-1'. XX denotes whether the object comes from the Object List directly ("OL"), or from Technical Feedback ("TF").
         *
         * The 7 digits are an internal SAP id of this object list, uniquely identifying the Object List of your work order.
         *
         * The last digit is the counter of the object list, identifying the line in the Object List.
         *
         */
        sourceId?: string;
        /**
         * For source `TechnicalFeedback`, `sourceId` needs to be supplied.
         */
        technicalFeedbackParameters?: {
            statusId?: string;
            reasonId?: string | null;
        };
    };
    characteristics?: {
        /**
         * The class which contains the characteristics
         */
        classId?: string;
        /**
         * Specific characteristics in the class to define a value for
         */
        characteristics?: Array<CharacteristicAddActivityReport>;
    };
};

