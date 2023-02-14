/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkOrderOperationJsonPatch = {
  /**
   * JSON Patch operation according to RFC6902
   */
  op: "replace";
  /**
   * Path indicating the property to be impacted by the operation
   */
  path:
    | "/isCompleted"
    | "/actualPercentageComplete"
    | "/schedulingStartConstraintId"
    | "/schedulingStartConstraintDateTime"
    | "/schedulingFinishConstraintId"
    | "/schedulingFinishConstraintDateTime";
  /**
   * Value to be assigned to a resource property based on the operation and path.
   *
   * /schedulingStartConstraintId allowed values:
   * - `MSO` - Must start on
   * - `SNET` - Start no earlier than
   * - `SNLT` - Start no later than
   *
   * /schedulingFinishConstraintId allowed values:
   * - `MFO ` - Must finish on
   * - `FNET` - Finish no earlier than
   * - `FNLT` - Finish no later than
   *
   */
  value: string | boolean | number;
};
