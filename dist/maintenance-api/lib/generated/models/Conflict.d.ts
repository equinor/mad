export type Conflict = {
    /**
     * Reference to HTTP status definition
     */
    type?: string | null;
    /**
     * Description of error
     */
    title?: string | null;
    /**
     * HTTP status code
     */
    status?: number | null;
    /**
     * Request id to be used for support
     */
    traceId?: string;
};
