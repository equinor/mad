import { OpenAPI } from "./generated/core/OpenAPI";

type ApiConfig = {
    baseUrl: string;
    tokenFetcher: () => Promise<string>;
};

/**
 * Initializes the maintenance api wrapper with the provided configuration.
 * Call this before any endpoints are called to ensure tokens and base url is set up correctly.
 *
 * @param {ApiConfig} configuration - Configuration object.
 * @param {string} configuration.baseUrl - The base url of the maintenance API.
 * @param {() => Promise<string>} configuration.tokenFetcher - The method for fetching tokens. This is called once for every endpoint.
 */
export const initializeMaintenanceApi = ({ baseUrl, tokenFetcher }: ApiConfig) => {
    OpenAPI.BASE = baseUrl;
    OpenAPI.TOKEN = tokenFetcher;
};

/**
 *
 * @returns {string} The current version of the maintenance API
 */
export const maintenanceApiVersion = (): string => OpenAPI.VERSION;
