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
     */
    sourceId: string;
});

