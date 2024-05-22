---
sidebar_label: Implement useLanguage
description: Learn how to implement useLanguage!
---

# Implement `useLanguage`

_note: If your app only supports one language, you can skip this step_

If you have language related state in your app, we recommend removing it, and use `useLanguage` from
`@equinor/mad-core` instead.

```tsx
const { language } = useLanguage();
```

This hook will give you information about which language the app is currently using.

One way to implement this, is to create a `useDictionary` hook, to select which json file to read
static text from.

```tsx
import { useLanguage } from "@equinor/mad-core";
import * as no from "../resources/language/no.json";
import * as en from "../resources/language/en.json";

export const useDictionary = () => {
    const { language } = useLanguage();
    switch (language.code) {
        case "no":
            return no;
        default:
            return en;
    }
};
```

```tsx
const Example = () => {
    const dictionary = useDictionary();
    return <Typography>{dictionary.example}</Typography>;
};
```

While `@equinor/mad-core` should handle language selection for you, you can always add code to
select language by using `setSelectedLanguage` from `@equinor/mad-core`. You also have access to
`getLanguage` and `getIsLanguageSelected`, if you need access to those methods in contexts where the
`useLanguage` hook cannot be used.
