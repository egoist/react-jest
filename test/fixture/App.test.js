import React from 'react'
import { render } from 'react-dom'
import App from './App'

test('render without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)
})
