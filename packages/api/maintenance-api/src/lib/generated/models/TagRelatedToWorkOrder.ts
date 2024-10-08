/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagMinimal } from './TagMinimal';

export type TagRelatedToWorkOrder = (TagMinimal & {
    equipmentId: string;
    equipment: string;
    /**
     * Defines the type of relationship to the work order
     */
    source: 'ObjectList';
    /**
     * Reference to the specific element the relationship will be defined for. The specific format for this value will depend on the `source` type and the value should be found using lookup of the work order.
     *
     * SourceId comes in the format 'XX-1234567-1'. XX denotes whether the object comes from the Object List directly ("OL"), or from Technical Feedback ("TL").
     *
     * The 7 digits are an internal SAP id of this object list, uniquely identifying the Object List of your work order.
     *
     * The last digit is the counter of the object list, identifying the line in the Object List.
     *
     */
    sourceId: string;
    relatedOperations?: Array<any>;
});

