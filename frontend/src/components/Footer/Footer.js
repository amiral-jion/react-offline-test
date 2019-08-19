import React from 'react'
import Typography from '@material-ui/core/Typography/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: 50,
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  text: {
    fontSize: 12,
    color: theme.palette.colors.white
  },
}))

export function Footer() {
  const classes = useStyles()
  return (
    <div
      aria-label="footer"
      className={classes.root}
    >
      <div className={classes.content}>
        <Typography variant="body2" className={classes.text}>
         Copyright 2019
        </Typography>
      </div>
    </div>
  )
}

export default Footer
