import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CircularProgress from '@material-ui/core/CircularProgress'

import Header from '../../components/Header/Header'
import PieChart from '../../components/PieChart/PieChart'
import Footer from '../../components/Footer/Footer'
import useGetGenerationMix from '../../hooks/GetGenerationMix/useGetGenerationMix'


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
  loading: {
    margin: 'auto',
  },
}))

export function Home({ }) {
  const classes = useStyles()

  const { data, error, loading } = useGetGenerationMix()

  if(error) return <div> something is wrong :/ </div>

  const { getGenerationMix: { generationmix }  = {} } = data || {}
  return (
    <div className={classes.root}>
      <Header title="energy generation in the UK " back classname={classes.header}/>

      {loading && <CircularProgress aria-label="loading" className={classes.loading}/>}

      {generationmix && <PieChart data={generationmix} />}

      <Footer/>
    </div>
  )
}

Home.propTypes = propTypes
Home.defaultProps = defaultProps

export default Home
