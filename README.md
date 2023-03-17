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

This turborepo uses [pnpm](https://pnpm.io) as a package manager.

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

-   [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
-   [Caching](https://turbo.build/repo/docs/core-concepts/caching)
-   [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
-   [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
-   [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
-   [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

Some of the tooling beeing used in the repo:
|Task|Tool|
|----|----|
|bundler |[esbuild](https://esbuild.github.io) |
|versioning |[changesets](https://github.com/changesets/changesets)|
|build system |[turborepo](https://turbo.build/repo/docs)|
|tests|[jest](https://jestjs.io)|
