export type MeasuringPointCharacteristic = {
    characteristicId: string;
    characteristic: string;
    /**
     * Class the characteristic was defined in
     */
    classId: string;
    valueId: string | null;
    value: string | null;
};
