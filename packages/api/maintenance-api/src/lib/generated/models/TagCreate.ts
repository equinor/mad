/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LinearData } from './LinearData';

export type TagCreate = {
    tagId: string | null;
    parentTagId: string;
    tag: string;
    /**
     * The category the tag belongs to. Values: `A` = Hose Assembly,`C` = Cable,`D` = Circuit and Starter,`E` = Electric Field-equipment,`F` = Fire & Gas,`H` = Heat tracing,`I` = Instrument,`J` = Junction Box,`K` = Vehicle,`M` = Main equipment,`N` = Penetration,`O` = Surface Protection,`P` = Piping,`Q` = Pipe Support,`R` = Civil engineering facility,`S` = Special Item,`T` = Telecommunication,`U` = Pipeline,`V` = Manual Valve,`W` = Software Tag,`X` = Package and `Z` = Dummy Functional Location
     */
    tagCategoryId: 'A' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Z';
    systemId?: string;
    ABCId?: string;
    /**
     * Specific room for the asset
     */
    area?: string;
    /**
     * Structured location within the plant where the tag is located
     */
    locationId?: string;
    workCenterId?: string;
    workCenterPlantId?: string;
    planningPlantId?: string;
    plannerGroupId?: string;
    /**
     * Active statuses for the tag with space as separating character
     */
    activeStatusIds?: string;
    costWBSId?: string;
    startUpDate?: string | null;
    endOfUseDate?: string | null;
    catalogProfileId?: string | null;
    /**
     * The maintenance concept for the tag. More details planned to be available through endpoint /maintenance-concepts/{concept-id}
     */
    maintenanceConceptId?: string;
    linearData?: LinearData;
};

