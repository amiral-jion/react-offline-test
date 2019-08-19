import React from 'react'
import Helmet from 'react-helmet'
import { JssProvider } from 'react-jss'
import { jssPreset, ThemeProvider } from '@material-ui/styles'
import { create as createJss } from 'jss'
import CssBaseline from '@material-ui/core/CssBaseline'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import theme from './theme'
import Home from './screens/Home'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

const jss = createJss(jssPreset())

function App() {
  return (
    <ApolloProvider client={client}>
        <JssProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Helmet defaultTitle="Energy"/>
            <CssBaseline/>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Home />
            </React.Suspense>
          </ThemeProvider>
        </JssProvider>
    </ApolloProvider>
  )
}

export default App
