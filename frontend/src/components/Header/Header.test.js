import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './Header'
import { WithTheme } from '../../utils'

describe('<Header />', () => {
  it('render and display the title correctly ', () => {
    const { container } = render(
      <WithTheme>
        <Header title="home page"/>
      </WithTheme>,
    )
    expect(container.textContent).toContain('home page')
  })
})
