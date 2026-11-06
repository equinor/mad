---
"@equinor/mad-maintenance-api-ts-wrapper": patch
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

Fixed an intermittent bug causing a blur UI on Menus and similar components. The issue was primarily
reported on iOS 27 and seemed to be caused by the way Animation was implemented in the
PopinContainer component. Made modifications to the animation scaling to fix the bug
