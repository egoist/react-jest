import React from 'react'
import { render } from 'react-dom'
import App from './App'
import foo from './foo.txt'
import bar from './bar.vue'

test('render without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})

test('load file', () => {
  expect(foo).toBe('foo.txt')
})

test('custom jest config', () => {
  expect(typeof bar.render).toBe('function')
})
