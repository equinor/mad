/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderOperationTimeTicketAdd = {
    /**
     * The work performed for the operation. Duration as defined in ISO8601
     */
    workHours: string;
    /**
     * New estimate of remaining work for the operation. In Duration format as defined in ISO8601
     */
    remainingWorkHours?: string;
    workStartDateTime?: string | null;
    workEndDateTime?: string | null;
    /**
     * Resource which performed the work. Default is based on Work order operation.
     */
    workCenterId?: string;
    /**
     * Resource which performed the work. Default is based on Work order operation.
     */
    workCenterPlantId?: string;
    /**
     * Title for time ticket
     */
    title?: string;
    /**
     * Multi-line description for the time ticket
     */
    text?: string;
};

