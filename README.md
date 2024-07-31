# Stock options calculator

A web app which calculates the estimated value over time of employee stock
options you have been allocated.

This calculator is aimed at people who are tax-resident in the UK except
Scotland (contributions welcome - see below), and who have share options in
UK-registered companies. It supports cases where you have options in multiple
companies, as well as multiple vesting schedules.

<!-- TODO: add URL of deployed website -->

<!-- TODO: add screenshots -->

The application is a standalone browser-based web application which does not
require a back end server. It is written in
[TypeScript](https://www.typescriptlang.org/) with [React](https://react.dev/),
and is built using [Vite](https://vitejs.dev/).

## Feature requests and feedback

First, please
[check if your issue has already been raised for this project](https://github.com/mauriceyap/stock-options-calculator/issues). If not, please do
[raise a new issue](https://github.com/mauriceyap/stock-options-calculator/issues/new/choose)
and provide as much context as possible.

## Getting started with development

### Dependencies

These need to be installed on your system:

1. [Node.js](https://nodejs.org/en/download/package-manager)
1. [Yarn](https://yarnpkg.com/getting-started/install) - this should usually
   just involve running `corepack enable`

### Developing

Clone this repository. Then in its directory, run:

```bash
yarn
```

Run the Vite dev server to see your changes in the browser:

```bash
yarn dev
```

Run all unit tests (if you are actively changing code covered by unit test, you
may find it useful to omit `--watch=false` to continuously run affected tests):

```bash
yarn test --watch=false
```

Run the linter:

```bash
yarn lint
```

## Contributing

Contributions are very welcome! Please fork this repository and open a pull
request.

## Licence

This project is distributed under the GNU AGPL v3 licence. Among other things,
it means that this code **cannot** be used in closed-source (proprietary)
software. See [LICENCE](LICENCE) for details.
