/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubseaWorkOrderSimple } from './SubseaWorkOrderSimple';

export type SubseaWorkOrderBasic = (SubseaWorkOrderSimple & {
    text: string;
    /**
     * The type of work order it is an instance of
     */
    workOrderTypeId: 'subseaWorkOrder';
    plannerGroup: string;
    workCenter: string;
    /**
     * If there is a person responsible assigned
     */
    hasPersonResponsible: boolean;
    costWBSId: string;
    projectId: string;
    costNetworkId: string;
    costNetworkOperationId: string;
});

