import App from '../App.svelte'
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

describe('App', () => {
    it('renders counter with 0 by default', () => {
        render(App)
        expect(screen.getByText('Counter is: 0')).toBeInTheDocument()
    })

    it('increments the counter', () => {
        render(App)

        const incrementButton = screen.getByText('Increment');

        userEvent.click(incrementButton)
        userEvent.click(incrementButton)
        userEvent.click(incrementButton)

        expect(screen.getByText('Counter is: 3')).toBeInTheDocument()
    })
});
