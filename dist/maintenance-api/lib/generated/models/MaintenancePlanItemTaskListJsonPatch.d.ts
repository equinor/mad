export type MaintenancePlanItemTaskListJsonPatch = {
    /**
     * JSON Patch operation according to RFC6902
     */
    op: 'replace';
    /**
     * Path indicating the property to be impacted by the operation
     */
    path: '/taskList';
    /**
     * Value to be assigned to a resource property based on the operation and path.
     *
     * Path specific information:
     * - /taskList - Title of the task list of maintenance plan item with max-length 40 characters
     *
     */
    value: string;
};
