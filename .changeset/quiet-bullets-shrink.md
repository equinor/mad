---
"@equinor/mad-core": patch
---

Fixed oversized list markers on the Release notes and What's new screens (#912). After the move to
`react-native-enriched-markdown` in 0.21.2, the bullet size was carried over from the old
font-size-based styling, producing 48pt markers that overlapped the item text. Bullets are now
correctly sized, ordered-list numbers use the theme text color, and blockquotes are styled with
theme borders. The markdown style is now built against the library's `MarkdownStyle` type so invalid
style keys are caught at compile time.
