/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordOverridePriority = {
    /**
     * Priority
     * * `L` - Low priority
     * * `M` - Medi. priority
     * * `H` - High priority
     * * `U` - Unprioritized
     * * `D` - Done
     *
     */
    priorityId: 'L' | 'M' | 'H' | 'U' | 'D';
    /**
     * Title of the risk assessment done for the priority override
     */
    riskAssessmentTitle: string;
    /**
     * The text should describe the risk assessment done
     */
    riskAssessmentText: string;
    /**
     * The activity code defines the reason for the override. `A111` = Incorrect ABC, `A112` = Abnormal situation and `A113` = Dummy FL/Missing FL
     */
    activityCodeId: 'A111' | 'A112' | 'A113';
    /**
     * The group the activityCodeId belongs to. Currently, only a single value is possible
     */
    activityCodeGroupId: 'PM-ACB-1';
};

