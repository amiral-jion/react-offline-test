import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    default: '#4A556B',
    normal: '#151B26',
    primary: { main: '#0079ff', contrastText: '#fff' },
    colors: {
      white: '#fff',
      grey: '#8e8e95',
    },
  },
  typography: {
    default: '#4A556B',
    normal: '#151B26',
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontSize: 18,
    useNextVariants: true,
  },
})

export default theme
