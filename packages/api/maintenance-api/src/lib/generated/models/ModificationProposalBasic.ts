/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ModificationProposalSimple } from "./ModificationProposalSimple";

export type ModificationProposalBasic = ModificationProposalSimple & {
  text: string;
  plannerGroup: string;
};
