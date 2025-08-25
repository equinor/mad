export const mockAuthResponse = {
    type: "success",
    params: {
        access_token: "mock-access-token",
        token_type: "Bearer",
        expires_in: 3600,
    },
};

export const mockErrorResponse = {
    type: "error",
    errorCode: "mock_error",
    errorDescription: "Mock error occurred",
};
