# effector-root

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io)

All units of the effector created in root domain

##Motivation

Sometimes we developed our apps and just afterwards start thinking about SSR and testing. For these purposes any effector app need to have root domain. 
Usually we just manually update declarations. For example, from `createEvent` to `rootDomain.createEvent`. It takes time. effector-root provides you the possibility to have all units attached to the root domain without any manual actions.

##Usage

To retrieve our app root domain we need just to import it.

```
import { root } from 'effector-root'
```
