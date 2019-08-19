import { ThemeProvider } from '@material-ui/styles'
import React from 'react'

import theme from './theme'

export const WithTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
