const path = require('path')
const merge = require('lodash.merge')

module.exports = function ({
  jestConfig
} = {}) {
  let config = {
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    testPathIgnorePatterns: [
      '<rootDir>[/\\\\](build|docs|node_modules|scripts)[/\\\\]'
    ],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(js|jsx)$': path.join(__dirname, 'babel-transform.js'),
      '^.+\\.css$': path.join(__dirname, 'css-transform.js'),
      '^(?!.*\\.(js|jsx|css|json)$)': path.join(__dirname, 'file-transform.js')
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleNameMapper: {
      '^react-native$': 'react-native-web'
    }
  }

  if (typeof jestConfig === 'function') {
    config = jestConfig(config)
  } else if (typeof jestConfig === 'object') {
    config = merge(config, jestConfig)
  }

  return config
}
