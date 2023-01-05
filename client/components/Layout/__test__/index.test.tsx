import { render, screen } from '@testing-library/react'
import Layout from '../index'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Layout />)

        const ele = screen.getByText('Welcome to React')

        expect(ele).toBeInTheDocument()
    })
})
