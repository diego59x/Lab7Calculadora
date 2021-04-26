import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button tests', () => {
  test('input renders', () => {
    render(<Button />)
  })
  test('can become active', () => {
    const { container } = render(<Button active />)
    expect(container.firstChild).toHaveClass('active')
  })
  test('can have color', () => {
    const { container } = render(<Button color='red' />)
    const el = container.querySelector('.red')
    expect(container.firstChild).toHaveClass('red')
  })
  test('can be click', () => {
    const spy = jest.fn()
    const { container } = render(<Button color='red' onClick = {spy}/>)
    userEvent.click(container.firstChild)
    expect(spy).toHaveBeenCalled()
  })
  test('doesnt call onClick if no click', () => {
    const spy = jest.fn()
    render(<Button color='red' onClick = {spy}/>)
    expect(spy).not.toHaveBeenCalled()
  })
})
