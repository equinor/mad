/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StatusMinimal } from './StatusMinimal';

export type Status = (StatusMinimal & {
    /**
     * Some status may be ordered in a sequence and this indicates the position
     */
    statusOrder: number | null;
    isActive: boolean;
    activatedDateTime: string | null;
});

