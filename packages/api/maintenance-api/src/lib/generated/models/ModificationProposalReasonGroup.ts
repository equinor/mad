/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ModificationProposalReasonItem } from "./ModificationProposalReasonItem";

export type ModificationProposalReasonGroup = {
    reasonGroupId: string;
    reasonGroup: string;
    reasons: Array<ModificationProposalReasonItem>;
};
