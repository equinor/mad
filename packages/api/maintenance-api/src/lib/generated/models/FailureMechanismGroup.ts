/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FailureMechanism } from "./FailureMechanism";

export type FailureMechanismGroup = {
  failureMechanismGroupId: string;
  failureMechanismGroup: string;
  items: Array<FailureMechanism>;
};
