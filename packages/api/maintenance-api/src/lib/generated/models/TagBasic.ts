/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagMinimal } from "./TagMinimal";

export type TagBasic = TagMinimal & {
    isInactive: boolean;
    parentTagId: string | null;
    systemId: string;
    system: string;
    ABCId: string;
    ABC: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId: string;
    location: string;
    catalogProfileId: string;
    /**
     * Specific room for the asset
     */
    area: string | null;
};
