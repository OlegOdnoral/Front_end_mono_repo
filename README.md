[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-black.svg)](https://sonarcloud.io/dashboard?id=Front_end_mono_repo)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Front_end_mono_repo&metric=alert_status)](https://sonarcloud.io/dashboard?id=Front_end_mono_repo)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Front_end_mono_repo&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=Front_end_mono_repo)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Front_end_mono_repo&metric=ncloc)](https://sonarcloud.io/dashboard?id=Front_end_mono_repo)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Front_end_mono_repo&metric=bugs)](https://sonarcloud.io/dashboard?id=Front_end_mono_repo)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Front_end_mono_repo&metric=code_smells)](https://sonarcloud.io/dashboard?id=Front_end_mono_repo)
Front_end_mono_repo
# RankActive

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Angular CLI power-ups for modern development.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev)

[30-minute video showing all Nx features](https://nx.dev/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, .etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@rank-active/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `npm run affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `npm run affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `npm run dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

Some useful commands:

`ng generate lib episode-details --routing --lazy`

`ng generate module signup --project auth`

`ng generate c header --project auth --module header`

`ng generate lib mymodule --routing --lazy --parentModule=apps/myapp/src/myapp.module.ts`
