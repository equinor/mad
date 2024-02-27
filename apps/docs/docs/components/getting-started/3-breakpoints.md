---
sidebar_label: Breakpoints
description: Integrating the built-in functionality for breakpoints into your app!
sidebar_position: 3
---

# Breakpoints

Screens come in different sizes, and our component library is made to be viewed on both large and
small. You might therefore often find yourself having to style or render compoents conditionally
based on screen size. This is where breakpoints and the `useBreakpoint` hook comes in.

## Using the `useBreakpoint` hook

The `useBreakpoint` hook returns
[breakpoint values from Tailwind CSS](https://tailwindcss.com/docs/responsive-design) based on the
current app screen width. This lets you customize your rendering logic like this:

```tsx
import { useBreakpoint, Typography } from "@equinor/mad-components";

const MyConditionalComponent = () => {
    const breakpoint = useBreakpoint();

    // If device width is less than 640
    if (breakpoint === "xs") {
        return <Typography>You are probably using your phone</Typography>;
    }
    // If it is larger
    return <Typography>Yo this screen is large!</Typography>;
};
```
