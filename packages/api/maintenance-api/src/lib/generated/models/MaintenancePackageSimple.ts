/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenancePackageSimple = {
    /**
     * The maintenance strategy id for the package
     */
    maintenanceStrategyId: string;
    /**
     * The SAP internal id for the package
     */
    packageId: string;
    /**
     * Short code representing the cycle length. Example values for maintenance strategy0 `1101-1` 01,03,06,12,24,48,96,X5,02,04,08,16,32,64,X2,09,18,36,72,X3,15,30,60,X1,X6,X4,X7
     */
    cycleId: string;
    /**
     * Name of cycle
     */
    cycle: string;
};

