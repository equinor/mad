---
"@equinor/mad-auth": minor
"@equinor/mad-core": minor
---

Add a high-level `authenticate` function that falls back from silent to interactive authentication.

`authenticateSilently` now remains silent and returns `null` when stored refresh credentials are
expired or invalid. Consumers that may prompt the user should use `authenticate`, exported by both
`@equinor/mad-auth` and `@equinor/mad-core`. Interactive resource authentication preserves the OIDC
scopes needed to replace invalid refresh credentials, and concurrent callers share a single browser
prompt.

Native consumers can be notified when the interactive fallback is cancelled or dismissed, including
when the authorization provider returns an explicit user-cancellation response. MAD Core uses this
signal to clear the unusable session and reset its navigator to the login screen without retaining
protected route history.
