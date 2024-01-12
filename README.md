# genpod

GenPod - frontend app (low-code / no-code) for generating infra files and applications code-base, using Compage & GenVal.

## Development guidelines:

**Should leverage storybookjs, dhiwise, devcontainer.json, codiumAI + codeiumAI to develop GenPod. There are no exceptions/excuses in this selection.**

**Should leverage [DeepSource](https://app.deepsource.com/login), [Guardrails](https://dashboard.guardrails.io/login), [Snyk](https://app.snyk.io/login) in your forked repo itself and resolve all security issues within your forked repo and then only submit PR to upstream main repo.**

> Use ReactFlow + Zustand for canvas & state management.

> Use open API specifications for designing and developing any APIs - leverage [Insomnia](https://insomnia.rest/) tool for this.

> **Test-Driven development approach is mandatory**.

> Leverage tools like [cypress](https://www.cypress.io/), [miragejs](https://miragejs.com/), [microcks](https://microcks.io/) for functional testing (behavioral testing, api testing, E2E testing, etc.).

> Items should be configurable from one place (folder/file(s)) for - colors, styles, images, icons, charts (apache echart, react d3js), etc. This means that the common items should be organized so that they can be used anywhere in the code, and if changed in the future, they should be modified in one place, and that change should reflect in all places that are using those items. Looks like a properly organized structure is already provided in our licensed template; enhance the structure only if more organizing is required.

> Always check for the latest versions of dependency packages and update them - we already have scanning tools enabled on this repo. Look at the PRs & Security tab every week to check the security enhancement suggestions those tools provide and keep up with implementing them.

> Unit tests & build should be automatic via the CI pipeline.

> Should show code coverage for testing via codecov.

> Should follow openSSF standards and pass their suggestions.










# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

