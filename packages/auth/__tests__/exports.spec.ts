import * as exported from "../src/";

describe("exports", () => {
    it("should not export _reset fn from auth.ts", () => {
        expect((exported as any)._reset).toBeFalsy();
    });

    it("should have the following exports", () => {
        expect(exported.initiateAuthenticationClient).toBeTruthy();
        expect(exported.authenticateInteractively).toBeTruthy();
        expect(exported.authenticateSilently).toBeTruthy();
        expect(exported.authenticationClientExists).toBeTruthy();
        expect(exported.getAccount).toBeTruthy();
        expect(exported.signOut).toBeTruthy();
        expect(exported.useAccount).toBeTruthy();
        expect(exported.useAuthenticate).toBeTruthy();
        expect(exported.LoginButton).toBeTruthy();
    });
});
