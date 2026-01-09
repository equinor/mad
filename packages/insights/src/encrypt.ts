import CryptoJS from "crypto-js";

/**
 * Obfuscate user identity using SHA-256 hashing. Used in app insights.
 * @param username - e.g. 'user@equinor.com'
 * @param userIdentifier - GUID
 * @param useSHA1 - deprecated; ignored. SHA-1 is not secure and is no longer supported.
 */
export function obfuscateUser(
    username: string,
    userIdentifier: string,
    /**@deprecated */
    useSHA1?: boolean,
): ObfuscatedUser {
    let domain: string;
    if (username.includes("@") === false) domain = "no domain";
    else domain = username.split("@")[1].toLowerCase();

    const stringToEncrypt = `${userIdentifier}`;
    const hash = CryptoJS.SHA256(stringToEncrypt);
    return { id: hash.toString(), domain };
}
export type ObfuscatedUser = { id: string; domain: string };
