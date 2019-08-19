import React from 'react'
import { render, waitForDomChange } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'

import useGetGenerationMix from './useGetGenerationMix'
import mockGetGenerationMix from './mockGetGenerationMix'
import GetGenerationMix from './GetGenerationMix.graphql'

function TestComponent() {
  const { data, loading } = useGetGenerationMix()
  const { getGenerationMix: { generationmix }  = {} } = data || {}

  if (loading) return <span>Loading..</span>
  return <span>{generationmix[0].fuel}</span>
}

describe('GetGenerationMix', () => {
  it('provides the GenerationMix data', async () => {
    const GenerationMixMock = {
      request: {
        query: GetGenerationMix,
      },
      result: mockGetGenerationMix,
    }
    const { container } = render(
      <MockedProvider mocks={[GenerationMixMock]}>
        <TestComponent/>
      </MockedProvider>,
    )

    expect(container.textContent).toBe('Loading..')

    await waitForDomChange()

    expect(container.textContent).toBe('biomass')
  })
})
