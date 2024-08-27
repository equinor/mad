/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagHierachyItem } from './TagHierachyItem';
import type { TagHierarchyLevel1 } from './TagHierarchyLevel1';

export type TagHierarchyTree = (TagHierachyItem & {
    /**
     * Indicates if this object has more tags in its sub-hierarchy, but results have been constrained on
     * the `sub-hierarchy-limit` parameter.
     *
     */
    isEndNode?: boolean;
    subTagHierarchy: Array<TagHierarchyLevel1>;
});

