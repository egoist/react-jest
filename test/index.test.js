const reactJest = require('../')

reactJest({
  argv: ['--env=jsdom', 'test/fixture/App.test.js']
})
