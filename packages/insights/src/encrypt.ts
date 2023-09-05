import CryptoJS from "crypto-js";

/**
 * Obfuscate user identity using sha1 or sha256 encryption. Used in app insights
 * @param username - e.g. 'user@equinor.com'
 * @param userIdentifier - GUID
 * @param useSHA1 - default false. ONLY USE SHA1 IN SPECIAL CIRCUMSTANCES, AS SHA1 IS _NOT_ SECURE
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
    const hash = useSHA1 ? CryptoJS.SHA1(stringToEncrypt) : CryptoJS.SHA256(stringToEncrypt);
    return { id: hash.toString(), domain };
}
export type ObfuscatedUser = { id: string; domain: string };
