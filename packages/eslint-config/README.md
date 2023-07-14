# Shared ESLint configuration for js projects

This [ESLint](https://eslint.org/) configuration deactivates all formatting rules of ESLint and makes sure that [Prettier](https://prettier.io/) is used for code beautifying.

## Integrate into new project

1. Install this package as devDependency

```sh
# with Yarn
$ yarn add -D @iden3/eslint-config

# with npm
$ npm i -D @iden3/eslint-config

# with pnpm
$ pnpm add -D @iden3/eslint-config
```

2. Install peer dependencies of this package in your project as devDependencies

Therefore, you can make use of the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):

```sh
# with Yarn
$ yarn dlx install-peerdeps --dev @iden3/eslint-config

# with npm
$ npx install-peerdeps --dev @iden3/eslint-config

#with pnpm
$ pnpm dlx install-peerdeps --dev @iden3/eslint-config
```

Instead, you can do this manually my adding all entries part of the `peerDependencies` property (see `package.json`).

3. Use ESLint config in your project

Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  extends: ["@iden3/eslint-config"],
};
```