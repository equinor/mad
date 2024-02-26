/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceActivity = {
    activityId: string;
    activityGroupId: string;
    activityGroup: string;
    activityTypeId: string;
    activityType: string;
    /**
     * Title of the maintenance activity
     */
    activityDescription: string;
    /**
     * Multi-line text describing the maintenance activity
     */
    text: string;
    disciplineId: string;
    discipline: string;
    /**
     * Max interval length as ISO8601 duration
     */
    maxInterval: string;
    /**
     * Refers to specific requirements
     */
    maxIntervalJustification: string;
    /**
     * Recommended interval length as ISO8601 duration
     */
    recommendedInterval: string;
    /**
     * Describes what has influenced the recommended interval
     */
    recommendedIntervalDescription: string;
    /**
     * Initial interval length as ISO8601 duration
     */
    initialInterval: string;
    /**
     * Describes what has influenced the initial interval
     */
    initialIntervalDescription: string;
};

