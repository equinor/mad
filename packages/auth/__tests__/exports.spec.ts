import * as exports from "../src/index.ts";

describe("exports", () => {
    it("should not export _reset fn from auth.ts", () => {
        expect((exports as any)._reset).toBeFalsy();
    });

    it("should have the following exports", () => {
        expect(exports.initiateAuthenticationClient).toBeTruthy();
        expect(exports.authenticateInteractively).toBeTruthy();
        expect(exports.authenticateSilently).toBeTruthy();
        expect(exports.authenticationClientExists).toBeTruthy();
        expect(exports.getAccount).toBeTruthy();
        expect(exports.signOut).toBeTruthy();
        expect(exports.useAccount).toBeTruthy();
        expect(exports.useAuthenticate).toBeTruthy();
        expect(exports.LoginButton).toBeTruthy();
    });
});
