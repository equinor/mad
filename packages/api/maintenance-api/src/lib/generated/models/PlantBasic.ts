/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PlantBasic = {
    /**
     * Plant for maintenance process
     */
    plantId?: string;
    /**
     * Name of plant
     */
    plant?: string;
    /**
     * Plant used to plan the maintenance work. Usually, same as `plantId` but there are some cases were one `planningPlantId` is used across multiple `plantId`.
     */
    planningPlantId?: string;
    /**
     * Country code according to ISO 3166
     */
    countryCode?: string;
    /**
     * Country name
     */
    country?: string;
    /**
     * Plant is valid for Non-CATS time recording
     */
    allowSimplifiedTimeAndProgress?: boolean;
};

