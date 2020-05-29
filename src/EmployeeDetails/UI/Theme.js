import { createMuiTheme } from '@material-ui/core/styles';

const myPrimary = "#ff6666"
const theme = createMuiTheme({
    palette: {
        common:{
            myPink : `${myPrimary}`,
        },
        primary :{
            main : `${myPrimary}`
        },
        secondary: {
            light: '#ffffff',
            main: '#ffffff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
          },     
    },
    typography: {
        // Tell Material-UI what's the font-size on the html element is.
        htmlFontSize: 10,
    
      },
    status: {
      danger: 'orange',
    },
  });

  export default theme;