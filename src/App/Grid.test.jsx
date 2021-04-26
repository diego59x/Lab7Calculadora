import React from 'react'
import { render, screen } from '@testing-library/react'
import Grid from './Grid'
import userEvent from '@testing-library/user-event'

describe('calculator', () => {
  test('GRID renders.', () => {
    render(<Grid />)
  })
  test('has 13 buttons.', () => {
    const { container } = render(<Grid />)
    const buttons = screen.getAllByRole('button')
    expect(container).toBe(13)
  })
  test('buttons become active when click.', () => {
    const { container } = render(<Grid />)
    const button = container.querySelector('button:first-child')
    expect(button).not.toBeNull()
    expect(button).toBeInTheDocument()
    userEvent.click(firstButton)
    expect(button).toHaveClass('active')
  })
})
