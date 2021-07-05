# effector-root

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io)

**Do not depend on this package in your _libraries_!**

## Motivation

Sometimes we developed our apps and just afterwards start thinking about **SSR** and **testing**. For these purposes any effector app need to have root domain.
Usually we just manually update declarations. For example, from `createEvent` to `rootDomain.createEvent`. It takes time. effector-root provides you the possibility to have all units attached to the root domain without any manual actions.

## Usage

1. Replace all imports of `effector` to `effector-root`. You can do it by yourself or with babel plugin

2. To retrieve our app root domain we need just to import it.

```js
import { root, createEvent, attach, fork } from 'effector-root';
```

### Create React App and macros support

Replace all imports of `effector` to `effector-root/macro` to automatically add [sid]:

[sid]: https://effector.dev/docs/api/effector/babel-plugin#sid

```js
import { root, createEvent, attach, fork } from 'effector-root/macro';
```

> Note: [babel-plugin-macros] do not support `import * as name`, so
> Your import `import * as effector from 'effector-root/macro` won't work

[babel-plugin-macros]: https://github.com/kentcdodds/babel-plugin-macros

### Compat

You can easily use `effector/compat` in your application with `effector-root`, just:

```ts
import { root, createEvent, attach, fork } from 'effector-root/compat';
```

> Note: `root` domain from `effector-root/compat` is not the same domain as from `effector-root`

### How to auto replace all imports of effector to effector-root using babel plugin

1. Install [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
2. Add to plugins:
```ts
['module-resolver', { alias: { effector: 'effector-root' } } ]
```

