/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MaintenanceRecordExtendRequiredEnd = {
    /**
     * The extended required end date of the failure report
     */
    requiredEndDate: string;
    /**
     * Title of the risk assessment done for the extension
     */
    riskAssessmentTitle: string;
    /**
     * The text should describe the risk assessment done
     */
    riskAssessmentText: string;
    /**
     * The activity code defines the reason for the extension. `A121`= Lack of resources, `A122`= Lack of spares, `A123`=Maintenance access and `A124`=Failure development time
     */
    activityCodeId: 'A121' | 'A122' | 'A123' | 'A124';
    /**
     * The group the activityCodeId belongs to. Currently, only a single value is possible
     */
    activityCodeGroupId: 'PM-ACB-1';
};

