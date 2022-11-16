# mad

Experimental monorepo for the Mobile Application Development team

## Initializing new projects / packages

Best practice when initializing new projects and packages is to use [NX generators](https://nx.dev/plugin-features/use-code-generators).

It is advised to use the NX Console VSCode extension to run these, but in case you prefer to use the nx cli, see the list below for a list common generators currently installed in the workspace:

**NB!:**

> You should always verify the outputs of the generator before actually running them. Run the generator command with the `--dry-run` flag to do this.

### Plain Javascript / Typescript libraries

`nx generate @nrwl/js:library some-ts-library --directory=someDirectory --buildable`
