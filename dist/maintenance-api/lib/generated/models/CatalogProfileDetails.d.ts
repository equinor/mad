import type { DetectionMethodGroup } from './DetectionMethodGroup';
import type { FailureMechanismGroup } from './FailureMechanismGroup';
import type { FailureModeGroup } from './FailureModeGroup';
export type CatalogProfileDetails = {
    detectionMethods: Array<DetectionMethodGroup>;
    failureModes: Array<FailureModeGroup>;
    failureMechanisms: Array<FailureMechanismGroup>;
};
