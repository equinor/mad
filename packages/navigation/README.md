# Mad Navigation

Mad Navigation is a layer on top of React Navigation that provides additional features to provide a
better experience for developers.

### Features

-   Display custom sub-headers automatically on screens.
-   Add onRouteChange prop to navigation containers

### Docs

For more detailed information about how to use the package, head to our
[documentation page](equinor.github.io/mad/docs/mad-navigation/introduction)

### Development

This package has custom navigators created by following
[this guide](https://reactnavigation.org/docs/custom-navigators). If you want to add additional
navigators or update the current navigators to be in sync with React Navigation’s navigators, follow
these steps:

1. Go to
   [React Navigation’s repository](https://github.com/react-navigation/react-navigation/tree/main/packages)
   and find the navigator you want to copy (usually located within `package-name/src/navigators`
   directory). Copy the source code.
2. paste the source code into this package and update imports. Imports that are not provided by the
   react navigation package should be created manually (usually only the `XNavigationConfig`). The
   props can also be recreated by exported types from react navigation + your copied
   `XNavigationConfig`.
3. Modify the `descriptors` using the `createMadDecorators` function.
4. Use the modified descriptors instead of the original descriptors in the return function
