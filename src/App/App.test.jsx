/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('Simon says', () => {
  test('Renders correctly.', () => {
    render(<App />)
  })
})
