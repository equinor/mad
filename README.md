# MAD - Mobile Application Delivery

This is a monorepo collecting many of the packages used in the Mobile Application Delivery team.

## 📦 Apps and packages:

| App / Package                                      | Description                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [Chronicles](./apps/chronicles/)                   | A storybook-like app for collecting many of the packages in the repo.                                     |
| [Components](./packages/components)                | React Native component library implementing [EDS](https://loop.equinor.com/en/stories/eds-design-system). |
| [Skia Draw](./packages/skia-draw)                  | Wrappers and utility components for implementing a drawing library in React Native.                       |
| [Maintenance API](./packages/api/maintenance-api/) | Typescript wrapper for the [Equinor Maintenance API](https://equinor.github.io/maintenance-api-docs/)     |
| [TSConfig](./packages/tsconfig)                    | Global TSConfig used in our packages.                                                                     |
| [ESLint MAD](./packages/eslint-config-mad-custom)  | Linting rules used throughout MAD development.                                                            |

## 👨‍💻 Development
### ⏱️ Getting started
This turborepo uses [pnpm](https://pnpm.io) as a package manager. Start by cloning the repository and run
```
npm install -g pnpm
```
 You can build only the packages you work on, but if you want to build everything to start with, run

 ```
 pnpm build:all
```

### 👷‍♀️ Working on a package

Packages in the repository usually have some common scripts to make development easier. These are labeled by the following keywords : `build`, `test`, `dev`, and `lint`.

The `dev` commands wrap package specific needs into a single command for development. Take for example the [MAD Components](./packages/components/) package. Since any change in its code requires a build for the [MAD Chronicles](./apps/chronicles/) app to refresh, we define the `dev` script in the components package to build with the `watch` flag. A developer working on the component library does not need to bother with these details, so running 

```
pnpm run:chronicles
pnpm dev:components
```

is all that is required.

This is how development on the packages is set up.
With some exceptions, you can run any of these scripts with 
```
pnpm {keyword}:{package-alias}
```

Head into the project root [package.json](./package.json) for a full list of all commands.

## 🔗 Useful Links
### 🚀 Turborepo
Learn more about the power of Turborepo:

-   [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
-   [Caching](https://turbo.build/repo/docs/core-concepts/caching)
-   [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
-   [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
-   [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
-   [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

### 🛠️ Repository tools
Check out the docs for some of the tools we use throughout the repository:
- [Changesets](https://github.com/changesets/changesets) - Versioning 
- [Jest](https://jestjs.io) - Testing
- [tsup](https://tsup.egoist.dev) - Building
