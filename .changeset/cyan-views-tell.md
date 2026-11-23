---
"@equinor/mad-maintenance-api-ts-wrapper": patch
"@equinor/eslint-config-mad": patch
"@equinor/react-native-mad-tag-ocr": patch
"@equinor/mad-components": patch
"@equinor/mad-navigation": patch
"@equinor/react-native-skia-draw": patch
"@equinor/mad-insights": patch
"@equinor/mad-chronicles": patch
"@equinor/mad-toast": patch
"@equinor/mad-auth": patch
"@equinor/mad-core": patch
"@equinor/mad-dfw": patch
"@equinor/mad-platform-docs": patch
---

eslint peer deps updated to allow apps to use later versions of eslint plugin. Rmoved replace
workspace:\* script from release workflow to ensure packages are locked to existing versions to
maintain backward compatibility
