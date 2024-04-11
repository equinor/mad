# MAD - Mobile Application Delivery

<p align="center">
  <img src="./assets/gitLogo.png">
</p>
<br />

This is a monorepo collecting many of the packages used in the Mobile Application Delivery team.

[![SCM Compliance](https://scm-compliance-api.radix.equinor.com/repos/equinor/mad/badge)](https://scm-compliance-api.radix.equinor.com/repos/equinor/mad/badge)


## 📦 Apps and packages:

| App / Package                                      | Description                                                                                               | Status                                                                                                                                                         |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Chronicles](./apps/chronicles/)                   | A storybook-like app for collecting many of the packages in the repo.                                     |                                                                                                                                                                |
| [Components](./packages/components)                | React Native component library implementing [EDS](https://loop.equinor.com/en/stories/eds-design-system). | [![npm](https://img.shields.io/npm/v/@equinor/mad-components?logo=npm)](https://www.npmjs.com/package/@equinor/mad-components)                                 |
| [Skia Draw](./packages/skia-draw)                  | Wrappers and utility components for implementing a drawing library in React Native.                       | [![npm](https://img.shields.io/npm/v/@equinor/react-native-skia-draw?logo=npm)](https://www.npmjs.com/package/@equinor/react-native-skia-draw)                 |
| [Maintenance API](./packages/api/maintenance-api/) | Typescript wrapper for the [Equinor Maintenance API](https://equinor.github.io/maintenance-api-docs/).    | [![npm](https://img.shields.io/npm/v/@equinor/mad-maintenance-api-ts-wrapper?logo=npm)](https://www.npmjs.com/package/@equinor/mad-maintenance-api-ts-wrapper) |
| [TSConfig](./packages/tsconfig)                    | Global TSConfig used in our packages.                                                                     |                                                                                                                                                                |
| [ESLint MAD](./packages/eslint-config-mad)         | Linting rules used throughout MAD development.                                                            | [![npm](https://img.shields.io/npm/v/@equinor/eslint-config-mad?logo=npm)](https://www.npmjs.com/package/@equinor/eslint-config-mad)                           |
| [Navigation](./packages/navigation)                | Extension package of react native navigation that adds functionality used in our apps.                    | [![npm](https://img.shields.io/npm/v/@equinor/mad-navigation?logo=npm)](https://www.npmjs.com/package/@equinor/mad-navigation)                                 |
| [Insights](./packages/insights)                    | Wrapper package providing functionality for adding Azure application insights to your app.                | [![npm](https://img.shields.io/npm/v/@equinor/mad-insights?logo=npm)](https://www.npmjs.com/package/@equinor/mad-insights)                                     |
| [Digital Field Worker](./packages/dfw)             | Component library for the Digital Field Worker apps.                                                      | [![npm](https://img.shields.io/npm/v/@equinor/mad-dfw?logo=npm)](https://www.npmjs.com/package/@equinor/mad-dfw)                                               |

## 👨‍💻 Development

### ⏱️ Getting started

This turborepo uses [yarn](https://classic.yarnpkg.com/) as a package manager. Start by cloning the repository
and run

```
npm install -g yarn
```

Install dependencies, run

```
yarn
```

You can build only the packages you work on, but if you want to build everything to start with, run

```
yarn build:all
```

### 👷‍♀️ Working on a package

Packages in the repository usually have some common scripts to make development easier. These are
labeled by the following keywords : `build`, `test`, `dev`, and `lint`.

The `dev` commands wrap package specific needs into a single command for development. Take for
example the [MAD Components](./packages/components/) package. Since any change in its code requires
a build for the [MAD Chronicles](./apps/chronicles/) app to refresh, we define the `dev` script in
the components package to build with the `watch` flag. A developer working on the component library
does not need to bother with these details, so running

```
yarn dev:chronicles
yarn dev:components
```

is all that is required.

This is how development on the packages is set up. With some exceptions, you can run any of these
scripts with

```
yarn {keyword}:{package-alias}
```

Head into the project root [package.json](./package.json) for a full list of all commands.

### 🙏 Contributing to the repository

#### Branching

We use
[Trunk-based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development)
in this repository. Branching is done in and out of the `main` branch for each update.

#### Pull requests

Pull requests into main should as a rule of thumb ALWAYS contain a changeset (see:
[Changesets](https://github.com/changesets/changesets)). You create these by running

```
yarn changeset
```

and follow the promts. This way, changelogs and version bumps are automatically handeled. Also note
that we use
[semantic](https://gist.githubusercontent.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716/raw/e75b1b9536ee5ee82e2ec0ba8948d8f8238488c3/semantic-commit-messages.md)
pull request titles. These are verified automatically during PR linting.

### 🚧 Handling Deprecated Code

When a piece of code is marked as deprecated, it means that it's not recommended for use and may be
removed in a future update. Here are the rules that are followed for deprecated code:

1. **Marking Deprecated Code**: JSDoc comments are used to mark deprecated code. Above the
   Deprecated code, we add a comment in the following format:

```javascript
/**
 * @deprecated DD.MM.YYYY - This will not be available 6 months after deprecation. Use `alternative` instead.
 */
```

2. **Time Frame**: Deprecated code will be kept for at least 6 months after deprecation. This means
   that if a piece of code is deprecated on 01.01.2021, it will be removed on 01.07.2021 at the
   earliest.

3. **Alternative Solutions**: Whenever possible, an alternative solution will be provided in the
   deprecation comment.

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

-   [Changesets](https://github.com/changesets/changesets) - Versioning
-   [Jest](https://jestjs.io) - Testing
-   [tsup](https://tsup.egoist.dev) - Building
