export type ProblemDetails = {
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
    /**
     * Detailed information about error
     */
    readonly errors?: Record<string, any> | null;
};
