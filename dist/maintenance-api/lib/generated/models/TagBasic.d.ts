import type { TagMinimal } from './TagMinimal';
export type TagBasic = (TagMinimal & {
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
    /**
     * Deprecated 01.2021 - Use locationId instead
     * @deprecated
     */
    areaId: string;
    /**
     * Deprecated 01.2021 - Use location instead
     * @deprecated
     */
    area: string;
    catalogProfileId: string;
});
