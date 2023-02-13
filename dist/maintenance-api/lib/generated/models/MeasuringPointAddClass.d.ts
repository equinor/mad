import type { CharacteristicAdd } from './CharacteristicAdd';
export type MeasuringPointAddClass = {
    /**
     * The class which contains the characteristics
     */
    classId: string;
    /**
     * Specific characteristics in the class to define a value for
     */
    characteristics?: Array<CharacteristicAdd>;
};
