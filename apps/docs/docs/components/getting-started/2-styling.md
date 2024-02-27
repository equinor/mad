---
sidebar_label: Styling
description: Styling your app according to EDS conventions!
sidebar_position: 2
---

# Styling

Creating stylesheets that use EDS values is made to be easy and performant. Start by creating a
`EDSStyleSheet`, almost just like for a normal React Native `StyleSheet`:

```tsx
const tokenStyles = EDSStyleSheet.create(token => ({
    container: {
        backgroundColor: token.colors.container.background,
        borderRadius: token.geometry.border.containerBorderRadius,
    },
}));
```

We resolve our stylesheet in our components using the provided `useStyles` hook:

```tsx
const MyComponent = () => {
    const styles = useStyles(tokenStyles);
    return <View style={styles.container} />;
};
```

## Tokens

In the last example, notice that we passed `token` into our stylesheet. This is a resolved token
based on the current configuration of the app. This means that the value for
`token.colors.container` can change between light/dark mode without you having to worry about
anything 😎. The token values are specified by EDS, letting you only care about the semantics of
them.

## Passing props

Ideally, all styling, be it conditional or not should happen outside of our components to reduce
clutter. The `EDSStyleSheet.create` callback method accepts a second optional argument which allows
you to pass any additional props into the style sheet:

```tsx
// Notice that we type our second argument!
const tokenStylesWithProps = EDSStyleSheet.create((token, props: { color?: string }) => {
    const backgroundColor = color ?? token.colors.container.background;

    return {
        container: {
            backgroundColor,
        },
    };
});
```

We are then required by our `useStyle` hook to pass these props in with the `EDSStyleSheet` (this is
typechecked):

```tsx
const MyOtherComponent = () => {
    // Normally you'd pass some of your component props into this hook.
    const styles = useStyles(tokenStylesWithProps, { color: "red" });
    return <View style={styles.container} />;
};
```

This helps you contain your styling logic separately from your component logic. If the stylesheet
becomes large, you can even create your own style file (for example `MyComponent.style.tsx`) to have
the stylesheet in.
