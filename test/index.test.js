const reactJest = require('../')

reactJest({
  argv: ['test/fixture/App.test.js'],
  jestConfig: {
    transform: {
      '^.+\\.vue$': require.resolve('jest-vue-preprocessor')
    }
  }
})
