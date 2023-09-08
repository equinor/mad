import { ObfuscatedUser, obfuscateUser } from "../encrypt";

describe("obfuscatedUser", () => {
    it("should return sha1 userId and correct lowercase domain", () => {
        const userId = "328a4ada-128c-4f2b-a78f-93f989be39dc";
        const userName = "normalUser@EQuinor.COM";
        const expected: ObfuscatedUser = {
            id: "660a558443f7bc7c597a2041795988b85c08e7e6",
            domain: "equinor.com",
        };
        const actual = obfuscateUser(userName, userId, true);
        expect(actual).toEqual(expected);
    });

    it("should return sha256 userId and correct lowercase domain", () => {
        const userId = "328a4ada-128c-4f2b-a78f-93f989be39dc";
        const userName = "normalUser@EQuinor.COM";
        const expected: ObfuscatedUser = {
            id: "e7e53599bb5992da89a21f25214e9ea3591460b8de3f7a1494bdb7208829ef84",
            domain: "equinor.com",
        };
        const actual = obfuscateUser(userName, userId, false);
        expect(actual).toEqual(expected);
    });

    it("should return sha256 userId and correct lowercase domain even though third argument is unspecified", () => {
        const userId = "328a4ada-128c-4f2b-a78f-93f989be39dc";
        const userName = "normalUser@EQuinor.COM";
        const expected: ObfuscatedUser = {
            id: "e7e53599bb5992da89a21f25214e9ea3591460b8de3f7a1494bdb7208829ef84",
            domain: "equinor.com",
        };
        const actual = obfuscateUser(userName, userId);
        expect(actual).toEqual(expected);
    });
});
