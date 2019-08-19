import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from './Footer'
import { WithTheme } from '../../utils'

describe('<Footer />', () => {
  it('renders correctly ', () => {
    const { container } = render(
      <WithTheme>
        <Footer />
      </WithTheme>,
    )
    expect(container.textContent).toContain('Copyright')
  })
})
