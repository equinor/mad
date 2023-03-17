# MAD - Mobile Application Delivery

This is a monorepo collecting many of the packages used in the Mobile Application Delivery team.

## Apps and packages:

| App / Package                                      | Description                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [Chronicles](./apps/chronicles/)                   | A storybook-like app for collecting many of the packages in the repo.                                     |
| [Components](./packages/components)                | React Native component library implementing [EDS](https://loop.equinor.com/en/stories/eds-design-system). |
| [Skia Draw](./packages/skia-draw)                  | Wrappers and utility components for implementing a drawing library in React Native.                       |
| [Maintenance API](./packages/api/maintenance-api/) | Typescript wrapper for the [Equinor Maintenance API](https://equinor.github.io/maintenance-api-docs/)     |
| [TSConfig](./packages/api/tsconfig)                | Global TSConfig used in our packages.                                                                     |
| [ESLint MAD](./packages/eslint-config-mad-custom)  | Linting rules used throughout MAD development.                                                            |

## Development

This turborepo uses [pnpm](https://pnpm.io) as a package manager. Start by cloning the repository and run
```
npm install -g pnpm
```

Head into the project root [package.json](./package.json) for a full list of commands.

## Useful Links
### Turborepo
Learn more about the power of Turborepo:

-   [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
-   [Caching](https://turbo.build/repo/docs/core-concepts/caching)
-   [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
-   [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
-   [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
-   [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

### Repository tools
Check out the docs for some of the tools we use throughout the repository:
- [Changesets](https://github.com/changesets/changesets) - Versioning 
- [Jest](https://jestjs.io) - Testing
