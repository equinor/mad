/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RelationshipURLReferencesAdd = {
    /**
     * URL for the reference
     */
    url: string;
    /**
     * Title describing the URL reference
     */
    title?: string;
    /**
     * Id of the document to relate the url reference to
     */
    documentId?: string | null;
    /**
     * Characteristics are
     */
    characteristics?: Array<{
        /**
         * Id of characteristic containing additional metadata. For example ADDITIONAL_REFERENCE_B30 or DISCIPLINE_B30
         */
        characteristicId?: string;
        valueId?: string;
    }>;
};

