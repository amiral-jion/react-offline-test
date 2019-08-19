import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import PropTypes from 'prop-types'
import Chart from "react-apexcharts";

const propTypes = {
  /** array of data */
  data: PropTypes.arrayOf(PropTypes.shape({
    fuel: PropTypes.string,
    perc: PropTypes.number,
  })),
}

const defaultProps = {
  data: [],
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  }
}))

export function PieChart({ data }) {
  const classes = useStyles()
  const labels = data.map(item => item.fuel)
  const series = data.map(item => item.perc)

  const options = {
    chart: {
      id: "energy-bar"
    },
    labels,
  }
  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      className={classes.root}
    />
  )
}

PieChart.propTypes = propTypes
PieChart.defaultProps = defaultProps

export default PieChart
