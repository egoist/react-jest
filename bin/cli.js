#!/usr/bin/env node
const readPkg = require('read-pkg')
const runJest = require('../')

const pkg = readPkg.sync(process.cwd())
const jestConfig = pkg.jest

runJest({
  argv: process.argv.slice(2),
  jestConfig
})
