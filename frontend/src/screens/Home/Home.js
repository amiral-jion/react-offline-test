import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Header from '../../components/Header/Header'
import PieChart from '../../components/PieChart/PieChart'
import Footer from '../../components/Footer/Footer'


const propTypes = {}

const defaultProps = {}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
}))

export function Home({ }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header title="energy generation in the UK " back classname={classes.header}/>
      <PieChart data={ [
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
      ]} />
      <Footer/>
    </div>
  )
}

Home.propTypes = propTypes
Home.defaultProps = defaultProps

export default Home
