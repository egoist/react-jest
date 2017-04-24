# react-jest

[![NPM version](https://img.shields.io/npm/v/react-jest.svg?style=flat)](https://npmjs.com/package/react-jest) [![NPM downloads](https://img.shields.io/npm/dm/react-jest.svg?style=flat)](https://npmjs.com/package/react-jest) [![CircleCI](https://circleci.com/gh/egoist/react-jest/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/react-jest/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

Inspired by `create-react-app` but `react-jest` comes as a standalone module, basically this would work out of the box for projects created by `create-react-app` and most React projects.

## Install

```bash
# Recommend
yarn add react-jest --dev
# Alternative
# yarn global add react-jest
```

## Features

- `.js|jsx` files are transformed with `babel-preset-react-app` which is used by `create-react-app`, you can also use custom `.babelrc`.
- Run tests in `jsdom` enviroment by default.
- Importing css files would return an empty object, while importing other kinds of file would return the path to it.
- Support all Jest cli options.
- Support API usage.

## Usage

Let's say that you already wrote some jest tests for your React app, for example `src/App.test.js`, then configure npm scripts:

```js
{
  "scripts": {
    "test": "react-jest"
  }
}
```

 Then run `npm test`, and it accepts all [jest cli options](https://facebook.github.io/jest/docs/cli.html), for example if you don't need browser environment, use `react-jest --env=node`.

 <img src="https://ooo.0o0.ooo/2017/04/24/58fdf89eda405.png" alt="preview" />

 Which is also worth noting, you can still configure `jest` field in `package.json`, `react-jest` will load it automatically.

## API

Besides using as a CLI utility, you can also use the `react-jest` node.js API.

```js
const runJest = require('react-jest')

runJest(options)
```

### options

#### jestConfig

Type: `object` `function`

*- object:*

Use your [custom jest config](https://facebook.github.io/jest/docs/configuration.html#content) which will be merged (using lodash.merge) with base jest config.

*- function:*

Use a function to mutate base jest config:

```js
function mutateJestConfig(config) {
  // Use polyfill before each test
  config.setupFiles = ['./src/polyfills.js']
  return config
}
```

#### argv

Type: `Array`

Addtional CLI arguments for jest cli, like `['--env=node']`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**react-jest** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/react-jest/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
