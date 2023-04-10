/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DetectionMethod } from "./DetectionMethod";

export type DetectionMethodGroup = {
    detectionMethodGroupId: string;
    detectionMethodGroup: string;
    items: Array<DetectionMethod>;
};
