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
    relatedWorkOrder?: Record<string, any>;
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

