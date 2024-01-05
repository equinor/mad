/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CharacteristicValues } from './CharacteristicValues';

export type CharacteristicMinimal = {
    characteristicId: string;
    characteristic: string;
    /**
     * Range of allowed values for the characteristic
     */
    valueRange?: Array<CharacteristicValues>;
};

