import { ExpoAuthSession } from "@equinor/mad-auth";
import { authenticate } from "../src/authenticate";
import { resetCancelledSession } from "../src/store/auth-session/resetCancelledSession";

jest.mock("@equinor/mad-auth", () => ({
    ExpoAuthSession: { authenticate: jest.fn() },
}));
jest.mock("../src/store/auth-session/resetCancelledSession", () => ({
    resetCancelledSession: jest.fn(),
}));

describe("authenticate", () => {
    it("delegates with the cancelled-session reset callback", async () => {
        const result = { account: { identifier: "id", username: "user" }, accessToken: "token" };
        jest.mocked(ExpoAuthSession.authenticate).mockResolvedValue(result);

        await expect(authenticate(["scope"])).resolves.toBe(result);

        expect(ExpoAuthSession.authenticate).toHaveBeenCalledWith(["scope"], {
            onAuthenticationCancelled: resetCancelledSession,
        });
    });
});
