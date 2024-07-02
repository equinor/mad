/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MeasuringPointCreate = {
    /**
     * Description of the measuring point
     */
    measuringPoint?: string;
    /**
     * Required to input either tag or equipment
     */
    tagId?: string | null;
    /**
     * Required to input either tag or equipment
     */
    tagPlantId?: string;
    /**
     * Required to input either tag or equipment
     */
    equipmentId?: string;
    /**
     * Describes the position of the measuring point in relation to the technical object
     */
    measuringPosition?: string;
    /**
     * Required to input either quantitativeCharacteristicId or qualitativeCodeGroupId
     */
    quantitativeCharacteristicId?: string;
    /**
     * Key used to identify a measuring point category
     * `R` - Process Inspection Meas. Point
     * `M` - MeasPoint (general)
     * `B` - PM General M&C (Warning)
     *
     */
    categoryId?: string;
    /**
     * Required to input either quantitativeCharacteristicId or qualitativeCodeGroupId
     */
    qualitativeCodeGroupId?: string;
};

