import { Environment } from "../types";

const scopesRecord: Record<Environment, string[]> = {
    dev: ["690a86bf-838c-4591-909c-9f45219445ab/user_impersonation"],
    test: ["830a7388-cd89-4e25-a631-bd615bf225a4/user_impersonation"],
    qa: ["29c0f71f-8db5-41b4-b285-dba2b4e765fe/user_impersonation"],
    prod: ["0a429637-3fe1-4452-bd95-c87923ba340b/user_impersonation"],
};

export const getMadCommonScopes = (env: Environment) => scopesRecord[env];

export const getMadCommonBaseUrl = (env: Environment) =>
    `https://api-mad-api-${env.toLowerCase()}.radix.equinor.com/api/v1.1`;
