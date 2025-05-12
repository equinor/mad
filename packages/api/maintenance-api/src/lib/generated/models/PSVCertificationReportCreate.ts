/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PSVCertificationReportCreate = {
    /**
     * Operation ID for the certification report.
     */
    'operation-id': string;
    /**
     * Cold design set point in Bar. From measuring point.
     */
    coldDesignSetPoint: number;
    detectionMethodGroupId: string;
    detectionMethodId?: string;
    failureMechanismGroupId: string;
    failureMechanismId?: string;
    /**
     * Calibration date.
     */
    calibrationDate?: string;
    /**
     * Calibration time.
     */
    calibrationTime?: string;
    /**
     * Corrosion detected.
     */
    corrosion: boolean;
    /**
     * Corrosion description, only required if `corrosion` is set to True.
     */
    corrosionDescription?: string;
    /**
     * Mechanical damage detected.
     */
    mechanicalDamage: boolean;
    /**
     * Mechanical damage description, only required if `mechanicalDamage` is set to True.
     */
    mechanicalDamageDescription?: string;
    /**
     * Pollution detected.
     */
    pollution: boolean;
    /**
     * Pollution description, only required if `pollution` is set to True.
     */
    pollutionDescription?: string;
    /**
     * Manufacturer serial number for pretest.
     */
    manufacturerSerialNumber?: string;
    /**
     * Manufacturer part number for pretest.
     */
    manufacturerPartNumber?: string;
    /**
     * Pretest opening pressure in Bar.
     */
    pretestOpeningPressure?: number;
    /**
     * Pretest closing pressure in Bar.
     */
    pretestClosingPressure?: number;
    /**
     * Pretest pressure test method.
     */
    pretestPressureTestMethod?: 'Pop' | 'Simmer';
    /**
     * Pretest leakage rate in Bubbles per minute.
     */
    pretestLeakageRate: number;
    /**
     * Pretest valve changed. If set to `True` Valve changed has been set to ‘Yes’. Note that pre-test values are recorded against the existing equipment and final test values will be recorded against the new equipment.
     */
    pretestValveChanged: boolean;
    /**
     * New valve equipment number. Only required if `pretestValveChanged` equals `True`
     */
    newValveEquipmentNumber?: string;
    /**
     * New valve serial number. Only required if `pretestValveChanged` equals `True`
     */
    newValveSerialNumber?: string;
    /**
     * New valve part number. Only required if `pretestValveChanged` equals `True`
     */
    newValvePartNumber?: string;
    /**
     * Pretest 2nd opening pressure in Bar. Only required if `pretestValveChanged` equals `False`
     */
    pretest2ndOpeningPressure?: number;
    /**
     * Pretest 2nd closing pressure in Bar. Only required if `pretestValveChanged` equals `False`
     */
    pretest2ndClosingPressure?: number;
    /**
     * Pretest 2nd pressure test method. Only required if `pretestValveChanged` equals `False`
     */
    pretest2ndPressureTestMethod?: 'Pop' | 'Simmer';
    /**
     * Additional information for pretest.
     */
    pretestAdditionalInformation?: string;
    /**
     * Overhaul work scope. Only required if `pretestValveChanged` equals `False`
     */
    overhaulWorkScope?: 'Functional Test' | 'Full overhaul';
    /**
     * Overhaul parts condition. Only required if `pretestValveChanged` equals `False` & `overhaulWorkScope` equals `Full overhaul`
     */
    overhaulPartsCondition?: 'Ok' | 'Not ok';
    /**
     * Overhaul parts condition description. Only required if `pretestValveChanged` equals `False` & `overhaulWorkScope` equals `Full overhaul` & `overhaulPartsCondition` equals `Not ok`
     */
    overhaulPartsConditionDescription?: string;
    /**
     * Overhaul internal pollution. Only required if `pretestValveChanged` equals `False` & `overhaulWorkScope` equals `Full overhaul`
     */
    overhaulInternalPollution?: 'Ok' | 'Not ok';
    /**
     * Overhaul internal pollution description. Only required if `pretestValveChanged` equals `False` & `overhaulWorkScope` equals `Full overhaul` & `overhaulInternalPollution` equals `Not ok`
     */
    overhaulInternalPollutionDescription?: string;
    /**
     * Final test opening pressure in Bar.
     */
    finalTestOpeningPressure?: number;
    /**
     * Final test closing pressure in Bar.
     */
    finalTestClosingPressure?: number;
    /**
     * Final test pressure test method.
     */
    finalTestPressureTestMethod?: 'Pop' | 'Simmer';
    /**
     * Final test blowdown adjust in Teeths.
     */
    finalTestBlowdownAdjust?: number;
    /**
     * Final test leakage rate in Bubbles per minute.
     */
    finalTestLeakageRate: number;
    /**
     * Final test backpressure in Bar.
     */
    finalTestBackpressure?: number;
};

