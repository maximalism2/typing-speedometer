import { render, screen } from '@testing-library/svelte'
import TextDisplay from './TextDisplay.svelte'

describe('TextDisplay', () => {
  it('renders passed text', () => {
    render(TextDisplay, {
        text: 'Hello world!'
    })

      expect(screen.getByText('Hello world!')).toBeInTheDocument()
  })
})
