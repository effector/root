import { createDomain as domain } from 'effector';

export * from 'effector';
var rootDomain = domain('root', { name: 'root', sid: 'effector-root' }),
  createDomain = rootDomain.domain,
  createEffect = rootDomain.effect,
  createEvent = rootDomain.event,
  createStore = rootDomain.store;
export {
  createDomain,
  createEffect,
  createEvent,
  createStore,
  rootDomain as root,
};
