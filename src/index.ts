import * as effector from 'effector';
export * from 'effector';

export const root = effector.createDomain('root');

export const { createDomain, createEffect, createEvent, createStore } = root;
