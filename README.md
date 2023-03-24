# Monorepo Example for React Typescript Projects

## Key points:

1. lerna && yarn workspace
   share dependencies, link packages together.
2. npmjs organization `@webee/<topic>-<name>`
   packages organization.
3. package.json/dependencies
4. tsconfig.js/compilerOptions/paths
   make IDE [goto definition] to source instead of dist
5. vite.config.js/resolve/alias
   make sibling dependencies as source dependencies.

## packages:

`lerna list --all`
set `"private": true` for non-package project

## versioning and publishing

https://github.com/lerna/lerna
https://lerna.js.org/docs/features/version-and-publish

## git

commitizen
