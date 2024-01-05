/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { URLReference } from './URLReference';

export type URLReferenceWithCharacteristics = (URLReference & {
    /**
     * Characteristics are
     */
    characteristics?: Array<{
        characteristicId?: string;
        characteristic?: string;
        valueId?: string;
        value?: string;
        classId?: string;
    }>;
});

