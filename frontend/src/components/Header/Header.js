import React from 'react'
import AppBar from '@material-ui/core/AppBar/AppBar'
import Typography from '@material-ui/core/Typography/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import PropTypes from 'prop-types'

const propTypes = {
  /** the title of the page */
  title: PropTypes.string,
}

const defaultProps = {
  title: '',
}

const useStyles = makeStyles(() => ({
  root: {
    height: 70,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    paddingTop: 20,
    paddingLeft: 50,
    fontWeight: 800,
    textTransform: 'capitalize',
  },
}))

export function Header({ title }) {
  const classes = useStyles()

  return (
    <AppBar
      aria-label="header"
      position="static"
      className={classes.root}
    >
      <div className={classes.content}>
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
      </div>

    </AppBar>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
