/* eslint-disable no-undef */
const { default: pluginTester } = require('babel-plugin-tester');

const baseCode = `
import { createStore, createEvent, createEffect, attach, restore, root } from './macro';
const fx = createEffect(() => 1);
const $data = createStore(0);
const was = createEvent();
const demo = root.createEvent();
const anotherFx = attach({
  effect: fx,
  source: $data,
  mapParams: (a) => a,
})
const $has = restore(was, "");
`;

pluginTester({
  pluginName: 'effector-root/macro',
  plugin: require('babel-plugin-macros'),
  root: __dirname,
  filename: __filename,
  babelOptions: { filename: __filename },
  snapshot: true,
  tests: {
    'add sid': {
      code: baseCode,
    },
    'add sid and loc': {
      code: baseCode,
      pluginOptions: {
        effectorRoot: {
          addLoc: true,
          addNames: true,
        },
      },
    },
  },
});
