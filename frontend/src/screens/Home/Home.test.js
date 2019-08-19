import React from 'react'
import { render, waitForDomChange } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

import mockGetGenerationMix from '../../hooks/GetGenerationMix/mockGetGenerationMix'
import GetGenerationMix from '../../hooks/GetGenerationMix/GetGenerationMix.graphql.js'
import Home from './Home'
import { WithTheme } from '../../utils'

console.warn = () => {}
describe('Home', () => {
  it('display the loading spinner correctly', async () => {
    const GenerationMixMock = {
      request: {
        query: GetGenerationMix,
      },
      result: mockGetGenerationMix,
    }
    const { queryByLabelText } = render(
      <WithTheme>
        <MockedProvider mocks={[GenerationMixMock]}>
          <Home/>
        </MockedProvider>
      </WithTheme>,
    )

    expect(queryByLabelText('loading')).toBeTruthy()
  })

  it('display the header and the footer', async () => {
    const GenerationMixMock = {
      request: {
        query: GetGenerationMix,
      },
      result: mockGetGenerationMix,
    }
    const { queryByText } = render(
      <WithTheme>
        <MockedProvider mocks={[GenerationMixMock]}>
          <Home/>
        </MockedProvider>
      </WithTheme>,
    )

    expect(queryByText(/copyright/i)).toBeTruthy()
    expect(queryByText(/Energy Generation In The UK/i)).toBeTruthy()
  })

  it('fetch the data from the api and display it', async () => {
    const GenerationMixMock = {
      request: {
        query: GetGenerationMix,
      },
      result: mockGetGenerationMix,
    }
    const { container } = render(
      <WithTheme>
        <MockedProvider mocks={[GenerationMixMock]}>
          <Home/>
        </MockedProvider>
      </WithTheme>,
    )

    await waitForDomChange()

    setTimeout(() => {
      mockGetGenerationMix.data.getGenerationMix.generationmix.forEach(item => {
        expect(container.textContent).toContain(item.fuel)
        expect(container.textContent).toContain(item.perc)
      })
    }, 1000)
  })
})
