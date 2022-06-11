import { render } from '@testing-library/react'

import HomePage from '~/pages/index'

describe('Home page', () => {
  it('renders without crashing', () => {
    render(<HomePage />)
  })

  it('renders the heading', () => {
    const { getByText } = render(<HomePage />)
    expect(getByText('Teste frontend')).toBeInTheDocument()
  })
})
