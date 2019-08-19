import React from 'react'
import { render, waitForDomChange } from '@testing-library/react'
import { WithTheme } from '../../utils'
import PieChart from './PieChart'

const data = [
  {
    "fuel": "biomass",
    "perc": 4.8
  },
  {
    "fuel": "coal",
    "perc": 2.5
  },
  {
    "fuel": "imports",
    "perc": 8.7
  },
  {
    "fuel": "gas",
    "perc": 46.5
  },
  {
    "fuel": "nuclear",
    "perc": 16.1
  },
  {
    "fuel": "other",
    "perc": 0.3
  },
  {
    "fuel": "hydro",
    "perc": 0.9
  },
  {
    "fuel": "solar",
    "perc": 14.6
  },
  {
    "fuel": "wind",
    "perc": 5.6
  }
]
console.warn = () => {}

describe('<PieChart />', () => {
  it('render and display all the data correctly ', () => {
    const { container } = render(
      <WithTheme>
        <PieChart data={data}/>
      </WithTheme>,
    )

    waitForDomChange()

    setTimeout(() => {
      data.forEach(item => {
        expect(container.textContent).toContain(item.fuel)
        expect(container).toContain(item.perc)
      }, 1000)
    })
  })
})
