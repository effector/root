'use strict';
var effector = require('effector/compat');

var rootDomain = effector.createDomain('root', {
  name: 'root',
  sid: 'effector-root',
});
var makeDomain = rootDomain.domain,
  makeEffect = rootDomain.effect,
  makeEvent = rootDomain.event,
  makeStore = rootDomain.store;

module.exports = Object.assign({}, effector, {
  createDomain: makeDomain,
  createEffect: makeEffect,
  createEvent: makeEvent,
  createStore: makeStore,
  root: rootDomain,
});
