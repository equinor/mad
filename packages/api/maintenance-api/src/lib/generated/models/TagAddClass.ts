/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TagCharacteristicAdd } from './TagCharacteristicAdd';

export type TagAddClass = {
    /**
     * The class which contains the characteristics
     */
    classId: string;
    /**
     * Specific characteristics in the class to define a value for
     */
    characteristics?: Array<TagCharacteristicAdd>;
};

